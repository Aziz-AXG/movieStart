import { View, Text, StyleSheet, Switch, UIManager } from 'react-native'
import {  useLocalSearchParams, useNavigation } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { typeSelectedMovie } from '~/interfaces/types'
import { getMovie } from '~/services/api'
import {  Image} from 'tamagui'
import { useMovieStore } from '~/store/store'
import { useEffect, useRef, useState } from 'react'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { FontAwesome5, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { findNodeHandle } from 'react-native'

const MovieDat = () => {
  const {id,from}=useLocalSearchParams<{id:string,from:string}>()
  const [isReady, setIsReady] = useState(false);  
  const {data:movie} = useQuery<typeSelectedMovie>({
    queryKey: ['movies', id],
    enabled: !!id,
    queryFn: () => getMovie(id!),
    staleTime: 4000,
  
  });
//=========================================
   const selectedIDS=useMovieStore((state)=>state.selectedIDS)
   const toggleMovie=useMovieStore((state)=>state.toggleMovie)
   const addFrMovie=useMovieStore((state)=>state.addFrMovie)
   const dleatFrMovie=useMovieStore((state)=>state.dleatFrMovie)
    // console.log('selectedIDS',selectedIDS)
//=========================================
const navigation = useNavigation();

useEffect(() => {
  if (movie) {
    navigation.setOptions({ title: movie?.Title });
    setIsReady(true)
  }
}, [movie]);
//=========================================
const [isAdd,setIsAdd]=useState(selectedIDS.some((selectedMovie) => selectedMovie.imdbID === movie?.imdbID));
// setIsAdd(selectedIDS.some((selectedMovie) => selectedMovie.imdbID === movie?.imdbID))
 
function handleToggle(){
  setIsAdd(e=>!e)
  toggleMovie(movie!)
}
//=========================================

 
const dropZoneRef = useRef<View>(null);
const dropTrashRef = useRef<View>(null);

const onDrop=(x:number,y:number)=>{
  const handleAdd= findNodeHandle(dropZoneRef.current);
  const handleDleat= findNodeHandle(dropTrashRef.current);
 

      if(handleAdd){
        UIManager.measure(handleAdd,(dx,dy,w,h,px,py)=>{
          if (x >= px && x <= px + w && y >= py && y <= py + h) {
            addFrMovie(movie!)
            setIsAdd(e=>!e)
          }
        })
      }

      
      if(handleDleat){
        UIManager.measure(handleDleat,(dx,dy,w,h,px,py)=>{
          if (x >= px && x <= px + w && y >= py && y <= py + h) {
            dleatFrMovie(movie!)
            setIsAdd(e=>!e)
      
          }
        })
      }
}

const translateX = useSharedValue(0);
const translateY = useSharedValue(0);

const gesture = Gesture.Pan()
    .onStart(()=>{

    })
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY;
    })
    .onEnd((e) => {
      const x = e.absoluteX;
      const y = e.absoluteY;
       
      runOnJS(onDrop)(x,y)
      
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  const styleR = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
    zIndex : translateX.value? 10:1,
  }));

//=========================================
   
if (!movie) return <Text> the Movie Not Found !!</Text>;

 
  return (
      <View style={styles.contener} >
         
         <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.gridItem,styleR]}> 
                {isReady &&(
                  <Animated.Image source={{uri:movie?.Poster}} 
                  alt={movie?.Title}
                  style={{width:'100%',height:350,borderRadius: 10, }}
                  sharedTransitionTag={`${movie.imdbID}${from}`}
                  />
                )}
                <Text style={styles.titeles}>{movie?.Title}</Text>
                <Text style={styles.type}> Released: {movie?.Released}</Text>
                <View style={styles.actn}>
                  <Text style={styles.type}> Type: {movie?.Type}</Text>
                  <Text style={styles.type}> Year: {movie?.Genre}</Text>
                </View>       
                <Text style={styles.plot}>{movie?.Plot}</Text>
                <Text style={styles.type}> Time: {movie?.Runtime} </Text>

                

                <View style={{flexDirection:'row-reverse', alignItems:"center"}}>
                <Switch 
                   value={selectedIDS.some((selectedMovie) => selectedMovie.imdbID === movie?.imdbID)}
                  onValueChange={()=>handleToggle()} />
                {isAdd&&<MaterialIcons name="favorite" size={34} color="red" />}
                </View>

           </Animated.View>
         </GestureDetector>
        

      <View style={styles.parnt}>
       {!isAdd? <View ref={dropZoneRef} style={styles.addFvr}>
            <Text style={styles.addText}>Add To Favorites </Text>
        </View>
       : <View ref={dropTrashRef} style={styles.addFvr} >
       {/* <Text style={styles.addText}>Add To Favorites </Text> */}
       <FontAwesome5 name="trash" size={34} color="black" />      
    </View>}
       
      </View>
      </View>
  )
}

const styles=StyleSheet.create({
  contener:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:10,
    // backgroundColor:'#fff'
  },
    gridItem: {
    width: '75%', 
    backgroundColor: '#660101d2',
    marginBottom: 10,
    borderRadius: 10,
    color:'#fff',
    paddingBottom:10,
  },
  titeles: {
    color:'#000',
    fontSize: 28,
    fontWeight:'bold',
    marginHorizontal:9,

  },
  type:{
    color:'#fff',
    textAlign:'left',
    marginHorizontal:9,

  },
  actn:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    marginBottom:5,

  },
  plot:{
    color:'#fff',
    textAlign:'left',
    marginHorizontal:9,
    fontSize:17,
    fontWeight:'bold',
    marginBottom:5,
    // color:'#000',
  },

  parnt:{
    // flexDirection:'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'green',
    width:'100%',
    paddingHorizontal:20,
  },
  addFvr:{
    paddingHorizontal:10,
    paddingVertical:15,
    backgroundColor:'#ffee44',
    borderRadius:10
  },
  addText:{
    fontSize:20,
    color:'#000',
    fontWeight:'bold',
  }
})

export default MovieDat