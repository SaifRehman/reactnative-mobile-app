import React, { Component } from 'react';
 import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
  AsyncStorage,
  ScrollView,
  Image,
} from 'react-native';
import MainList from '../mainList/mainList';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';
import MapView from 'react-native-maps';
import {Actions} from 'react-native-router-flux';
var TimerMixin = require('react-timer-mixin');
import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { GiftedChat } from 'react-native-gifted-chat';

export default class TabView extends Component {
constructor(props) {
  console.log("map constructor");
  super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
}
    componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
    onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  
   render() {
    return <ScrollableTabView
      tabBarPosition="bottom"
      style={{marginTop: 20,}}
      initialPage={1}
      renderTabBar={() => <FacebookTabBar/>}
      >
      <ScrollView tabLabel="ios-paper" style={styles.tabView}>
        <MainList></MainList>
      </ScrollView>
      <ScrollView tabLabel="ios-search" style={styles.tabView}>
        
      <View style={styles.projectRow}>
        <TouchableOpacity activeOpacity={.5} style={styles.projectText}>
          <Text style={styles.itemName}>Marketting</Text>
         <Text style={styles.itemDetails}> 2/7/2017 </Text>        
          </TouchableOpacity>
        <View style={styles.moreContainer}>
          <Icon name="chevron-right" size={15} style={styles.moreIcon} />
        </View>
      </View>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <View style={styles.card1}>
                <GiftedChat
        isAnimated 
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Notifications</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-list" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Other nav</Text>
        </View>
      </ScrollView>
    </ScrollableTabView>;
  } 
}

const styles = StyleSheet.create({
   container2: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
     width:400
  },
  container:{
    flex:1 
  },
  tabView: {
    backgroundColor: '#2C3E50',
    flex: 0.5
  },
  card: {
    flex:1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    height: 200
  },
    card1: {
    flex:1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    height: 600
  },
    projectText: {
    flex: 1,
    flexDirection: 'column'
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
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
   }
});