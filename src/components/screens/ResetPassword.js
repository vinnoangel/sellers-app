import React, { Component } from "react";
import {
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text
} from "react-native";
import config from "../../config";
import { Statusbar } from "../container";

export default class ResetPassword extends Component {
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
    if (state == 1) {
      this.props.navigation.navigate("login");
    } else {
      this.props.navigation.navigate("forgotPassword");
    }
  }

  checkBoxTest() {
    this.setState({
      check: !this.state.check
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />

        <View style={styles.cls} />

        <Text style={{ color: "#FF1744", fontSize: 46, textAlign: "left" }}>
          Desir!
        </Text>

        <View style={styles.cls} />

        <Text style={{ color: "#FF1744", fontSize: 22, textAlign: "center" }}>
          Reset password
        </Text>

        <View style={styles.cls} />

        <TextInput
          style={styles.textBox}
          underlineColorAndroid="transparent"
          placeholder="Reset code"
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

        <View style={styles.textBoxBtnHolder}>
          <TextInput
            underlineColorAndroid="transparent"
            secureTextEntry={this.state.hidePassword}
            style={styles.textBox}
            placeholder="Confirm password"
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
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            onPress={() => {
              this.onPress();
            }}
          >
            <Text style={styles.buttonText}> Reset Password </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cls} />

        <Text style={{ textAlign: "center" }}>
          Didn't get the code?&nbsp;
          <Text
            style={{ color: "#FF1744" }}
            onPress={() => {
              this.onPress(2);
            }}
          >
            Send me another code
          </Text>
        </Text>

        <View style={styles.cls} />

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            this.onPress(1);
          }}
        >
          <Text style={{ textAlign: "center", color: "#FF1744" }}>Login</Text>
        </TouchableOpacity>
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
