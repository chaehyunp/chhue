import React from 'react'
import { View,Text,StyleSheet,Button,ActivityIndicator } from 'react-native'

// Stack Navigator의 screen으로 등록된 컴포넌트에서 전달받을 props의 타입지정
import { StackScreenProps } from '@react-navigation/stack'

// 타입스크립트는 전달받는 목록을 알아야 함
//미리 만들어놓은 리스트 tsx을 import하고 StackScreenProps에게 리스트를 주고 그 중 누구인지 명시
import { RootScreenList } from './types'
type IntroProps = StackScreenProps<RootScreenList,'Intro'>

// functional component - 파라미터로 props {navigation, route} 객체 받음
export default function Intro(props:IntroProps):JSX.Element{
    return(
        //1. 화면전환 테스트 목적으로 보여질 임시 화면
        <View style={style.root}>
            <Text>Intro</Text>
            <Button title='go login' onPress={()=>props.navigation.navigate('LoginNav')}></Button>
            <Button title='go main' color='green' onPress={()=>props.navigation.navigate('MainNav')}></Button>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})