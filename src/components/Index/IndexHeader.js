import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import Svg, { Path, Circle, Rect, Defs, ClipPath, G } from 'react-native-svg'
import * as ScreenUtil from '../common/Adaptation'

class IndexHeader extends Component {
    render(){
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#0085ff', paddingTop: 20}}>
                    <View style={{ flex: 5, flexDirection: 'row' }}>

                        <Svg width="13" height="15" viewBox="0 0 26 31">
                            <Path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z" />
                        </Svg>
                        <Text style={{ color: '#fff', fontSize: ScreenUtil.setSpText(8)}}>朝阳区恒通国际创新园C9</Text>
                        <Svg viewBox="0 0 14 8" id="arrow" width="7" height="4">
                            <Path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z">
                            </Path>
                        </Svg>
                    </View>
                    <View style={{ flex: 1,flexDirection: 'row' }}>
                        <View >
                            <Text style={{ color: '#fff', fontSize: ScreenUtil.setSpText(7) }}>26℃</Text>
                            <Text style={{ color: '#fff', fontSize: ScreenUtil.setSpText(7), textAlign: 'right' }}>阴</Text>
                        </View>
                        <Image source={{uri: "https://fuss10.elemecdn.com/3/73/19e992e612e983f517e2690cb3e16png.png"}}
                               style={{  width: 30, height: 30}}/>
                    </View>
                </View>
                <View style={{ backgroundColor: '#0085ff', padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center', backgroundColor: '#fff',  width: '100%', height: 25, borderRadius: 2}}>
                        <Svg viewBox="0 0 14 14"  width="14" height="14">
                            <G fill="#999" fill-rule="evenodd">
                                <Path fill-rule="nonzero" d="M5.5 9.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z">
                                </Path>
                                <Rect width="1.5" height="6" x="0 .904" y="12.859" rx=".5" rotate="-45">
                                </Rect>
                            </G>
                        </Svg>
                        <View>
                            <Text style={{ color: '#666' }}>搜索商家、商品名称</Text>
                        </View>

                    </View>
                </View>
                <View style={{ backgroundColor: '#0085ff', padding: 10, flexDirection: 'row' }}>
                    <Text style={{ marginRight: ScreenUtil.scaleSize(50), color: '#fff', fontSize: ScreenUtil.setSpText(6) }}>
                        炸鸡
                    </Text>
                    <Text style={{ marginRight: ScreenUtil.scaleSize(50), color: '#fff', fontSize: ScreenUtil.setSpText(6) }}>
                        炸鸡
                    </Text>
                    <Text style={{ marginRight: ScreenUtil.scaleSize(50), color: '#fff', fontSize: ScreenUtil.setSpText(6) }}>
                        炸鸡
                    </Text>
                    <Text style={{ marginRight: ScreenUtil.scaleSize(50), color: '#fff', fontSize: ScreenUtil.setSpText(6) }}>
                        炸鸡
                    </Text>
                    <Text style={{ marginRight: ScreenUtil.scaleSize(50), color: '#fff', fontSize: ScreenUtil.setSpText(6) }}>
                        炸鸡
                    </Text>
                    <Text style={{ marginRight: ScreenUtil.scaleSize(50), color: '#fff', fontSize: ScreenUtil.setSpText(6) }}>
                        炸鸡
                    </Text>
                    <Text style={{ marginRight: ScreenUtil.scaleSize(50), color: '#fff', fontSize: ScreenUtil.setSpText(6) }}>
                        炸鸡
                    </Text>
                    <Text style={{ marginRight: ScreenUtil.scaleSize(50), color: '#fff', fontSize: ScreenUtil.setSpText(6) }}>
                        炸鸡
                    </Text>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    testView: {
        backgroundColor: 'red',
        // padding: 13,
        height: 12
    }

})

export default IndexHeader