import React , {Component} from 'react';
import { Text, Button,View, StyleSheet } from 'react-native';

export default class App extends Component {
  AlertMessage(){
    alert("Playing Sound1")
  }
   AlertMessage2(){
    alert("Playing Sound2")
  }
   AlertMessage3(){
    alert("Playing Sound3")
  }
   AlertMessage4(){
    alert("Playing Sound4")
  }
  render() {
    return (
      <View style={{marginTop:100}}>
        <View style={{width:80,height:20,marginLeft:120,}}>
        <Button title="Sound 1" color = "red" onPress={this.AlertMessage}/>
        </View>
        <View style={{width:80,height:20,marginLeft:120,marginTop:50}}>
        <Button title="Sound 2" color = "orange"onPress={this.AlertMessage2}/>
        </View>
        <View style={{width:80,height:20,marginLeft:120,marginTop:50}}>
        <Button title="Sound 3" color = "pink" onPress={this.AlertMessage3}/>
        </View>
        <View style={{width:80,height:20,marginLeft:120,marginTop:50,}}>
        <Button title="Sound 4" color = "magenta" onPress={this.AlertMessage4}/>
        </View>
        </View>
    );
  }
}