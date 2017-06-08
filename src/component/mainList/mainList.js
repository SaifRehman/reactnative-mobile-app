import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Modal,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import SignupView from '../signup/signup';
import FreelanceModels from '../freelanceModels/freelanceModels';

import {Actions} from 'react-native-router-flux';
var {width, height} = Dimensions.get('window');
class MainList extends Component {
constructor(props){
  super(props)
   }
    onButtonPressFreelance () {
    Actions.FreelanceModels();
  }
  render() {
    return (
        <View style={styles.container }>
        < TouchableOpacity style={styles.card} activeOpacity={.5} onPress={this.onButtonPressFreelance.bind(this)}>
          <Image
        source={require('../../images/1.jpg')}
        style={styles.container2}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
        source={require('../../images/2.jpg')}
        style={styles.container2}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
        source={require('../../images/3.jpg')}
        style={styles.container2}>
          </Image>
        </TouchableOpacity>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1 
  },
  card: {
    flex:1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    height: 200
  },
  container2: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width:400
  },
});
export default MainList
