import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements'
import { Card } from 'react-native-elements'
import {Container, Footer, Title, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image,
  KeyboardAvoidingView,
  Modal,
  NavigationBar,
  ScrollView,
  ListView,
  AsyncStorage,
  AlertIOS
} from 'react-native';
 class ListViewShow extends Component {
  constructor(props){
    var priority=["Low","Medium","High"];
  super(props);
    var a = 'completeJob';
    var b = 'pizza'
    if (this.props.data.startDate==null)
      {
        a='startJob';
      }
    if(a == 'startJob'){
      b='play'
    }
  this.state = {
    context:this.props.context,
    callback:this.props.callback,
    comments:[],
   markers: [
  {
    name: 'Name',
    icon: 'account-circle',
    subtitle: this.props.data.name
  },
  {
    name: 'Phone',
    icon: 'local-phone',
    subtitle: this.props.data.phone
  },
  {
    name: 'Priority',
    icon: 'priority-high',
    subtitle: priority[this.props.data.priority-1]
  },
  {
    name: 'Address',
    icon: 'home',
    subtitle: this.props.data.address
  },
    {
      name:'Description',
      icon:'list',
      subtitle:this.props.data.description
    },
     {
       name:'Date',
       icon:'query-builder',
       subtitle:this.props.data.postDate
     }
],
    icon:b,
    api:this.props.data.startDate==null?'startJob':'completeJob'
  }
  
      AsyncStorage.getItem("token").then((value) => {
          fetch("https://aebisslab.com/lift/apis/user.php/getLog", {method: "POST", body: JSON.stringify({jid: this.props.data.jid,token:value })})
.then((response) => {
      console.log(response);
      if(response.ok)
      return response.json();
      else
      throw 'ERROR';
    })
.then((responseData) => {
            this.setState({
                  comments:responseData
            });
}).catch(error =>{ 

                 })
.done();
      
      }).done();
   }
   callJobAPI(){
      AsyncStorage.getItem("token").then((value) => {
      fetch("https://aebisslab.com/lift/apis/user.php/"+this.state.api, {method: "POST", body: JSON.stringify({jid: this.props.data.jid,token:value })})
.then((response) => {
      console.log(response);
      if(response.ok)
      return response.json();
      else
      throw 'ERROR';
    })
.then((responseData) => {
        console.log("something",responseData);
        if(this.state.api == 'startJob'){
          AlertIOS.alert('Job has been started');
          this.setState({
            api:'completeJob',
            icon:'pizza'
          });
                    this.state.callback("Task completed",this.state.context);

        }
        else{
          AlertIOS.alert('Job has been completed');
          
          Actions.pop();
          this.state.callback("Task completed",this.state.context);
        }
}).catch(error =>{ 

                 })
.done();
        
      }).done();
   }
   prompt(){
     AlertIOS.prompt(
  'Add a Log',
  '',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: comment => {
      console.log('OK Pressed, comment: ' + comment);
      AsyncStorage.getItem("token").then((value) => {
      fetch("https://aebisslab.com/lift/apis/user.php/addLog", {method: "POST", body: JSON.stringify({jid: this.props.data.jid,comment:comment,token:value })})
.then((response) => {
      console.log(response);
      if(response.ok)
      return response.json();
      else
      throw 'ERROR';
    })
.then((responseData) => {
        console.log("something",responseData);
        this.state.comments.push({user:6,comment:comment,date:new Date().toString()});
        var data=this.state.comments;
        this.setState({
          comments:data
        });
        console.log(this.state.comments);
}).catch(error =>{ 

                 })
.done();
        
      }).done();
        
      
    }},
  ],
  'plain-text'
);
   }
  render() {
    return (
      <View style={{backgroundColor:'#F7F7F7', flex:1}}>
        <ScrollView style={{flex:1, backgroundColor:'white'}}>
      <List containerStyle={{marginBottom: 20}}>
        {
        this.state.markers.map(marker => (
          
                <ListItem
        title={marker.name}
        subtitle={marker.subtitle}
        leftIcon={{name: marker.icon}}
        hideChevron
      />
          
          ))}
      </List>
    <List>
        {
        this.state.comments.map(comment => (
          
                <ListItem
        roundAvatar
        title={
          <View style={styles.subtitleView}>
            <Text  >{comment.user}</Text>
          </View>
        }
                subtitle={
          <View style={styles.titleView}>
            <Text >{comment.comment}</Text>
          <Text style={styles.ratingText}>{comment.date}</Text>
          </View>
        }
        leftIcon="home"
        hideChevron
      />  
          ))}
      
    </List>
</ScrollView>
                  <Footer>
                    <Button transparent>
                      <Icon size={30} color={'#fff'} name={this.state.icon}  onPress= {()=>this.callJobAPI()} />
                    </Button>

                    <Button transparent onPress= {()=>this.prompt()} >
                       <Icon size={30} color={'#fff'} name={'keypad'} />
                    </Button>
                </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
    titleView: {
    paddingTop: 0,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    color: 'grey'
  }
})
export default ListViewShow
