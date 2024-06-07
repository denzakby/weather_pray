import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Not, PlaceApi} from '../../Service';
import styles from './styles';

const app3 = () => {
  const [city, setCity] = useState('');
  const urlSent = `?il=${city}`;
  const payload = {
    title: 'Blog Title',
    body: 'lorem ipsum',
    userId: 1,
  };
  const [pharms, setPharms] = useState([]);
  console.log('pharms', pharms);
  const dataa = () => {
    PlaceApi.getPharmsApi(urlSent)
      .then(data => {
        console.log('data in home', data);
        setPharms(data.result);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  //const sortedPharms = pharms.sort((a, b) => a.dist.localeCompare(b.dist));
  return (
    <View>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <TextInput
          style={{
            backgroundColor: '#EDEDED',
            width: 300,
            height: 60,
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
        <Text style={styles.sehirtext}>{city} icin nöbetçi eczaneler</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'space-around'}}>
        <FlatList
          data={pharms}
          style={{marginBottom: 230}}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.kutu}>
              <View style={styles.yazikutu}>
                <View style={styles.isimkutu}>
                  <Text style={{color: 'white', fontSize: 16}}>
                    {item.dist}
                  </Text>
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
    </View>
  );
};

export default app3;
