/* @flow */

import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

class MyInput extends PureComponent {

  _onChangeText = text => {
    this.props.onChangeValue(this.props.name, text);
  };

  render() {
    const { onChangeValue, name, ...rest } = this.props;
    return <TextInput { ...rest } onChangeText={ this._onChangeText } />;
  }
}

export default MyInput;
