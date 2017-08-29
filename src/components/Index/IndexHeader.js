import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Svg, { Path, Circle, Rect } from 'react-native-svg'

class IndexHeader extends Component {
    render(){
        return (
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#0085ff'}}>
                <View style={{ flex: 1 }}>
                    <Svg style={{width: '100%', height: '100%', }}>
                        <Path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z" />
                    </Svg>
                </View>
                <View style={{ flex: 5 }}>
                    <Text style={{ color: '#fff'}}>朝阳区恒通国际创新园C9</Text>

                </View>
                <View style={{ flex: 1, backgroundColor: 'red' }}>

                </View>

            </View>

        )
    }
}

export default IndexHeader