import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  kutu: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.8,
    borderWidth: windowWidth * 0.003,
    borderRadius: windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: windowWidth * 0.1,
    borderColor: '#BAC2D9',
  },
  top: {
    alignItems: 'center',
  },
  resim: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
  },
  resimyer: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.4,
    justifyContent: 'center',
  },
  yaziyer: {
    width: windowWidth * 0.55,
    height: windowWidth * 0.4,
    paddingLeft: windowWidth * 0.05,
  },
});
