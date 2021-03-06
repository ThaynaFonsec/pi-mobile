/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useForm} from 'react-hook-form';

//Dev components and providers
import AuthContext from '../../contexts/auth';
import RegularButton from '../../components/RegularButton';
import CustomInput from '../../components/CustomInput';
import {styles} from './styles';

export default function RegisterPage({navigation}) {
  const {SignUp} = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    watch,
    formState: {errors},
  } = useForm();
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const pwd = watch('password');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={styles.container}>
        {/*App logo*/}
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('../../assets/Logo.png')}
          />
        </View>
        {/*Component who wrap the inside part of input field*/}
        <View style={styles.insideComponent_FormWrapper}>
          <CustomInput
            key={0}
            name="email"
            inputTitle="Email:"
            iconName="mail"
            control={control}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Insira o seu email..."
            rules={{
              required: 'Campo obrigatório',
              pattern: {value: EMAIL_REGEX, message: 'Email inválido'},
            }}
          />
          <CustomInput
            key={1}
            name="password"
            inputTitle="Senha:"
            iconName="unlock"
            control={control}
            autoCapitalize="none"
            placeholder="Digite sua senha..."
            secureTextEntry={true}
            rules={{required: 'Campo obrigatório'}}
          />
          <CustomInput
            key={2}
            name="validatePassword"
            inputTitle="Confirme a senha:"
            iconName="lock1"
            control={control}
            autoCapitalize="none"
            placeholder="Digite a senha inserida novamente..."
            secureTextEntry={true}
            rules={{
              validate: value =>
                value === pwd || 'A senha digitada é diferente',
            }}
          />
        </View>

        {/*
      -- Component who wrap the outside part of input field
      -- Has 2 parts
      -- Login part and the register part
      */}

        <View style={styles.outsideComponent_Login}>
          <Pressable onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
          </Pressable>
        </View>
        {/*Divider*/}
        <View style={styles.outsideComponent_Register}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>REGISTRAR-SE</Text>
        </View>

        {/*
      -- Submit button;
      -- Has 2 parts;
      -- The wrapper button, and the button itself
      */}

        <View style={{alignItems: 'center', paddingTop: 204}}>
          <RegularButton
            title="Registra-se"
            iconName="save"
            func={handleSubmit(SignUp)}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
