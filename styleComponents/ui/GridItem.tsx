import { View, Text,StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { ItemProps, StyledItemProps } from '../types.d'
import { DefaultTheme } from 'styled-components/native'; 
import { router } from 'expo-router';
import Animated from 'react-native-reanimated';
import ImageItem from './ImageItem';
import { css } from 'styled-components/native';
import MyText from './MyText';


const StyledItem= styled.TouchableOpacity<StyledItemProps>`
    width: 45%; 
    background-color: ${({theme,bg}:StyledItemProps)=>theme.colors.primary};
    justify-content: center;
    align-items: center;
    margin-bottom: 10;
    border-radius: 10px ;
    padding: 5px;
    ${({bg,theme}:StyledItemProps)=>css`
      ${()=>bg==='primary'&&`background-color:${theme.colors.primary}`}
      ${()=>bg==='secondary'&&`background-color:${theme.colors.secondary}`}
      ${()=>bg==='danger'&&`background-color:${theme.colors.danger}`}
    `}
`
const GridItem : FunctionComponent<ItemProps> = ({movie,from,bg,sizes}) => {
  const ArimatedImageItem=Animated.createAnimatedComponent(ImageItem)

  return (
    <StyledItem
    bg={bg}   
    onPress={() => router.push({ pathname: `/(stack)/[id]`, params: { id:movie.imdbID, from: from } })}
      >

      <ArimatedImageItem source={{uri:movie.Poster}} 
                 alt={movie.Title}
                 sharedTransitionTag={`${movie.imdbID}${from}`}
                 sizes={sizes}
                 />
                 <MyText sizes='md'  >{movie.Title}</MyText>
                 <View style={{width:'80%'}}>
                   <MyText sizes='sm'> Type: {movie.Type}</MyText>
                   <MyText sizes='sm'> Year: {movie.Year}</MyText>
                 </View>   
    </StyledItem>
  )
}

// const styles=StyleSheet.create({
//   //   gridItem: {
//   //   width: '45%', 
//   //   backgroundColor: '#011566d2',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   marginBottom: 10,
//   //   // borderRadius: 10,
//   //   color:'#fff',
//   //   paddingVertical:5,
//   // },
//   titeles: {
//     color:'#fff',
//     fontSize: 15,
//     fontWeight:'bold'
//   },
//   type:{
//     color:'#fff',
//   }
// })
export default GridItem