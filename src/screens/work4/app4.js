import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Not, PlaceApi} from '../../Service';
import styles from './styles';
const app1 = props => {
  const {navigation} = props;
  const [city, setCity] = useState('');
  const urlSent = `?il=${city}`;

  const payload = {
    title: 'Blog Title',
    body: 'lorem ipsum',
    userId: 1,
  };
  const [hava, setHava] = useState([]);
  console.log('havaaa', hava);

  const dataa = () => {
    PlaceApi.getPharmsApi(urlSent)
      .then(data => {
        console.log('data', data);
        setHava(data.result);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

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
        <Text style={styles.sehirtext}>{city} icin hava durumu</Text>
      </View>
      <FlatList
        data={hava}
        style={{marginBottom: 230}}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.kutu}>
            <View style={styles.yazikutu}>
              <View style={styles.isimkutu}>
                <Text style={{color: 'white', fontSize: 16}}>{item.dist}</Text>
              </View>
              <View>
                <Text style={{color: 'black', fontWeight: '600'}}>
                  {item.name}
                </Text>
              </View>
            </View>
            <View style={styles.adres}>
              <Text style={styles.adrestext}>Adres:{item.address}</Text>
            </View>
            <View style={styles.telefon}>
              <Text>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default app1;
