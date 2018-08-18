import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

const Header = (props)=>{
 return(
   <View>
    <SafeAreaView>
      <View style={ style.container }>
        <Image
          source={require('../../../assets/logo.png')}
          style={ style.logo }
        />
        <View style={ style.right }>
          { props.children }
        </View>
      </View>
    </SafeAreaView>
   </View>
 )
}

const style = StyleSheet.create({
  container:{
    padding: 10,
    backgroundColor: '#e9eaeb',
    flexDirection: 'row',
  },
  right:{
    backgroundColor: '#5f5f5f',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 80,
    height: 24,
    resizeMode:'contain',
  },
});

export default Header;