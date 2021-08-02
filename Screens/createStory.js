import React from 'react';
import { StyleSheet, Text,Image, View, FlatList, SafeAreaView, Platform, StatusBar, ScrollView} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import StoryCard from './StoryCard';

var customFont = {'Bubblegum':require("../assets/fonts/BubblegumSans-Regular.ttf")}
var story = require("./temperoyStory.json");

export default class CreateStory extends React.Component{

    constructor(props){
        super(props)
        this.state={
            fontLoaded:false,
            previewImg:"image_1"
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
        else {
            var previewImages = {
                image_1:require("../assets/story_image_1.png"),
                image_2:require("../assets/story_image_2.png"),
                image_3:require("../assets/story_image_3.png"),
                image_4:require("../assets/story_image_4.png"),
                image_5:require("../assets/story_image_5.png"),

            }
            return(
                <View style={styles.container} >
                    <SafeAreaView style={styles.safeArea} />
                    <View>
                        <Image
                        source={require('../assets/logo.png')}
                        style={styles.img}
                        />
                    </View>
                    <View>
                        <Text>New Story</Text>
                    </View>
                    <View>
                        <ScrollView>
                            <Image source={previewImages[this.state.previewImg]} />
                            <View>
                                <DropDownPicker/>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010347'
    },
    safeArea: {
        marginTop: Platform.OS === 'android'?StatusBar.currentHeight: RFValue(35)
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})