import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import Home from './src/screens/containers/home';

export default class App extends Component {
  render() {
    return (
      <Home>
        <Text>
          Header
        </Text>
        <Text>
          Search
        </Text>
        <Text>
          Categories
        </Text>
        <Text>
          Suggestions
        </Text>
      </Home>
    );
  }
}
