import React, { Component } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
  AsyncStorage,
  Alert,
  FlatList
} from "react-native";
import config from "../../config";
import { Statusbar } from "../container";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Divider,
  Header,
  Input,
  ListItem,
  List,
  Overlay,
  SearchBar
} from "react-native-elements";

export default class Home extends Component {
  constructor() {
    super();

    this.state = { isVisible: true };
  }

  onPress(state) {
    if (state == "new-list") {
      this.props.navigation.navigate("newlist");
    } else {
      this.props.navigation.navigate("login");
    }
  }
  

  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = "Home";
    let tabBarIcon = () => (
      <Image
        style={{ width: 26, height: 26, tintColor: "#ffffff" }}
        source={config.images.homeIcon}
      />
    );
    return { tabBarLabel, tabBarIcon };
  };

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />
        <Text style={{ color: "#FF1744", fontSize: 26, textAlign: "left" }}>
          Desir!
        </Text>
        <View style={styles.cls} />

        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.4}
          onPress={() => {
            this.onPress("new-list");
          }}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>

        <Overlay
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="white"
          width="70%"
          height="50%"
          onBackdropPress={() => this.setState({ isVisible: false })}
          containerStyle={{ flex: 1 }}
        >
          <Text style={{ flex: 3, top: 0, textAlign: "center" }}>
            Hello from Overlay!
          </Text>
          <Button
            title="BUTTON"
            onPress={() => this.setState({ isVisible: false })}
            style={{ alignItems: "flex-end", flex: 2 }}
          />
        </Overlay>
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

  btn: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#FF1744",
    borderRadius: 30,
    bottom: 40,
    right: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  plus: {
    color: "white",
    fontSize: 25
  },

  cls: {
    height: 40
  }
});
