import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useMovieStore } from '~/store/store'
import { Image } from 'tamagui'
import MovieCard from '~/components/MovieCard'
import { Link } from 'expo-router'
import Animated from 'react-native-reanimated'
import GridItem from '~/styleComponents/ui/GridItem'

const Favorite = () => {
  const movies=useMovieStore((state)=>state.selectedIDS)
  // console.log("🚀 ~ Page ~ movies:", movies)

  return (
    <View style={styles.container}>
      {movies.map((movie)=>(
        
        <GridItem movie={movie} key={movie.imdbID} from='favorites' bg='danger' sizes='md'/>

          //  <Link href={`/home/movie/${movie.imdbID}`} key={movie.imdbID} style={styles.container} asChild>
          //           <TouchableOpacity style={styles.gridItem}>
          //     {/* <View style={styles.gridItem}> */}
          //           <Animated.Image source={{uri:movie.Poster}} 
          //           alt={movie.Title}
          //           style={{width:'80%',height:140}}
          //           sharedTransitionTag={`${movie.imdbID}`}
          //           />
          //           <Text style={styles.titeles}>{movie.Title}</Text>
          //           <View style={{width:'80%'}}>
          //             <Text style={styles.type}> Type: {movie.Type}</Text>
          //             <Text style={styles.type}> Year: {movie.Year}</Text>
          //           </View>       
          //     {/* </View> */}
          //     </TouchableOpacity>
        
          //     </Link>
      
      ))}
        
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    flexWrap:"wrap",
    justifyContent:'space-between',
    padding:10,
  },
    gridItem: {
    width: '45%', 
    backgroundColor: '#01661fd2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    color:'#fff',
    paddingVertical:5,
  },
  titeles: {
    color:'#fff',
    fontSize: 15,
    fontWeight:'bold'
  },
  type:{
    color:'#fff',
    textAlign:'left'
  }
})

export default Favorite