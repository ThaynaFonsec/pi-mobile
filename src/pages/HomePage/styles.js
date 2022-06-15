import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  labelDisable: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#03113C',
  },
  labelActivate: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  cardGroupWrapper: {
    alignItems: 'center',
    height: '80%',
    width: '96%',
    marginTop: 16,
    //backgroundColor: 'white'
  },
  cardWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 96,
    width: 336,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#03113C',
    borderRadius: 16,
  },
  cardAvatar: {
    flex: 1,
    alignItems: 'center',
  },
  playerInfo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActionStatic: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActionPressed: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoppingCartButtonStatic: {
    height: 75,
    width: 75,
    marginTop: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'green',
  },
  shoppingCartButtonPressed: {
    height: 75,
    width: 75,
    borderRadius: 40,
    backgroundColor: 'green',
    marginTop: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoppingCartTextStatic: {
    color: 'green',
    fontWeight: 'bold',
  },
  shoppingCartTextPressed: {
    color: 'white',
    fontWeight: 'bold',
  },
});