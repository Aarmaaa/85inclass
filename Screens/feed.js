import React from 'react';
import { StyleSheet, Text,Image, View, FlatList, SafeAreaView, Platform, StatusBar, } from 'react-native';

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import StoryCard from './StoryCard';

var customFont = {'Bubblegum':require("../assets/fonts/BubblegumSans-Regular.ttf")}
var story = require("./temperoyStory.json");

export default class FeedScreen extends React.Component{

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

    keyExtractor=(item,index)=> index.toString()

    renderItem=({item: story})=>{
        return <StoryCard story = {story} navigation = {this.props.navigation} />
    }

    render(){
        if(!this.state.fontLoaded){
            return <AppLoading/>   
        }
        else {
            return(
                <View style={styles.container} >
                    <SafeAreaView style={styles.safeArea} />
                    <View style = {styles.title}>
                        <View style={story.icon}>
                            <Image
                            source={require('../assets/logo.png')}
                            style={styles.img}
                            />
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.header} >Story App</Text>
                        </View>
                        <View style={{flex:0.85}}>
                            <FlatList
                            keyExtractor= {this.keyExtractor}
                            data= {story}
                            renderItem= {this.renderItem}
                            />
                        </View>
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
    },
    title: {
        flex: 0.7,
        flexDirection: "row"
    },
    icon: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flex: 0.7,
        justifyContent: 'center'
    },
    header: {
        color:"white",
        fontSize: RFValue(30),
        fontFamily: "Bubblegum"
        
    },
})