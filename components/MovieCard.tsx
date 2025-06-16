
import { Link, router, useRouter } from 'expo-router'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import { Card ,Image} from 'tamagui'
import { Movie, MovieCardProps } from '~/interfaces/types'
import { useMovieStore } from '~/store/store'

const MovieCard : React.FC<MovieCardProps> = ({movie , from}) => {
  // const router= useRouter()
  return (
    // <Link href={`/home/movie/${movie.imdbID}`} asChild>
            <TouchableOpacity 
              style={styles.gridItem}
              onPress={() => router.push({ pathname: `/(stack)/[id]`, params: { id:movie.imdbID, from: from } })}
              >
      {/* <View style={styles.gridItem}> */}
            <Animated.Image source={{uri:movie.Poster}} 
            alt={movie.Title}
            style={{width:'80%',height:140}}
            sharedTransitionTag={`${movie.imdbID}${from}`}
            />
            <Text style={styles.titeles}>{movie.Title}</Text>
            <View style={{width:'80%'}}>
              <Text style={styles.type}> Type: {movie.Type}</Text>
              <Text style={styles.type}> Year: {movie.Year}</Text>
            </View>       
      {/* </View> */}
      </TouchableOpacity>

      // </Link>
  )
}

const styles=StyleSheet.create({
    gridItem: {
    width: '45%', 
    backgroundColor: '#011566d2',
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
export default MovieCard