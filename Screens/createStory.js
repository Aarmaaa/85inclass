import React from 'react';
import { StyleSheet, Text, TextInput,Image, View, FlatList, SafeAreaView, Platform, StatusBar, ScrollView} from 'react-native';

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
            previewImg:"image_1",
            dropDownHeight: 40,
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
                                <DropDownPicker
                                items={[
                                    {label:"image 1", value:"image_1"},
                                    {label:"image 2", value:"image_2"},
                                    {label:"image 3", value:"image_3"},
                                    {label:"image 4", value:"image_4"},
                                    {label:"image 5", value:"image_5"},
                                ]}
                                defaultValue={this.state.previewImg}
                                containerStyle={{height:40, borderRadius:20, marginBottom:10}}
                                style={{backgroundColor:"transparent"}}
                                onOpen={()=>{
                                    this.setState({
                                        dropDownHeight: 170
                                    })
                                }}
                                onClose ={()=>{
                                    this.setState({
                                        dropDownHeight: 40
                                    })
                                }}
                                arrowStyle={{color:"white", fontFamily:"Bubblegum"}}
                                dropDownStyle={{backgroundColor:"#2f345d"}}
                                itemStyle={{justifyContent:"flex-start"}}
                                labelStyle={{color:"white", fontFamily:"Bubblegum"}}
                                onChangeItem={(item) => {
                                    this.setState({
                                        previewImg: item.value
                                    })
                                }}
                                />
                            </View>
                            
                            <TextInput
                                placeholder="title"
                                style={styles.input}
                                onChangeText={text => this.setState({ title }) }
                                placeholderTextColor="white"
                            />
                            <TextInput
                                placeholder="description"
                                style={styles.input}
                                onChangeText={text => this.setState({ description }) }
                                placeholderTextColor="white"
                                multiline={true}
                                numberOfLines={4}
                            />
                            <TextInput
                                placeholder="stroy"
                                style={styles.input}
                                onChangeText={text => this.setState({ stroy }) }
                                placeholderTextColor="white"
                                multiline={true}
                                numberOfLines={20}
                            />
                            <TextInput
                                placeholder="moral"
                                style={styles.input}
                                onChangeText={text => this.setState({ moral }) }
                                placeholderTextColor="white"
                                multiline={true}
                                numberOfLines={4}
                            />
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
    },
    input: {
       height:RFValue(40),
       borderColor:"white",
       borderWidth:RFValue(1),
       borderRadius:RFValue(10),
       paddingLeft:RFValue(10),
       color:"white",
       fontFamily:'Bubblegum',
       marginTop:RFValue(15), 
    }
})