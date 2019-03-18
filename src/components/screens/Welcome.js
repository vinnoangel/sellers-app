import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text
} from "react-native";
import config from "../../config";
import { Statusbar } from "../container";
import Swiper from 'react-native-swiper';

export default class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      hidePassword: true,
      check: false
    };
  }

  onPress(state) {
    if (state == 0) {
      this.props.navigation.navigate("signup");
    } else {
      this.props.navigation.navigate("login");
    }
  }

  static navigationOptions = {
     header: null,
   };


  render() {
    return (

        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} loop={false} autoplayTimeout={5}
        dot={<View style={{backgroundColor:'#FF1744', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        activeDot={<View style={{backgroundColor: '#581845', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Welcome to Katlogg</Text>
            <Text style={styles.text2}>Manage your store directly from your mobile and instant alerts for new orders</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Monitor your revenue</Text>
            <Text style={styles.text2}>Manage your stock and pricing for your products</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Explore Katlogg now!</Text>
            <View style={styles.cls} />
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.4}
                onPress={() => {
                  this.onPress(0);
                }}
              >
                <Text style={styles.buttonText}> Getting Started </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cls} />
            <View style={styles.buttons}>
              <Text style={{ color: "#000000", fontSize: 22,  }}>
                Already a seller? &nbsp;
              </Text>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  this.onPress(1);
                }}
              >
                <Text style={{ color: "#FF1744", fontSize: 22, textAlign: "left" }}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </Swiper>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: 100 + "%",
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: 'center',
    // justifyContent: 'center'
  },

  button: {
    width: 100 + "%",
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

  buttons: {
    flexDirection: "row",
    width: 90 + "%",
    justifyContent: 'center'
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

  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#FF1744',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    paddingTop: 10,
    color: '#FF1744',
    fontSize: 16,
    textAlign: 'center'
  },

  cls: {
    height: 40
  }
});
