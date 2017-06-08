import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Navigator,
  AlertIOS,
  AsyncStorage,
  ScrollView
} from 'react-native';
import SignupView from '../signup/signup';
import TabView from '../tabview/tabview';

import {Actions} from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import md5 from "react-native-md5";
const background = require("../../images/login1_bg.png");
const mark = require("../../images/muse.png");
const lockIcon = require("../../images/login1_lock.png");
const personIcon = require("../../images/login1_person.png");
const emailIcon = require("../../images/signup_email.png");
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//onPress={this.onButtonPress.bind(this)}
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onButtonPressSignin = this.onButtonPressSignin.bind(this);
        this.state={
      visible: false
    };
}
  onButtonPressSignin () {
    Actions.TabView();
  }
  onButtonPress () {
          this.setState({
        visible: !this.state.visible
      });
    //let username = this.state.username;
    //let password = md5.hex_md5( this.state.password);
  /*  fetch("https://aebisslab.com/lift/apis/user.php/login", {method: "POST", body: JSON.stringify({username: username, password: password})})
.then((response) => {
      console.log(response);
      if(response.ok)
      return response.json();
      else
      throw 'ERROR';
    })
.then((responseData) => {
    console.log(responseData.token);
    AsyncStorage.setItem("token", responseData.token);
    AsyncStorage.getItem("token").then((value) => {
    navigator.geolocation.getCurrentPosition(
    (position) => {
                 console.log("latitude displayed");
      console.log(position.coords.latitude);
            fetch("https://aebisslab.com/lift/apis/user.php/getPoints", {method: "POST", body: JSON.stringify({latitude: position.coords.latitude, longitude: position.coords.latitude,token:value})})
.then((response) => {
      console.log(response);
      if(response.ok)
      return response.json();
      else
      throw 'ERROR';
    })
.then((responseData) => {
    console.log(responseData);
              AsyncStorage.setItem("info", JSON.stringify(responseData));

    Actions.Map({data:this.state.initialPosition});
                                  this.setState({
        visible: !this.state.visible
      });
}).catch(error =>{
 this.setState({
        visible: false
      });
                 })
.done();
        console.log(position.coords.latitude);
        console.log(position.coords.latitude);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000 },
    );
      console.log(value);
}).done();
      //Actions.Map();
}).catch(error =>{
             this.setState({
        visible: false
      });
      console.log(error);
                 })
.done();
*/
    Actions.SignupView();
};
  render() {
    return (
      <View style={styles.container}>
           <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={emailIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => this.setState({username:text})}
                autoCorrect={false}
              />
            </View>

                   <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={lockIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
              style={[styles.input, styles.whiteFont]}
               placeholder="Password"
               placeholderTextColor="#FFF"
               secureTextEntry
               onChangeText={(text) => this.setState({password:text})}
              />
            </View>
        <TouchableOpacity activeOpacity={.5}  onPress={this.onButtonPressSignin.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
        </TouchableOpacity>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Dont have an account?</Text>
              <TouchableOpacity activeOpacity={.5} onPress={this.onButtonPress.bind(this)} >
                <View>
                  <Text style={styles.signupLinkText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
            <KeyboardSpacer/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  login:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.8)',
    marginBottom:10,
    color:"#000",
    paddingHorizontal:10
  },

  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 13,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  whiteFont: {
    color: '#FFF'
  }
});
export default LoginForm
