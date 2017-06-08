import {Scene, Router} from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS
} from 'react-native';
import Login from './src/component/login/login'
import TabView from './src/component/tabview/tabview'
import ListViewShow from './src/component/list/list'
console.ignoredYellowBox = ['[HMR]'];
export default class event extends Component {
    constructor(props) {
    super(props);
}
  render() {
    return (
      <Router>
      <Scene key="root">
                <Scene 
          key = "Listv"
          component = {ListViewShow}
          title = "My Info"
          sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}
          direction = "vectical"
          hideNavBar={false}
          >
        </Scene>
        <Scene 
          key = "Login"
          component = {Login}
          title = "Login"
          initial
          hideNavBar={true}>
        </Scene>
        <Scene 
          key = "TabView"
          component = {TabView}
          title = "TabView"
          >
        </Scene>
        </Scene>
      </Router>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('liffinal', () => event);
