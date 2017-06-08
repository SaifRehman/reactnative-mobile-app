import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Modal,
  Dimensions,
  ScrollView
} from 'react-native';
var {width, height} = Dimensions.get('window');
import LoginForm from './loginForm';
const background = require("../../images/login1_bg.png");
const mark = require("../../images/muse.png");
const lockIcon = require("../../images/login1_lock.png");
const personIcon = require("../../images/login1_person.png");
const emailIcon = require("../../images/signup_email.png");
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Login extends Component {
constructor(props){
     super(props);
     console.log(this.props.navigator)
   }
  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background}  resizeMode="cover">
      <View style={styles.logoContainer}>
        <Image
          style = {styles.logo}
          source = {require('../../images/muse.png')}
          />
      </View>
      <View style={styles.form}>
        <LoginForm navigator={this.props.navigator}></LoginForm>
      </View>
        </Image>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    logoContainer: {
     alignItems : 'center',
    flexGrow : 1,
      justifyContent : 'center',

  },
      logo: {
        width: 200,
        height: 200,
  },
  title:{
    color:'#ffffff',
    textAlign:'center',
    opacity:.9
  },
  background: {
    width,
    height,
  }
});
export default Login
