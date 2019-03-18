import React, { PureComponent } from "react";
import { View, Alert } from "react-native";

import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormData from 'FormData';

import TransactionID from "../../config/TransactionID";
import Step from "./Step";

class Wizard extends PureComponent {
  static Step = Step;
  state = {
    index: 0,
    values: {
      ...this.props.initialValues
    }
  };

  _onSubmit = () => {
    let url = 'http://www.dstesting.com.ng/sellers/engine/actions/registration.php';
    console.log('data: ', JSON.stringify(this.state.values));
    let data = this.state.values;
    Alert.alert("Record Saved", data.formVariables['title'] + 'Y');
    // var formData = new FormData();
    // formData.append('fullname', data.name);
    // formData.append('phone', data.phone);
    // formData.append('v_code', data.code);
    // formData.append('address', data.address);
    // formData.append('city', data.city);
    // formData.append('state', data.state);
    // formData.append('lga', data.lga);
    // formData.append('email', data.email);
    // formData.append('password', data.password);
    // formData.append('store_name', data.storeName);
    // formData.append('store_description', data.storeDescription);
    // formData.append('store_url', data.storeURL);
    // formData.append('instagram', data.instagram);
    // formData.append('acc_no', data.accNo);
    // formData.append('acc_name', data.accName);
    // formData.append('transaction_id', TransactionID.id);
    //
    //   return fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     body: formData
    //   })
    //   .then((response) => response.json())
    //     .then((responseData)  => {
    //       Alert.alert('Record Saved', 'Saved');
    //   }).catch((error) => {
    //     Alert.alert('Input Error', error);
    //   }).done();
    //
  }

  _validateInput = (text, type) => {

  }

  _nextStep = () => {
    let data = this.state.values;
    if (this.state.index == 9 && !data.name) {
      Alert.alert("Error", "Enter name");
    } else if (this.state.index == 9 && !data.phone) {
      Alert.alert("Error", "Enter phone number");
    } else {
      if (this.state.index !== this.props.children.length - 1) {
        this.setState(prevState => ({
          index: prevState.index + 1,
        }));
      }
    }
  };

  _prevStep = () => {
    if (this.state.index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }));
    }
  };

  _onChangeValue = (name, value) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value,
      }
    }))
  }

  render() {
    console.log('values', this.state)
    return (
      <View style={{flex: 1}}>
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextStep: this._nextStep,
              isLast: this.state.index === this.props.children.length - 1,
              prevStep: this._prevStep,
              isFirst: this.state.index === 0,
              onChangeValue : this._onChangeValue,
              values: this.state.values,
              onSubmit: this._onSubmit,
              sliderMaxValue: this.props.children.length,
              sliderValue: this.state.index + 1

            })
          }
          return null;
        })}
      </View>
    );
  }
}

export default Wizard;
