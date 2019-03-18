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
  Picker,
  ScrollView,
  Alert
} from "react-native";
import FormData from 'FormData';

import { Text, Slider, Divider, CheckBox, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import config from "../../config";
import TransactionID from "../../config/TransactionID";
import { Statusbar, ActionBarImage } from "../container";
import Wizard from "./Wizard";
import MyInput from "./MyInput";
import ImagePicker from 'react-native-image-picker';

import DeviceInfo from 'react-native-device-info';

const options = {
  title: 'Select photo',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
  cameraType: 'back',
  noData: true,
  quality: 0.5,
};

let formVariables =
  {
    title: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    code: '',
    address: '',
    city: '',
    lga: '',
    state: '',
    storeName: '',
    storeURL: '',
    storeDescription: '',
    instagram: '',
    category: '',
    subCategory: '',
    tnc: '',
    idType: '',
    idNo: '',
    idURL: '',
    profileURL: '',
    bank_code: '',
    accNo: '',
    accName: '',
  };

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSmall0: 0,
      hidePassword: true,
      check: false,
      checked: false,
      PickerValue: "",
      sliderState: true,
      idCardImage: null,
      profileImage: null,
      selectedItems: [],
      dataCategories: null,
      banks: null,
      bank_code: '',
      title: '',
    };
  }

  componentDidMount(){
    // var deviceId = DeviceInfo.getBrand();
    //
    // Alert.alert("Device ID", deviceId);
    let bankURL = 'https://api.paystack.co/bank';
    let categoriesURL = 'http://dstesting.com.ng/engine/mobile/actions/get-categories-subs.php';

    return fetch(bankURL)
    .then((response) => response.json())
      .then((responseData)  => {
        this.setState({
            banks: responseData.data,
        });
    }).then(()=>{
        fetch(categoriesURL)
        .then((response) => response.json())
          .then((responseData) => {
           this.setState({
              dataCategories: responseData,
           });
     }).catch((error) => {
       console.log(error)
     }).done();

    }).catch((error) => {
      console.log(error)
    }).done();

  }

   static navigationOptions = {
      title: 'Complete the form',
      titleStyle: {
        textAlign: 'center'
      },
      //Title
      headerLeft: null,
    //   headerRight: (
    //     <TouchableOpacity
    //       activeOpacity={0.4}
    //       onPress={() => {
    //         this.onPress()
    //       }}
    //     >
    //       <Text style={{ color: "#FFFFFF", fontSize: 22, textAlign: "left", paddingRight: 5}}>
    //         Login
    //       </Text>
    //     </TouchableOpacity>
    // ),
      //Image in Navigation Bar
      headerStyle: {
        backgroundColor: '#FF1744',

        //Background Color of Navigation Bar
      },
      headerTintColor: '#FFFFFF',
      //Text Color of Navigation Bar

      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

  validateAccNumber(text, type) {
    if (type == 'accNo') {
      Alert.alert("Title", text);
    }
  }

  getAccName (event) {
    const {name, type, value} = event.nativeEvent;
    let accname = '';
    let url = 'http://dstesting.com.ng/admin/engine/actions/verify-account-no.php';
    if(type !=='number') {
        Alert.alert("Error", "Enter digits only");
    } else {
        var formData = new FormData();
        formData.append('bank_code', '058');
        formData.append('account_number', '0106583077');

          return fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
            body: formData
          })
          .then((response) => response.json())
            .then((responseData)  => {
              this.setState({accName: responseData.data.account_name});
              console.log("acc name: ", responseData);
          }).catch((error) => {
            console.log('error: ',error);
          }).done();

    }
}

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  browseImage = (action) => {
     /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     * showImagePicker
     * launchImageLibrary
     */
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker' );
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        if (action == 1) {
          this.setState({
            idCardImage: source,
          });
        } else {
          this.setState({
            profileImage: source,
          });
        }

      }
    });
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
        <Wizard initialValues={{formVariables}}>
          <Wizard.Step>
            {( {onChangeValue, values, sliderValue, sliderMaxValue} ) => (
              <View style={styles.container} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrowContainer} style={{ width: 100 +'%'}}>
                <View style={styles.sliderView}>
                  <Slider
                    value={sliderValue}
                    maximumValue={sliderMaxValue}
                    disabled={this.state.sliderState}
                    minimumTrackTintColor="#FF1744"
                    thumbTintColor="#FF1744"
                  />
                  <Text style={{textAlign: 'center'}}>Page  {sliderValue} of {sliderMaxValue}</Text>
                </View>
                  <Card title="Personal Information">
                    <View style={styles.textBox}>
                      <Picker
                        style={{ width: 100 + '%'}}
                        selectedValue={this.state.title}
                        onValueChange={(titleValue, titleIndex) => this.setState({title: titleValue})}>
                        <Picker.Item label="Select title" value="" />
                        <Picker.Item label="Mr" value="mr" />
                        <Picker.Item label="Mrs" value="mrs" />
                        <Picker.Item label="Master" value="master" />
                        <Picker.Item label="Miss" value="miss" />
                      </Picker>
                    </View>

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Name'
                      style={styles.textBox}
                      value={values.name}
                      name="name"
                    />

                    </Card>

                    <Card title="Contact Information">
                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Phone'
                      style={styles.textBox}
                      value={values.phone}
                      name="phone"
                    />

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Verification Code'
                      style={styles.textBox}
                      value={values.code}
                      name="code"
                    />

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Address'
                      style={styles.textBox}
                      value={values.address}
                      name="address"
                    />

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='City'
                      style={styles.textBox}
                      value={values.city}
                      name="city"
                    />

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='State'
                      style={styles.textBox}
                      value={values.state}
                      name="state"
                    />

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='LGA'
                      style={styles.textBox}
                      value={values.lga}
                      name="lga"
                    />
                </Card>

                <Card title="Login Information">
                <MyInput
                  onChangeValue={ onChangeValue }
                  placeholder='Email'
                  style={styles.textBox}
                  value={values.email}
                  name="email"
                />

                <View style={styles.textBoxBtnHolder}>
                  <MyInput
                    onChangeValue={ onChangeValue }
                    value={values.password}
                    underlineColorAndroid="transparent"
                    secureTextEntry={this.state.hidePassword}
                    style={styles.textBox}
                    placeholder="Password"
                    name="password"
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
                </Card>

              </ScrollView>

              </View>
            )}
          </Wizard.Step>

          <Wizard.Step>
            {( {onChangeValue, values, sliderValue, sliderMaxValue} ) => (
              <View style={styles.container} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrowContainer} style={{ width: 100 +'%'}}>
                  <View style={styles.sliderView}>
                    <Slider
                      value={sliderValue}
                      maximumValue={sliderMaxValue}
                      disabled={this.state.sliderState}
                      minimumTrackTintColor="#FF1744"
                      thumbTintColor="#FF1744"
                    />
                    <Text style={{textAlign: 'center'}}>Page  {sliderValue} of {sliderMaxValue}</Text>
                  </View>
                  <Card title="Store Profile">
                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Store name'
                      style={styles.textBox}
                      value={values.storeName}
                      name="storeName"
                    />

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Description'
                      style={styles.textBox}
                      value={values.storeDescription}
                      name="storeDescription"
                    />

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Website url'
                      style={styles.textBox}
                      value={values.storeURL}
                      name="storeURL"
                    />

                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Instagram handle'
                      style={styles.textBox}
                      value={values.instagram}
                      name="instagram"
                    />
                    <SectionedMultiSelect
                      items={this.state.dataCategories}
                      uniqueKey='id'
                      subKey='children'
                      selectText='Select business areas '
                      showDropDowns={true}
                      readOnlyHeadings={true}
                      onSelectedItemsChange={this.onSelectedItemsChange}
                      selectedItems={this.state.selectedItems}
                      showCancelButton={true}
                      animateDropDowns={true}
                      modalAnimationType='fade'
                      styles={{
                         chipText: {
                           maxWidth: Dimensions.get('screen').width - 90,
                         },
                        // itemText: {
                        //   color: this.state.selectedItems.length ? 'black' : 'lightgrey'
                        // },
                        selectedItemText: {
                          color: 'blue',
                        },
                        // subItemText: {
                        //   color: this.state.selectedItems.length ? 'black' : 'lightgrey'
                        // },
                        selectedSubItemText: {
                           color: '#FF1744',
                        },
                        button: {
                          backgroundColor: '#FF1744',
                        },
                      }}
                    />
                  </Card>

                </ScrollView>
              </View>
            )}

          </Wizard.Step>

          <Wizard.Step>
            {( {onChangeValue, values, sliderValue, sliderMaxValue} ) => (
              <View style={styles.container} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrowContainer} style={{ width: 100 +'%'}}>
                  <View style={styles.sliderView}>
                    <Slider
                      value={sliderValue}
                      maximumValue={sliderMaxValue}
                      disabled={this.state.sliderState}
                      minimumTrackTintColor="#FF1744"
                      thumbTintColor="#FF1744"
                    />
                    <Text style={{textAlign: 'center'}}>Page  {sliderValue} of {sliderMaxValue}</Text>
                  </View>
                  <Card title="Terms and Condition">
                    <Text style={{marginBottom: 10, fontSize: 16,}}>
                      Katlogg sellers terms and conditions goes here
                    </Text>
                    <CheckBox
                      center
                      title='Accept Terms and Conditions'
                      checkedIcon='dot-circle-o'
                      uncheckedIcon='circle-o'
                      checked={this.state.checked}
                      checkedColor='#FF1744'
                      uncheckedColor='#D2691E'
                      onPress={() => this.setState({checked: !this.state.checked})}
                      name= "tnc"
                      value={values.tnc}
                    />
                  </Card>
                </ScrollView>
              </View>
            )}

          </Wizard.Step>

          <Wizard.Step>
            {( {onChangeValue, values, sliderValue, sliderMaxValue} ) => (
              <View style={styles.container} >

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrowContainer} style={{ width: 100 +'%'}}>
                  <View style={styles.sliderView}>
                    <Slider
                      value={sliderValue}
                      maximumValue={sliderMaxValue}
                      disabled={this.state.sliderState}
                      minimumTrackTintColor="#FF1744"
                      thumbTintColor="#FF1744"
                    />
                    <Text style={{textAlign: 'center'}}>Page  {sliderValue} of {sliderMaxValue}</Text>
                  </View>
                  <Card title="Upload Valid ID Card">
                    <Text style={{textAlign: 'center'}}>
                      Driver’s Licence, National ID Card, International Passport
                    </Text>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image source={this.state.idCardImage} style={{width: '100%', height: 300, margin: 10,}} />
                    </View>
                    <View style={ styles.buttonWrapper}>
                      <Button
                        title="Select ID Card"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={ styles.button }
                        onPress={() => { this.browseImage(1)}}
                      />
                    </View>
                  </Card>
                </ScrollView>
              </View>
            )}

          </Wizard.Step>

          <Wizard.Step>
            {( {onChangeValue, values, sliderValue, sliderMaxValue} ) => (
              <View style={styles.container} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrowContainer} style={{ width: 100 +'%'}}>
                  <View style={styles.sliderView}>
                    <Slider
                      value={sliderValue}
                      maximumValue={sliderMaxValue}
                      disabled={this.state.sliderState}
                      minimumTrackTintColor="#FF1744"
                      thumbTintColor="#FF1744"
                    />
                    <Text style={{textAlign: 'center'}}>Page  {sliderValue} of {sliderMaxValue}</Text>
                  </View>
                  <Card title="Upload Profile Picture">
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image source={this.state.profileImage} style={{width: '100%', height: 300, margin: 10,}} />
                    </View>
                    <View style={ styles.buttonWrapper}>
                      <Button
                        title="Select picture"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={ styles.button }
                        onPress={() => {this.browseImage(2)}}
                      />
                    </View>
                  </Card>
                </ScrollView>
              </View>
            )}

          </Wizard.Step>

          <Wizard.Step>
            {( {onChangeValue, values, sliderValue, sliderMaxValue} ) => (
              <View style={styles.container} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrowContainer} style={{ width: 100 +'%'}}>
                  <View style={styles.sliderView}>
                    <Slider
                      value={sliderValue}
                      maximumValue={sliderMaxValue}
                      disabled={this.state.sliderState}
                      minimumTrackTintColor="#FF1744"
                      thumbTintColor="#FF1744"
                    />
                    <Text style={{textAlign: 'center'}}>Page  {sliderValue} of {sliderMaxValue}</Text>
                  </View>
                  <Card title="Bank Details">
                    <View style={styles.textBox}>
                      <Picker
                        style={{ width: 100 + '%'}}
                        selectedValue={this.state.bank_code}
                        onValueChange={(bankCode, bankIndex) => this.setState({bank_code: bankCode})}>
                        <Picker.Item label="Select bank" value="" />
                        {this.state.banks.map((item, key)=>(
                            <Picker.Item label={item.name} value={item.code} key={key} />)
                          )}
                      </Picker>
                    </View>
                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Account No.'
                      style={styles.textBox}
                      value={values.accNo}
                      name="accNo"
                    />
                    <MyInput
                      onChangeValue={ onChangeValue }
                      placeholder='Account Name'
                      style={styles.textBox}
                      value={values.accName}
                      name="accName"
                    />

                  </Card>
                </ScrollView>
              </View>
            )}

          </Wizard.Step>

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
    display: 'flex'
    // width: 100 + "%",
    // alignItems: "center",
    // paddingHorizontal: 25,
    // backgroundColor: "#ffffff",
    // paddingTop: Platform.OS === "ios" ? 20 : 0
    //justifyContent: 'flex-end'
  },

  container: {
    flex: 1,
    width: 100 + "%",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#F1F1F1'
  },
  scrowContainer: {
    flexGrow: 1,
    bottom: 10
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
    fontSize: 18,
    alignSelf: "stretch",
    height: 45,
    width: 100 + '%',
    paddingRight: 45,
    paddingLeft: 8,
    paddingVertical: 0,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 0,
    fontSize: 16,
    color: "#000000",
    marginVertical: 10
  },

  pickerBox: {
    alignSelf: "stretch",
    height: 45,
    width: "100%",
    paddingRight: 5,
    paddingLeft: 5,
    paddingVertical: 0,
    borderColor: "#000000",
    borderWidth: 1,
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
  sliderView: {
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
  },
  button: {
    backgroundColor: "#FF1744",
    width: 220,
    height: 40,
    borderColor: "#FFFFFF",
    borderWidth: 0,
    borderRadius: 15

  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  cls: {
    height: 40
  }
});
