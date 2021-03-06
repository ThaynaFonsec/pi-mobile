import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  filterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    //borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 8,
    paddingHorizontal: 16,
    //marginTop: 8,
    width: '100%',
    height: 40,
    backgroundColor: '#E5E5E5',
  },
  buttonDisable: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: 'white',
    width: 70,
    height: 24,
    backgroundColor: 'white',
  },
  buttonActivate: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    borderRadius: 40,
    borderColor: 'white',
    width: 70,
    height: 24,
    backgroundColor: '#03113C',
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
    height: 50,
    width: 50,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActionPressed: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearFilterPressed: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: 'red',
    width: 50,
    height: 25,
  },
  clearFilterStatic: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'red',
    width: 50,
    height: 25,
  },
});
