import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';

class SummaryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      all_students1: '',
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      name5: '',

      name1rl: '',
      name2rl: '',
      name3rl: '',
      name4rl: '',
      name5rl: '',

      name1s: '',
      name2s: '',
      name3s: '',
      name4s: '',
      name5s: '',
    };
  }
  componentDidMount() {
    this.DisplayNames();
  }
  DisplayNames = async () => {
    var class_ref = await db.ref('/').on('value', (data) => {
      var class_a = data.val().class_a;
      var name1 = data.val().class_a.one.name;
      var name2 = data.val().class_a.two.Name;
      var name3 = data.val().class_a.three.name;
      var name4 = data.val().class_a.four.name;
      var name5 = data.val().class_a.five.name;

      var name1rl = data.val().class_a.one.roll_no;
      var name2rl = data.val().class_a.two.roll_no;
      var name3rl = data.val().class_a.three.roll_no;
      var name4rl = data.val().class_a.four.roll_no;
      var name5rl = data.val().class_a.five.roll_no;

      var name1ss = data.val().class_a.one.today;
      var name2ss = data.val().class_a.two.today;
      var name3ss = data.val().class_a.three.today;
      var name4ss = data.val().class_a.four.today;
      var name5ss = data.val().class_a.five.today;

      this.setState({
        //     all_students: all_students,
        name1: name1,
        name2: name2,
        name3: name3,
        name4: name4,
        name5: name5,

        name1rl: name1rl,
        name2rl: name2rl,
        name3rl: name3rl,
        name4rl: name4rl,
        name5rl: name5rl,

        name1s: name1ss,
        name2s: name2ss,
        name3s: name3ss,
        name4s: name4ss,
        name5s: name5ss,
      });
    });
  };
  render() {
    var name1o = this.state.name1;
    var name2o = this.state.name2;
    var name3o = this.state.name3;
    var name4o = this.state.name4;
    var name5o = this.state.name5;

    var name1rll = this.state.name1rl;
    var name2rll = this.state.name2rl;
    var name3rll = this.state.name3rl;
    var name4rll = this.state.name4rl;
    var name5rll = this.state.name5rl;

    var name1ssa = this.state.name1s;
    var name2ssa = this.state.name2s;
    var name3ssa = this.state.name3s;
    var name4ssa = this.state.name4s;
    var name5ssa = this.state.name5s;
    console.log(name2o);
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'black',
          shadowColor: 'white',
        }}>
        <Text style={{ marginTop: 40, color: 'gold' }}>
          Name Roll No Status
        </Text>
        <Text style={{ marginTop: 40, color: 'white' }}>
          {name1o} {name1rll} {name1ssa}
        </Text>
       
        <Text style={{ marginTop: 40, color: 'pink' }}>
          {name2o}  {name2rll}  {name2ssa}
        </Text>
        <Text style={{ marginTop: 40, color: 'orange' }}>
          {name3o}  {name3rll}  {name3ssa}
        </Text>
        <Text style={{ marginTop: 40, color: 'lightgreen' }}>
          {name4o}  {name4rll}  {name4ssa}
        </Text>
        <Text style={{ marginTop: 40, color: 'lightblue' }}>
          {name5o}  {name5rll}  {name5ssa}
        </Text>
        <Text style={ {color:"red" ,backgroundColor:"black",marginTop:40,marginLeft:160}}>                     ~~By Sahasra</Text>
      </View>
    );
  }
}
export default SummaryScreen;
