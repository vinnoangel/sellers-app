import React, {Component} from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image } from 'react-native';
//import all the components we are going to use.

import config from "../../config";

class ActionBarImage extends Component {
  //Making an Custome Component ActionBarImage
  //to set on header
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={config.images.katlogg_logo}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
      </View>
    );
  }
}

export default ActionBarImage;
