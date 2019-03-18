import React, { Component } from "react";
import {
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Text,
  Picker,
  Switch
} from "react-native";
import { Statusbar } from "../container";

export default class IdeaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchValue: false,
      PickerValue: ""
    };
  }

  toggleSwitch = value => {
    this.setState({ switchValue: value });
    console.log("Switch 1 is: " + value);
  };

  render() {
    let state = this.state;
    return (
      <View style={styles.container}>
        <Statusbar />

        <View style={styles.cls} />
        <Text style={{ color: "#000000", fontSize: 26, textAlign: "center" }}>
          New Idea
        </Text>
        <View style={styles.cls} />
        <TextInput
          style={styles.textBox}
          underlineColorAndroid="transparent"
          placeholder="Title of idea"
          placeholderTextColor="#808080"
        />
        <Picker
          selectedValue={this.state.PickerValue}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ PickerValue: itemValue })
          }
          style={styles.selectInput}
        >
          <Picker.Item label="Select category" value="" />
          <Picker.Item label="Weddings" value="weddings" />
          <Picker.Item label="Birthdays" value="birthdays" />
        </Picker>
        <TextInput
          style={styles.textBox}
          underlineColorAndroid="transparent"
          placeholder="Enter description"
          placeholderTextColor="#808080"
        />
        <TextInput
          style={styles.textBox}
          underlineColorAndroid="transparent"
          placeholder="Enter URL (optional)"
          placeholderTextColor="#808080"
        />

        <View
          style={{
            width: 100 + "%",
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "#000000",
              fontSize: 16,
              fontWeight: "500"
            }}
          >
            Make this post public?
          </Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.4}
          onPress={() => {
            this.onPress();
          }}
        >
          <Text style={styles.buttonText}> Post </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const MARGIN_LARGE = 16;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: 100 + "%",
    alignItems: "center",
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

  selectInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "black",
    marginTop: MARGIN_LARGE,
    overflow: "hidden"
  },

  smallInputWrapper: {
    flexDirection: "column"
  },

  cls: {
    height: 40
  }
});
