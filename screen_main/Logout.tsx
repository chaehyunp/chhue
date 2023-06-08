import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainNavScreenList } from '../types'
type AccountProps = BottomTabScreenProps<MainNavScreenList, 'Account'>

export default function Account(props:AccountProps):JSX.Element{

    return(
        <View>
            <Image source={require('')}></Image>
            <TouchableOpacity
                    style={{flexDirection:'row', marginLeft:16, alignItems:'center'}}
                    onPress={ async ()=>{
                        await AsyncStorage.removeItem('email')
                        // props.navigation.replace('Intro')
                        
                    }}>
                    <Text style={{marginLeft:4}} >로그아웃</Text>
                </TouchableOpacity>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1,},
})