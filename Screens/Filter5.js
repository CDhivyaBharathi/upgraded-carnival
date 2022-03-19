import React from 'react';
import { StyleSheet, Text, View,Image, SafeAreaView, StatusBar, Platform } from 'react-native';

const Filter5 = ({face:{
    bounds:{
        size:{width:faceWidth, height:faceHeight}
    },
    leftEyePosition,
    rightEyePosition,
    noseBasePosition
}}) =>{
    
    const filterWidth = faceWidth
    const filterHeight = faceHeight / 3
    
    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    
return(
    <View  style={{
        position: 'absolute',
        left: leftEyePosition.x - glassesWidth * 0.675,
        top: leftEyePosition.y - glassesHeight * 0.5
    }}>
        <Image  source={require('../assets/filter-imgs/flower-pic2.png')} 
        style={{
            width : filterWidth, 
            height: filterHeight, 
            resizeMode: 'contain',
            transform: [{ rotate: `${transformAngle()}deg` }]}} />
    </View>
)
}

export default Filter1;