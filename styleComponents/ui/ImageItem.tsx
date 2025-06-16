import { View, Text, ImageProps } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { ImageItemProps } from '../types.d';
import { css } from 'styled-components/native';
 
const StyledImge = styled.Image<{ sizes?: 'sm' | 'md' | 'lg' | 'xl' }>`
  width: 80%;
  height: 140px;
  border-radius:5px;
  ${({ sizes}:ImageItemProps)=>css`
    ${()=>sizes==='sm'&&` width: 80%; height: 140px`}
    ${()=>sizes==='md'&&` width: 95%; height: 180px`}
  `}
`;

const ImageItem = React.forwardRef<React.ComponentRef<typeof StyledImge>, ImageItemProps>(
    (props, ref) => {
      return <StyledImge ref={ref} {...props} />;
    }
  );
  
export default ImageItem