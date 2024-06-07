import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Not, PlaceApi} from '../../Service';
import styles from './styles';
import HavaList from '../../components/HavaList/havalist';
import {humudity} from '../../assets/icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const app1 = props => {
  const {navigation} = props;
  const [city, setCity] = useState('');
  const data = {
    lang: 'tr',
  };
  const urlSent = `?data.lang=${data.lang}&data.city=${city}`;

  const payload = {
    title: 'Blog Title',
    body: 'lorem ipsum',
    userId: 1,
  };
  const [hava, setHava] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('havaaa', hava);

  const dataa = () => {
    PlaceApi.getNewsApi(urlSent)
      .then(data => {
        console.log('data', data);
        setHava(data.result);
        setCurrentIndex(0);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  const nextDay = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 < hava.length ? prevIndex + 1 : 0,
    );
  };

  const previousDay = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : hava.length - 1,
    );
  };
  const getFirstThreeChars = str => {
    return str ? str.slice(0, 3) : '';
  };
  const currentWeather = hava[currentIndex];
  return (
    <View style={{backgroundColor: '#6C9BD9', flex: 1}}>
      <View style={{alignItems: 'center', marginBottom: 10, marginTop: 10}}>
        <TextInput
          style={{
            backgroundColor: '#A7C8F2',
            width: 300,
            height: 50,
            borderRadius: 50,
            padding: 10,
          }}
          placeholder="Aramak istediğiniz şehri giriniz"
          value={city}
          onChangeText={value => setCity(value)}
          onSubmitEditing={dataa}
        />
      </View>
      <View style={styles.sehir}>
        <Text style={styles.sehirtext}>{city} </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}></View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button color={'#0477BF'} title="<" onPress={previousDay} />
        </View>
        <View style={styles.button}>
          <Button color={'#0477BF'} title=">" onPress={nextDay} />
        </View>
      </View>
      <View>
        {currentWeather ? (
          <View>
            <View style={styles.yaziyer}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#F2F2F2',
                      fontSize: 28,
                      fontWeight: '600',
                    }}>
                    {currentWeather.day}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#BAC2D9', fontWeight: '600', fontSize: 16}}>
                    {currentWeather.date}
                  </Text>
                </View>
              </View>
              <View style={styles.resimyer}>
                <Image
                  style={styles.resim}
                  source={{uri: currentWeather.icon}}
                />
              </View>
              <View>
                <Text style={{color: '#F2F2F2', fontSize: 28, marginTop: 10}}>
                  {currentWeather.degree}°C
                </Text>
              </View>
              <View style={styles.ayartext}>
                <View style={{alignItems: 'center', marginLeft: 40}}>
                  <Image style={styles.humidity} source={humudity} />
                  <Text>{currentWeather.humidity}</Text>
                </View>
                <View style={{marginRight: 40, flexDirection: 'row'}}>
                  <Text
                    style={{color: '#BAC2D9', fontSize: 14, fontWeight: '600'}}>
                    max {currentWeather.max}
                  </Text>
                  <Text
                    style={{color: '#BAC2D9', fontSize: 14, fontWeight: '600'}}>
                    /min {currentWeather.min}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <Text style={{textAlign: 'center', marginTop: 20}}>
            Veri yükleniyor...
          </Text>
        )}
      </View>
      <FlatList
        data={hava}
        horizontal={true}
        style={{width: windowWidth * 1}}
        renderItem={({item}) => (
          <View style={styles.liststyle}>
            <View style={styles.kutu}>
              <View>
                <Text>{getFirstThreeChars(item.day)}</Text>
              </View>
              <View>
                <Image style={styles.resim2} source={{uri: item.icon}} />
              </View>
              <View>
                <Text>{item.degree}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default app1;
