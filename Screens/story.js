import React from 'react';
import { StyleSheet, Text,Image, View, FlatList, SafeAreaView, Platform, StatusBar, } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';

var customFont = {'Bubblegum':require("../assets/fonts/BubblegumSans-Regular.ttf")}

export default class Story extends React.Component{

    constructor(props){
        super(props)
        this.state={
            fontLoaded:false
        }
    }
    
    async _loadFontsAsync(){
        await Font.loadAsync(customFont);
        this.setState({
            fontLoaded:true
        })
    }

    componentDidMount(){
        this._loadFontsAsync();
    }

    render(){
        if(!this.state.fontLoaded){
            return <AppLoading/>
        }
        else{
            return(
                <View style={styles.container} >
                    <View style={styles.cardContainer}>
                        <Image
                            source={require("../assets/story_image_1.png")}
                            style={styles.storyImage}
                        />
                        <View style={styles.titleContainer} >
                                <Text style={styles.titleText} >{this.props.story.title}</Text>
                                <Text style={styles.authorText} > {this.props.story.author} </Text>
                                <Text style={styles.descriptionText} > {this.props.story.description} </Text>
                        </View>
                        <View style={styles.actionContainer} >
                            <View style={styles.likeButtonContainer} >
                                <Ionicons name="heart" size={RFValue(30)} color="white" />
                                <Text style={styles.likeText} >500</Text>
                            </View>
                        </View>
                    </View>

                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
    },
    storyImage: {
        resizeMode: "contain",
        width: '95%',
        alignSelf: 'center',
        height: RFValue(250)
    },
    titleContainer: {
        paddingLeft: RFValue(25),
        justifyContent: 'center'  
    },
    titleText: {
        fontFamily: "Bubblegum",
        fontSize: RFValue(25),
        color: "white"
    },
    authorText: {
        fontFamily: "Bubblegum",
        fontSize: RFValue(18),
        color: "white"
    },
    descriptionText: {
        fontFamily: "Bubblegum",
        fontSize: RFValue(13),
        color: "white",
        paddingTop: RFValue(10),
    },
    actionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: RFValue(10)
    },
    likeButtonContainer: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: RFValue(30),
        backgroundColor: "#eb3948"
        
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum",
      fontSize: RFValue(25),
      marginLeft: RFValue(5),
      
    },
})