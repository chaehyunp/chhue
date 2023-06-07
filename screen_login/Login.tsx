import React from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'

// 공통사용 컴포넌트 import
import InputComponent from '../components/InputComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'

type LoginProps=StackScreenProps<LoginNavScreenList,'Login'>

export default function Login(props:LoginProps):JSX.Element{

    // // 1. 우선 테스트 목적의 화면
    // return(
    //     <View style={style.root}>
    //         <Text>Login</Text>
    //     </View>
    // )

    // 2. 로그인 화면
    return(
        <View style={style.root}>
            {/* 크게 2개의 영역으로 구성 : contents (로그인 콘텐츠 영역), footer (아래쪽에 회사이름 or 앱이름 표시영역) */}
            {/* 1. 로그인 콘텐츠 영역 */}
            <View style={style.contents}>
                {/* 1.1 로고 */}
                <Text style={style.logo}>영화마을</Text>

                {/* 1.2 이메일/비밀번호 입력란 */}
                {/* TextInput은 로그인, 회원가입, 비밀번호 재설정 화면에서도 모두 사용되므로 사용빈도가 높음, 
                하나하나 스타일하기 어려우므로 별도의 CustomComponent로 제작하여 재사용 */}
                <InputComponent placeholder='이메일'></InputComponent>
                <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>

                {/* 1.3 로그인버튼 */}
                <View style={{width:'100%',marginVertical:16}}>
                    <Button title='로그인' color='#252525'></Button>
                </View>

                {/* 1.4 비밀번호 재설정 */}
                <Text style={style.link} onPress={()=>props.navigation.navigate('ResetPassword')}>비밀번호를 잊으셨나요?</Text>

                {/* 1.5 회원가입 안내 */}
                <Text style={style.info}>계정이 없으시다면? <Text style={style.link} onPress={()=>props.navigation.navigate('SignUp')}>가입하기</Text></Text>
            </View>
            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerCopyright}>MovieVillage by Hue</Text>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1,backgroundColor:'feffff'},
    contents:{flex:1,justifyContent:'center',alignItems:'center',padding:32},
    footer:{borderTopWidth:1,borderTopColor:'#d3d3d3',padding:8},
    logo:{color:'#292929',fontSize:28,textAlign:'center'},
    info:{color:'#999999', fontSize:12},
    link:{
        width:'100%',
        textAlign:'center',
        color:'#252525',
        fontSize:12, 
        textDecorationLine:'underline', 
        marginVertical:16
    },
    footerCopyright:{
        textAlign:'center',
        fontSize:12,
        color:'#999999'
    }
})