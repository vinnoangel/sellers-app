import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    TouchableOpacity 
} from 'react-native';
import config from '../../config';


class Post extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width,
            
        };
    }

    likedToggled() {
        this.setState ({
            liked: !this.state.liked
        });
    }

    onPress() {
        this.props.navigation.navigate("single");
    }

    render(){

        const imageHeight = Math.floor(this.state.screenWidth * 0.9);
       // alert(this.props.item);


        const imageUrl = this.props.item % 2 == 0 ? "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" : "https://upload.wikimedia.org/wikipedia/commons/4/48/Palacio_Municipal_de_Rio_Blanco.jpg";

        //const imageUrl = imageSelection;// + '=s' + imageHeight; 
        const heartIconColor = (this.state.liked ? "rgb(252,61,57)" : null);
        return(
            <View  style={{ flex: 1, width: 100 + "%" }}>
                
                <View style={styles.userBar} >

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image 
                            style={ styles.userPic}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                            }}
                        />
                        <Text style={styles.userText}>vinnoangel</Text>
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 36, alignItems: "center" }}>...</Text>
                    </View>

                </View>
                
                <TouchableOpacity activeOpacity = {0.4}>
                    <Image 
                        style={{ width: 100 + '%', height: imageHeight  }}
                        source={{
                            uri: imageUrl
                        }}
                    />
                </TouchableOpacity>
                
                <View style={styles.iconBar}>
                    <TouchableOpacity activeOpacity = {0.4} onPress={() => { this.likedToggled(); }}>
                    <Image style={[styles.icon, {height: 45, width: 45, tintColor: heartIconColor}]} source={config.images.heartIcon} />
                    </TouchableOpacity>
                    <Image style={[styles.icon, {height: 36, width: 36}]} source={config.images.chatIcon} />
                    <Image resizeMode = "stretch" style={[styles.icon, {height: 40, width: 40}]} source={config.images.arrowIcon} />
                </View>

                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {height: 20, width: 20, tintColor: 'rgb(252,61,57)'}]} source={config.images.heartIcon} />
                    <Text>130 Likes</Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    userText: {
        paddingLeft: 5
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairLineWidth,
        borderBottomWidth: StyleSheet.hairLineWidth,
        flexDirection: "row",
        alignItems: "center",


    },

    icon: {
        marginHorizontal: 5,
    },

});

export default Post;