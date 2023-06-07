import React from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'

type ResetPasswordProps=StackScreenProps<LoginNavScreenList,'ResetPassword'>

export default function ResetPassword(props:ResetPasswordProps):JSX.Element{
    
    // 1. 우선 테스트 목적의 화면
    return(
        <View style={style.root}>
            <Text>ResetPassword</Text>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1,backgroundColor:'feffff'},

})