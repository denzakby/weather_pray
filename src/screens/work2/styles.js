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
    width: windowWidth * 0.2,
    height: windowWidth * 0.13,
    backgroundColor: '#1FA675',
    marginBottom: windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.02,
  },
  saat: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    backgroundColor: '#1FA675',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: windowWidth * 0.01,
  },
  cami: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
  },
});
