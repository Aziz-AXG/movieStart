import { View, Text, ImageBackground, StyleSheet, FlatList, StatusBar  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Input, Main, Spinner, YStack } from 'tamagui';
import { Container, Title } from '~/tamagui.config';
import { useQuery } from '@tanstack/react-query';
import { Movie } from '~/interfaces/types';
import { fetchMovies } from '~/services/api';
import MovieCard from '~/components/MovieCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '~/styleComponents/themes/theme';
// import MovCard from '~/styleComponents/ui/MovCard';
import GridItem from '~/styleComponents/ui/GridItem';


const Index = () => {
  const [searchQuery, setSearchQuery] = useState<string>('batman');
  
  const query = useQuery<Movie[], Error>({
    queryKey: ['movies', searchQuery],
    queryFn: () => fetchMovies(searchQuery),
    enabled: !!searchQuery, 
    staleTime: 60000,
  });

 

  return (
    // <View style={{flex:1}}>
   
    
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar backgroundColor={'white'}/>
      <ImageBackground
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Ds9-v5s9JNTS7Bp9D8QEQq8mKvj5qLjhQw&s' }}
        style={{ width: '100%', height: 200 }}
      >
        <View  >
          <Title color={'#fff'}>Trending</Title>
          <Input
            placeholder='Search'
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </ImageBackground>

      {query.isLoading ? (
        <Title>Loading ..</Title>
      ) : !query.data?.length ? (
        <Title>Not Found!</Title>
      ) : (
        <View style={{  width: '100%' , flex:1 }}>

        <FlatList
          data={query.data}
          // renderItem={({ item }) => <MovieCard movie={item} from='index' />}
          renderItem={({ item }) => <GridItem movie={item} from='index'  sizes='sm'/>}
          keyExtractor={(item) => item.imdbID}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.container}
          
        />
        </View>
      )}
    </SafeAreaView>
   
  
    
  );
};

const styles = StyleSheet.create({
  container: {
  padding: 10,
 
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Index;
