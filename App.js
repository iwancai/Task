import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Nama: Muhamad Ridwan</Text>        
        <Image source=
              {{uri: 'https://scontent.fcgk1-1.fna.fbcdn.net/v/t1.0-9/1384045_10200281384469108_1806222785_n.jpg?oh=1e1cd3503b334158a7d2bff352941bda&oe=5A8BB721'}}
              style={{width: 300, height: 300}} />
        <Text style={{fontSize: 50}}>Batch Refactory: GAMBINO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
