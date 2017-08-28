import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Svg, { Path, Circle, Rect } from 'react-native-svg'

class IndexHeader extends Component {
    render(){
        return (
            <Svg height="100" width="100">
                <Path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z" />
            </Svg>
        )
    }
}

export default IndexHeader