import React,{useState} from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'

// 공통사용 컴포넌트
import IputComponent from '../components/InputComponent'
import TabComponent from '../components/TabComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'

type SignUpProps=StackScreenProps<LoginNavScreenList,'SignUp'>

export default function SignUp(props:SignUpProps):JSX.Element{
    
    // // 1. 우선 테스트 목적의 화면
    // return(
    //     <View style={style.root}>
    //         <Text>SignUp</Text>
    //     </View>
    // )

    // 탭작업에서 사용할 state 변수
    const [tabs, setTabs] = useState(['전화번호','이메일']) //탭의 라벨을 string 배열로
    const [tabIndex,setTabIndex] = useState(0) //현재 선택된 탭 번호

    // 2. 회원가입 화면
    return(
        <View style={style.root}>
            {/* contents, footer 2개의 영역으로 구성 */}
            {/* 1. contents 영역 */}
            <View style={style.contents}>
                {/* 1.1 전화번호와 이메일 중 원하는 정보로 회원가입 할 수 있도록 Tab 구성 */}
                <View style={style.tabContainer}>
                    {/* tab 컴포넌트는 RN에 없으므로 Custom Component로 제작 */}
                    {/* <TabComponent label='전화번호' selected={true}></TabComponent>
                    <TabComponent label='이메일' selected={false}></TabComponent> */}
                    {/* 탭들을 배열로 만들어 컴포넌트 제작 */}
                    {/* 탭 라벨의 갯수만큼 탭 컴포넌트를 만들기 위해 map() 이용 */}
                    {
                        tabs.map((value,index)=>{
                            return <TabComponent label={value} key={index} selected={index==tabIndex} onPress={()=>setTabIndex(index)}></TabComponent>
                        })
                    }
                </View>
            </View>

            {/* 1.2 정보입력 */}

            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.info}>이미 계정이 있으시다면? <Text style={style.link} onPress={()=>props.navigation.navigate('Login')}>로그인하기</Text></Text>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1,backgroundColor:'feffff'},
    contents:{flex:1,alignItems:'center',padding:24},
    footer:{borderTopWidth:1,borderTopColor:'#d3d3d3',padding:8, alignItems:'center'},
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
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16
    }
})