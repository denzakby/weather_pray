import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const havalist = props => {
  const {dataa} = props;

  return (
    <View>
      <FlatList
        data={dataa}
        style={{marginBottom: 120}}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.top}>
            <View style={styles.kutu}>
              <View style={styles.resimyer}>
                <Image style={styles.resim} source={{uri: item.icon}} />
              </View>
              <View style={styles.yaziyer}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#F2F2F2',
                        fontSize: 18,
                        fontWeight: '600',
                      }}>
                      {item?.date}
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#BAC2D9'}}>{item.day}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 30,
                  }}>
                  <Text style={{color: '#F2F2F2', fontSize: 16}}>
                    {item.description}
                  </Text>
                  <Text style={{color: '#F2F2F2', fontSize: 16, marginLeft: 5}}>
                    {item.degree}°
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#BAC2D9', fontSize: 14, fontWeight: '600'}}>
                    max sıcaklık: {item.max}
                  </Text>
                  <Text
                    style={{color: '#BAC2D9', fontSize: 14, fontWeight: '600'}}>
                    min sıcaklık: {item.min}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default havalist;
