import React, { Component } from "react";
import {
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
  Button,
  CheckBox
} from "react-native";
import config from "../../config";
import { Statusbar } from "../container";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Products extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  static navigationOptions = {
    tabBarLabel: 'Products',
    drawIcon: ({tintColor}) => {
      return (
        <MaterialIcons name="card-membership" siz4={24} style={{color: tintColor}}>

        </MaterialIcons>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />

        <View style={styles.cls} />
        <Text style={{ color: "#FF1744", fontSize: 46, textAlign: "left" }}>
          Products
        </Text>
        <View style={styles.cls} />
        <Button onPress={() => this.props.navigate('DrawOpen')}
        title="Open DrawNavigator" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: 100 + "%",
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "ios" ? 20 : 0
    //justifyContent: 'flex-end'
  },

  visibilityBtn: {
    position: "absolute",
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },

  btnImage: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  },

  cls: {
    height: 40
  }
});
