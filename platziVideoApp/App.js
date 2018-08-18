import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

export default class App extends Component {
  render() {
    return (
      <Home>
        <Header>
          <Text>
            Ola ke ase
          </Text>
        </Header>
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
