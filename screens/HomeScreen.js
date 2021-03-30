import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
import SummaryScreen from './SummaryScreen'
class HomeScreen extends React.Component {
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
    };
  }
   
  SortNames = async () => {
    var class_ref = await db.ref('/').on('value', (data) => {
      var all_students = [];
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

      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({
        all_students: all_students,
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
      });
      // console.log(all_students.length)
      console.log(name1);
    });
  };
  isButtonPressed = (statusi) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    //var ref_path = id;
    var class_refi = db.ref('class_a/one');
    //var class_reff = data.val().class_a.one;
    // var statuss=data.val().class_a.one.status
    class_refi.update({
      today: statusi,
    });
   // console.log(status);

    //  console.log(statuss)
    // })
  };

  isButtonPressed2 = (statusi) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    //var ref_path = id;
    var class_refi = db.ref('class_a/two');
    //var class_reff = data.val().class_a.one;
    // var statuss=data.val().class_a.one.status
    class_refi.update({
      today: statusi,
    });
  //  console.log(status);

    //  console.log(statuss)
    // })
  };

  isButtonPressed3 = (statusi) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    //var ref_path = id;
    var class_refi = db.ref('class_a/three');
    //var class_reff = data.val().class_a.one;
    // var statuss=data.val().class_a.one.status
    class_refi.update({
      today: statusi,
    });
 //   console.log(status);

    //  console.log(statuss)
    // })
  };

  isButtonPressed4 = (statusi) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    //var ref_path = id;
    var class_refi = db.ref('class_a/four');
    //var class_reff = data.val().class_a.one;
    // var statuss=data.val().class_a.one.status
    class_refi.update({
      today: statusi,
    });
//    console.log(status);

    //  console.log(statuss)
    // })
  };

  isButtonPressed5 = (statusi) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    //var ref_path = id;
    var class_refi = db.ref('class_a/five');
    //var class_reff = data.val().class_a.one;
    // var statuss=data.val().class_a.one.status
    class_refi.update({
      today: statusi,
    });
  //  console.log(status);

    //  console.log(statuss)
    // })
  };


  goToSummaryScreen = () => {
    this.props.navigation.navigate('SummaryScreen');
    console.log("Yes!!You did it!")
  };
  
  componentDidMount() {
    this.SortNames();
  }
 
  render() {
    var all_studentsa = this.state.all_students1;
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

    var present = 'present';
    var absent = 'absent';
    return (
      <View>
        <Text style={styles.text1}>
          {'                         1.' + name1o}
        </Text>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed(present)}>
          <Text style={styles.tp1txt}>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed(absent)}>
          <Text style={styles.tp1txt}>ABSENT</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>
          {'                         2.' + name2o}
        </Text>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed2(present)}>
          <Text style={styles.tp1txt}>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed2(absent)}>
          <Text style={styles.tp1txt}>ABSENT</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>
          {'                         3.' + name3o}
        </Text>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed3(present)}>
          <Text style={styles.tp1txt}>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed3(absent)}>
          <Text style={styles.tp1txt}>ABSENT</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>
          {'                         4.' + name4o}
        </Text>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed4(present)}>
          <Text style={styles.tp1txt}>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed4(absent)}>
          <Text style={styles.tp1txt}>ABSENT</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>
          {'                         5.' + name5o}
        </Text>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed5(present)}>
          <Text style={styles.tp1txt}>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tp1}
          onPress={() => this.isButtonPressed5(absent)}>
          <Text style={styles.tp1txt}>ABSENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            backgroundColor: 'pink',
            borderRadius: 20,
            width: 100,
            height: 30,
            marginTop: 20,
            justifyContent: 'center',
            borderColor: 'black',
          }}
          onPress={() =>
           {this.goToSummaryScreen()}
           }>
          <Text>        Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    marginLeft: 0,
    marginTop: 20,
    backgroundColor: 'black',
    color: 'pink',
    justifyContent: 'center',
    fontSize: 19,
  },
  text2: {
    marginLeft: 0,
    marginTop: 10,
    backgroundColor: 'black',
    color: 'pink',
    justifyContent: 'center',
    fontSize: 19,
  },
  tp1: {
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 40,
    marginTop: 50,
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 10,
  },
  tp1txt: {
    textAlign: 'center',
    color: 'white',
  },
});
export default HomeScreen;
