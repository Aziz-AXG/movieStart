import MovieDat from "~/components/MovieDat"

import { View } from "react-native"


const Details = () => {

  return (
      // <View style={styles.contener} >
     
      //   <View style={styles.gridItem}> 
      //           <Animated.Image source={{uri:movie?.Poster}} 
      //           alt={movie?.Title}
      //           style={{width:'100%',height:350,borderRadius: 10, }}
      //           sharedTransitionTag={`${movie.imdbID}`}
      //           />
      //           <Text style={styles.titeles}>{movie?.Title}</Text>
      //           <Text style={styles.type}> Released: {movie?.Released}</Text>
      //           <View style={styles.actn}>
      //             <Text style={styles.type}> Type: {movie?.Type}</Text>
      //             <Text style={styles.type}> Year: {movie?.Genre}</Text>
      //           </View>       
      //           <Text style={styles.plot}>{movie?.Plot}</Text>
      //           <Text style={styles.type}> Time: {movie?.Runtime}</Text>


      //           <Switch 
      //              value={selectedIDS.some((selectedMovie) => selectedMovie.imdbID === movie?.imdbID)}
      //             onValueChange={()=>toggleMovie(movie!)} 
      //             />
        
      //   </View> 

        
      // </View>
      <MovieDat/>
      // <View></View>
  )
}


export default Details