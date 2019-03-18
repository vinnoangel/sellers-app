import React, { Component } from "react";
import {
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Text,
  Picker,
  ScrollView
} from "react-native";

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import config from "../../config";
import { Statusbar } from "../container";
import Wizard from "./Wizard";
import MyInput from "./MyInput";

const formInputs = [
  {
    placeholder: 'Username',
    name: 'username'
  },
  {
    placeholder: 'Email',
    name: 'email'
  },
  {
    placeholder: 'Password',
    name: 'password'
  },
  {
    placeholder: 'First Name',
    name: 'firstname'
  },
  {
    placeholder: 'Last Name',
    name: 'lastname'
  },
  {
    placeholder: 'Gender',
    name: 'gender'
  },
];

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSmall0: 0,
      hidePassword: true,
      check: false,
      PickerValue: ""
    };
  }

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  onPress() {
    this.props.navigation.navigate("login");
  }
  checkBoxTest() {
    this.setState({
      check: !this.state.check
    });
  }

  render() {
    let state = this.state;
    return (
      <View style={styles.rootContainer}>
        <Statusbar />
        <Wizard initialValues={{
          username: '',
          email: '',
          password: '',
          firstname: '',
          lastname: '',
          gender: ''
        }}>
          {formInputs.map(el => (
            <Wizard.Step key={el.name}>
              {( {onChangeValue, values} ) => (
                <View style={styles.container} >
                  <Text>I'm a step 1</Text>
                  <MyInput
                    onChangeValue={ onChangeValue }
                    placeholder={el.placeholder}
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    value={values[el.name]}
                    name={el.name}
                  />
                </View>
              )}
            </Wizard.Step>
          ))}

        </Wizard>

      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const MARGIN_LARGE = 16;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // width: 100 + "%",
    // alignItems: "center",
    // paddingHorizontal: 25,
    // backgroundColor: "#ffffff",
    // paddingTop: Platform.OS === "ios" ? 20 : 0
    //justifyContent: 'flex-end'
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },

  button: {
    width: 360,
    backgroundColor: "#FF1744",
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 10
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },

  textBoxBtnHolder: {
    position: "relative",
    alignSelf: "stretch",
    justifyContent: "center"
  },

  textBox: {
    alignSelf: "stretch",
    height: 45,
    paddingRight: 5,
    paddingLeft: 5,
    paddingVertical: 0,
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000000",
    marginVertical: 10
  },

  pickerBox: {
    alignSelf: "stretch",
    height: "10%",
    width: "100%",
    paddingRight: 5,
    paddingLeft: 5,
    paddingVertical: 0,
    borderColor: "#000000",
    borderBottomWidth: 4,
    paddingHorizontal: 16,
    color: "#000000",
    marginVertical: 10
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

  selectInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "black",
    marginTop: MARGIN_LARGE,
    overflow: "hidden"
  },
  selectInputInner: {
    height: 36,
    borderRadius: 4
  },

  selectInputInner: {
    height: 36,
    borderRadius: 4
  },

  smallInputWrapper: {
    flexDirection: "column"
  },

  cls: {
    height: 40
  }
});
