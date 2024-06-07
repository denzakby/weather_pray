import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  sehir: {
    alignItems: 'center',
  },
  sehirtext: {
    fontSize: windowWidth * 0.07,
    color: '#F2F2F2',
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginRight: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
  },
  buttonText: {
    color: '#F2F2F2',
  },
  top: {
    alignItems: 'center',
  },
  resim: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
  },
  resimyer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth * 0.05,
  },
  yaziyer: {
    alignItems: 'center',
  },
  humidity: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    tintColor: '#F2F2F2',
  },
  ayartext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: windowWidth * 0.05,
    width: windowWidth,
  },
  resim2: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  kutu: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: windowWidth * 0.002,
    height: windowWidth * 0.2,
    width: windowWidth * 0.13,
    shadowOffset: {width: 5, height: 5},
    elevation: 1,
  },
  liststyle: {
    marginLeft: windowWidth * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
