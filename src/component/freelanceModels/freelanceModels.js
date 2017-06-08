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

import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navigation-bar';

import {Actions} from 'react-native-router-flux';
var {width, height} = Dimensions.get('window');
class FreelanceModels extends Component {
constructor(props){
  super(props)
   }

  render() {
    return (
         <ScrollView style={styles.tabView}>
            <NavigationBar 
        title={'this is a test'}
        height={44}
        titleColor={'#fff'}
        backgroundColor={'#149be0'}
        leftButtonTitle={'back'}
        leftButtonTitleColor={'#fff'}
        rightButtonTitle={'forward'}
        rightButtonTitleColor={'#fff'}
    /> 
      <View style={styles.projectRow}>
        <TouchableOpacity activeOpacity={.5} style={styles.projectText}>
          <Text style={styles.itemName}>Hire A Model</Text>
          <Text style={styles.itemDetails}> 2/7/2017 </Text>        
        </TouchableOpacity>
        <View style={styles.moreContainer}>
          <Icon name="chevron-right" size={15} style={styles.moreIcon} />
        </View>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    projectText: {
    flex: 1,
    flexDirection: 'column'
  },
  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15
  },
   itemName: {
     fontSize: 18,
     color: '#FFFFFF',
   },
   itemDetails: {
     fontSize: 12,
     color: 'red',
   },

   moreContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

   moreIcon: {
     color: "#FFFFFF"
   },
  tabView: {
    backgroundColor: '#2C3E50',
    flex: 0.5
  }
});
export default FreelanceModels
