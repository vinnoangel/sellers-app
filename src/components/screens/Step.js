import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Step extends PureComponent {
  state = {};

  render() {
    return (
      <View style={ styles.root}>
        {this.props.children({
          onChangeValue: this.props.onChangeValue,
          values: this.props.values,
          sliderValue: this.props.sliderValue,
          sliderMaxValue: this.props.sliderMaxValue
        })}
        <View style={ styles.buttonWrapper}>

          {this.props.isFirst ? (
            <Button title="" />
          ) : (
            <Button title="Prev"
              onPress={this.props.prevStep}
              disabled={this.props.isFirst}
              buttonStyle={ styles.button }
              />
          )}

          {this.props.isLast ? (
            <Button
              title='Submit'
              onPress={this.props.onSubmit}
              buttonStyle={ styles.button }
            />
          ) : (

            <Button
              title="Next"
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={ styles.button }
              onPress={this.props.nextStep}
            />
          )}



          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    width: 100 + "%",
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    borderTopColor: "#A9A9A9",
    borderTopWidth: 1

  },
  button: {
    backgroundColor: "#FF1744",
    width: 120,
    height: 40,
    borderColor: "#FFFFFF",
    borderWidth: 0,
    borderRadius: 15

  },
});

export default Step;
