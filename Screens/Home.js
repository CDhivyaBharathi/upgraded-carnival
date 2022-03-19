import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.headingContainer}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.titleText1}>Look at me</Text><Text style={styles.titleText2}>APP</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={styles.contentText}> A place where you can be anything</Text>
                    </View>
                <View style={{flexDirection:'row',flex:0.25}}>
                    <View style={{flex:0.5}}><Image source={require('../assets/filter-imgs/crown-pic1.png')} style={{height:65,width:160}}/></View>
                    <View style={{flex:0.5}}><Image source={require('../assets/filter-imgs/flower-pic1.png')} style={{height:65,width:160}}/></View>
                    <View style={{flex:0.5}}><Image source={require('../assets/filter-imgs/hat-pic1.png')} style={{height:65,width:160}}/></View>
                    <View style={{flex:0.5}}><Image source={require('../assets/filter-imgs/ear-pic1.png')} style={{height:65,width:160}}/></View>
                </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Main")}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Try now</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6278e4"
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading1: {
        fontSize: RFValue(20),
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading2: {
        fontSize: RFValue(20),
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    contentContainer: {
        flex: 0.6,
        margin: RFValue(5),
        borderRadius: RFValue(15),
        backgroundColor: "white",
        height: "100%",
        padding: RFValue(20)
    },
    
    contentText: {
        fontSize: RFValue(17),
        fontStyle: 'italic',
        fontWeight: "bold"
    },

    buttonContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },

    button: {
        backgroundColor: "#efb141",
        paddingLeft: RFValue(50),
        paddingRight: RFValue(50),
        paddingTop: RFValue(20),
        paddingBottom: RFValue(20),
        borderRadius: RFValue(20)
    },

    buttonText: {
        fontSize: RFValue(25),
        fontStyle: 'italic',
        color: "white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1
    }
});