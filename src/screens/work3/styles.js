import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  sehir: {
    alignItems: 'center',
    marginBottom: windowWidth * 0.05,
  },
  sehirtext: {
    fontSize: windowWidth * 0.05,
    color: 'black',
    fontWeight: '600',
  },
  kutu: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.3,
    borderWidth: windowWidth * 0.002,
    borderColor: 'gray',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    marginBottom: windowWidth * 0.05,
  },
  yazikutu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: windowWidth * 0.015,
    width: windowWidth * 0.7,
  },
  adres: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.13,
    justifyContent: 'center',
  },
  adrestext: {
    fontSize: windowWidth * 0.035,
    color: 'black',
    fontWeight: '600',
  },
  isimkutu: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.1,
    backgroundColor: '#17A2B8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.01,
  },
  telefon: {
    width: windowWidth * 0.7,
    alignItems: 'flex-end',
  },
});
