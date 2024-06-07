import {View, Text, FlatList, TextInput, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Not, PlaceApi} from '../../Service';
import styles from './styles';
import {cami, mosque} from '../../assets/Image';

const app2 = () => {
  const [city, setCity] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [timeToNextPrayer, setTimeToNextPrayer] = useState('');
  const urlSent = `?data.city=${city}`;

  const payload = {
    title: 'Blog Title',
    body: 'lorem ipsum',
    userId: 1,
  };
  const [ezan, setEzan] = useState([]);
  //console.log('ezan', ezan);

  const dataa = () => {
    console.log('url sent in main', urlSent);
    PlaceApi.getEzanApi(urlSent)
      .then(data => {
        console.log('data', data);
        setEzan(data.result);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };
  const calculateTimeToNextPrayer = (currentDate, prayerTimes) => {
    const TURKEY_TIME_OFFSET = 3 * 60 * 60 * 1000; // Türkiye saat dilimi UTC+3

    // Türkiye saatini elde etmek için UTC saatine 3 saat ekliyoruz
    const currentTime = currentDate.getTime() + TURKEY_TIME_OFFSET;
    let closestTime = null;
    let closestTimeDiff = Infinity;

    prayerTimes.forEach(prayer => {
      const [hour, minute] = prayer.saat.split(':').map(Number);
      const prayerDate = new Date(currentDate); // Güncel tarih ve saati al
      prayerDate.setUTCHours(hour, minute, 0, 0); // Türkiye saatine göre ayarla

      const prayerTime = prayerDate.getTime();
      const timeDiff = prayerTime - currentTime;

      if (timeDiff > 0 && timeDiff < closestTimeDiff) {
        closestTime = prayerDate;
        closestTimeDiff = timeDiff;
      }
    });

    if (closestTime) {
      const hours = Math.floor(closestTimeDiff / (1000 * 60 * 60));
      const minutes = Math.floor(
        (closestTimeDiff % (1000 * 60 * 60)) / (1000 * 60),
      );
      const seconds = Math.floor((closestTimeDiff % (1000 * 60)) / 1000);
      return (
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={styles.saat}>
            <Text style={{color: 'black', fontSize: 24, fontWeight: '600'}}>
              {hours}
            </Text>
            <Text>saat </Text>
          </View>
          <View style={styles.saat}>
            <Text style={{color: 'black', fontSize: 24, fontWeight: '600'}}>
              {minutes}
            </Text>
            <Text>dakika</Text>
          </View>
        </View>
      );
    } else {
      return 'Tüm ezan saatleri geçti';
    }
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Europe/Istanbul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const timeString = now.toLocaleTimeString('tr-TR', options);
      setCurrentTime(timeString);

      const nextPrayerTime = calculateTimeToNextPrayer(now, ezan);
      setTimeToNextPrayer(nextPrayerTime);
    };

    // İlk saati ayarla
    updateCurrentTime();

    // Her saniye güncelle
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Temizlik işlemi
    return () => clearInterval(intervalId);
  }, [ezan]);

  return (
    <View style={{backgroundColor: '#71A8D9', flex: 1}}>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <TextInput
          style={{
            backgroundColor: '#BDDEF2',
            width: 300,
            height: 50,
            borderRadius: 50,
            padding: 10,
            marginTop: 10,
          }}
          placeholder="Aramak istediğiniz şehri giriniz"
          value={city}
          onChangeText={value => setCity(value)}
          onSubmitEditing={dataa}
        />
      </View>
      <View style={styles.sehir}>
        <Text style={styles.sehirtext}>{city} icin ezan vakitleri</Text>
      </View>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Image style={styles.cami} source={mosque} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 24, color: 'black'}}>{timeToNextPrayer}</Text>
      </View>
      <FlatList
        data={ezan}
        numColumns={3}
        style={{marginTop: 30}}
        renderItem={({item}) => (
          <View style={{alignItems: 'center', flex: 1}}>
            <View style={styles.kutu}>
              <View>
                <Text
                  style={{color: '#BDDEF2', fontWeight: '600', fontSize: 16}}>
                  {item.vakit}
                </Text>
              </View>
              <View>
                <Text style={{color: 'black', fontWeight: '600', fontSize: 22}}>
                  {item.saat}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default app2;
