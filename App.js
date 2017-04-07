import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Header textShown={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

