import { View } from 'react-native'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { StyledTextProps, TextProps } from '../types.d'
import { css } from 'styled-components/native'

const StyledText=styled.Text<StyledTextProps>`
    color:#fff;
    font-size:5;
    ${({sizes}:StyledTextProps)=>css`
      ${()=>sizes==='sm'&& 'font-size:12'}
      ${()=>sizes==='md'&& 'font-size:15'}
      ${()=>sizes==='lg'&& 'font-size:20'}
      ${()=>sizes==='xl'&& 'font-size:25'}
    `}
`
const MyText:FunctionComponent<TextProps> = (props) => {
  return (
    <StyledText {...props} >{props.children}</StyledText>
  )
}

export default MyText