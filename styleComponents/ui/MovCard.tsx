// import { View, Text ,StyleSheet} from 'react-native'
// import React, { FunctionComponent }  from 'react'
// import styled from 'styled-components/native'
// import { CardProps } from '../types.d'
// import GridItem from './GridItem'
// import { router } from 'expo-router'
// import Animated from 'react-native-reanimated'
// import ImageItem from './ImageItem'

// const StyledCard=styled.View`
//     width:40%;
//     background-color: #000;
//     position: relative;
// `


// const MovCard:FunctionComponent<CardProps> =({movie,from,...rest}) => {
//     const ArimatedImageItem=Animated.createAnimatedComponent(ImageItem)

//   return (
// //    <StyledCard {...rest}>
//      <GridItem 
             
//              onPress={() => router.push({ pathname: `/(stack)/[id]`, params: { id:movie.imdbID, from: from } })}
//              >
     
//            <ArimatedImageItem source={{uri:movie.Poster}} 
//            alt={movie.Title}
//            sharedTransitionTag={`${movie.imdbID}${from}`}
//            />
//            <Text style={styles.titeles}>{movie.Title}</Text>
//            <View style={{width:'80%'}}>
//              <Text style={styles.type}> Type: {movie.Type}</Text>
//              <Text style={styles.type}> Year: {movie.Year}</Text>
//            </View>       
    
//      </GridItem>
// //    </StyledCard>
//   )
// }

// const styles=StyleSheet.create({
//     gridItem: {
//     width: '45%', 
//     backgroundColor: '#011566d2',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//     // borderRadius: 10,
//     color:'#fff',
//     paddingVertical:5,
//   },
//   titeles: {
//     color:'#fff',
//     fontSize: 15,
//     fontWeight:'bold'
//   },
//   type:{
//     color:'#fff',
//     textAlign:'left'
//   }
// })
// export default MovCard
