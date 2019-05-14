import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
    padding: 11

  },
  text: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10
  }
});

class HamburgerIcon extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

class Home_Screen extends Component {
  static navigationOptions = {
      title: 'Home'
    };
  gotoNextActivity = () => {
    this.props.navigation.navigate('Second');
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Home Screen Activity.</Text>
        <Button onPress={this.gotoNextActivity} title='Open Second Activity' />
      </View>
    );
  }
}

class Settings_Screen extends Component {
  static navigationOptions = {
      title: 'Settings'
  };
  render() {
    return (
      <View style={styles.MainContainer}>
      <Text style={styles.text}>This is Settings Screen Activity.</Text>
      </View>
    );
  }
}

class Student_Screen extends Component {
  static navigationOptions = {
    title: 'Student'
  };
  gotoNextActivity = () => {
    this.props.navigation.navigate('Forth');
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Student Screen Activity.</Text>
        <Button onPress={this.gotoNextActivity} title='Open Details Activity' />
      </View>
    );
  }
}

class Details_Screen extends Component {
  static navigationOptions = {
    title: 'Details Screen'
  };
  gotoNextActivity = () => {
    this.props.navigation.navigate('Second');
  }
  render() {
    return (
      <View style={styles.MainContainer}>
      <Text style={styles.text}>This is Details Screen Activity.</Text>
      </View>
    );
  }
}

class Ibrar_Screen extends Component {
  static navigationOptions = {
    title: 'Ibrar Screen'
  };
  gotoNextActivity = () => {
    this.props.navigation.navigate('Second');
  }
  render() {
    return (
      <View style={styles.MainContainer}>
      <Text style={styles.text}>This is Details Screen Activity.</Text>
      </View>
    );
  }
}

export const Tab1 = createMaterialTopTabNavigator({
  First: {
    screen: Home_Screen,
  },
  Second: {
    screen: Settings_Screen,
  }
},
{
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    pressColor: '#004D40',
    inactiveTintColor: '#fff',
    style: {
      backgroundColor: '#00B8D4'
    },
    labelStyle: {
      fontSize: 16,
      fontWeight: '200'
    }
  }
});

export const Tab2 = createMaterialTopTabNavigator({
  Third: {
    screen: Student_Screen,
  },
  Forth: {
    screen: Details_Screen,
  },
  Fifth: {
    screen: Ibrar_Screen,
  }
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#fff',
      pressColor: '#004D40',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#00B8D4'
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: '200'
      }
    }
  });

const FirstTabs = createStackNavigator({
  First: {
    screen: Tab1,
    navigationOptions: ({ navigation }) => ({
      title: 'First Screen',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00B8D4',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#fff',
    })
  },
});

const SecondTabs = createStackNavigator({
  First: {
    screen: Tab2,
    navigationOptions: ({ navigation }) => ({
      title: 'Second Screen',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00B8D4',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#fff',
    })
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home_Menu: {
    screen: FirstTabs,
  },
  Student_Menu: {
    screen: SecondTabs,
  }
});

export default createAppContainer(MyDrawerNavigator);