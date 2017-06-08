import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native'
var {width, height} = Dimensions.get('window');
const background = require("../../images/signup_bg.png");
const backIcon = require("../../images/back.png");
const personIcon = require("../../images/signup_person.png");
const lockIcon = require("../../images/signup_lock.png");
const emailIcon = require("../../images/signup_email.png");
const birthdayIcon = require("../../images/signup_birthday.png");
const phone = require("../../images/phone.png");
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ScrollBlockView from 'react-native-scroll-block-view';
import {Actions} from 'react-native-router-flux';
export default class SignupView extends Component {
    constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
}
    onButtonPress () {
          Actions.pop();
    }
      onButtonPress1 () {

        fetch("http://techlake.org/api/index.php/post", {method: "POST", body: JSON.stringify({"email":this.state.email,"nickname":this.state.nickname,"password":this.state.password,"phone":this.state.phone,"auth":"0"})})
.then((response) => {
  console.log(response);
  if(response.ok)
  return response.json();
  else
  throw 'ERROR';
})
.then((responseData) => {
console.log(responseData);
}).catch(error =>{
  console.log(error);
})
.done();
      }
  render() {
    return (

<KeyboardAwareScrollView  style={styles.container}>
<Image source={background} style={styles.background}  resizeMode="cover">
        <View style={styles.logoContainer}>
        <Image
          style = {styles.logo}
          source = {require('../../images/muse.png')}
          />
      </View>

     <View style={styles.container1}>
           <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Nick"
                placeholderTextColor="#FFF"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => this.setState({nickname:text})}
                autoCorrect={false}
              />
            </View>

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
                autoCapitalize="none"
               onChangeText={(text) => this.setState({email:text})}
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

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={phone}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
              style={[styles.input, styles.whiteFont]}
               placeholder="Phone Number"
               placeholderTextColor="#FFF"
               onChangeText={(text) => this.setState({phone:text})}
                keyboardType="phone-pad"
              />
            </View>
          <TouchableOpacity activeOpacity={.5}  onPress={this.onButtonPress1.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign UP</Text>
              </View>
        </TouchableOpacity>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Already have an account?</Text>
              <TouchableOpacity activeOpacity={.5} onPress={this.onButtonPress.bind(this)} >
                <View>
                  <Text style={styles.signupLinkText}>Sign In</Text>
                </View>
              </TouchableOpacity>

            </View>

      </View>
        </Image>

      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
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
    logoContainer: {
     alignItems : 'center',
    flexGrow : 1,
      justifyContent : 'center',

  },
  whiteFont: {
    color: '#FFF'
  },
  background: {
    width,
    height,
  },
      logo: {
        width: 200,
        height: 200,
      }
});
