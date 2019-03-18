import React, { Component } from "react";
import {
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  CheckBox,
  Alert
} from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormData from 'FormData';

import config from "../../config";
import { Statusbar } from "../container";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      hidePassword: true,
      check: false
    };
  }

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  onPress(state) {
    if (state == 0) {
      this.props.navigation.navigate("signup");
    } else if (state == 2) {
      this.props.navigation.navigate("forgotPassword");
    } else {
      this.props.navigation.navigate("mainStack");
    }
  }

  static navigationOptions = {
     header: null,
   };

  checkBoxTest() {
    this.setState({
      check: !this.state.check
    });
  }

  // componentDidMount() {
  //   var formData = new FormData();
  //   formData.append('bank_code', '058');
  //   formData.append('account_number', '0106583077');
  //
  //   let url = 'http://dstesting.com.ng/admin/engine/actions/verify-account-no.php';
  //     return fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       body: formData
  //     })
  //     .then((response) => response.json())
  //       .then((responseData)  => {
  //         console.log("acc name: ", responseData);
  //     }).catch((error) => {
  //       console.log('error: ',error);
  //     }).done();
  //
  // }

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />

        <View style={styles.cls} />

        <Image style={styles.imageLogo} source={config.images.katlogg_logo} />
        <Text style={{color:'#FA7F71', }}>Katlogg Seller App</Text>

        <View style={styles.cls} />

        <TextInput
          style={styles.textBox}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#808080"
        />

        <View style={styles.textBoxBtnHolder}>
          <TextInput
            underlineColorAndroid="transparent"
            secureTextEntry={this.state.hidePassword}
            style={styles.textBox}
            placeholder="Password"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={this.managePasswordVisibility}
          >
            <Image
              source={
                this.state.hidePassword ? config.images.hide : config.images.eye
              }
              style={styles.btnImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              value={this.state.check}
              onChange={() => this.checkBoxTest()}
            />
            <Text>Remember me</Text>
          </View>
        </View>

        <View style={styles.textBoxBtnHolder}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            onPress={() => {
              this.onPress();
            }}
          >
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cls} />

        <Text style={{ textAlign: "center" }}>
          Don't have an account yet?&nbsp;
          <Text
            style={{ color: "#FF1744" }}
            onPress={() => {
              this.onPress(0);
            }}
          >
            Sign Up
          </Text>
        </Text>

        <View style={styles.cls} />

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            this.onPress(2);
          }}
        >
          <Text style={{ textAlign: "center" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
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

  imageLogo: {
    width: 120,
    height: 120
  },

  textBoxBtnHolder: {
    position: "relative",
    alignSelf: "stretch",
    justifyContent: "center"
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100 + "%"
  },

  textBox: {
    fontSize: 18,
    alignSelf: "stretch",
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    paddingVertical: 0,
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 16,
    fontSize: 16,
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

  cls: {
    height: 40
  }
});
