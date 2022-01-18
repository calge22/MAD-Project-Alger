import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TextInput } from 'react-native';
import Constants from 'expo-constants';
import FileSystem from 'expo';
import {useState, useEffect} from 'react';
import axios from 'axios';
//
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [response, setResponse] = useState({});
  const [queryText, setQueryText] = useState("Taylor Swift")
  const [inputText, setInputText] = useState("")
  const [data, setData] = useState([]);

//This is where I call the api, with queryText in place for where the artist would be.
  useEffect( () => {
    const getMusic = async () => {
      await axios.get(`https://api.genius.com/search?q=${queryText}&access_token=wpF2ZUx9Y7GGe2hlaQwIrBwMNAUltoYgvjFkJA8EuiDE17EOVAdkzaRI_peAaQv8`)
        .then( (r) => { 
          setResponse( r.data );
          setData(r.data.response.hits);
        })
        .catch( (e) => {
          console.log(`error ${e}`);
        });
    };
    getMusic();
  },[queryText]);

  //Card cover converts the url into an image at the top of the card. Title and content is text from the api
  const renderRow = ({item}) => {
    console.log(item);
    return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.result.header_image_url }}/>
        <Card.Title title={item.result.full_title} subtitle={item.result.artist_names}/>
        <Card.Content>
          <Text style={styles.link}>{item.result.url}</Text>
        </Card.Content>
      </Card>
    )    
  }
  //This returns all the data and makes sure it changes when the queryText changes
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={item=>item[0]}
        ListHeaderComponent={<View> 
          <Text style={styles.title}>The Music Box</Text> 
             <TextInput style={styles.searchBox}
              value={queryText}
              onChangeText={setQueryText}
        /></View>}
      />
    </View>
  );
}
// https://reactnative.dev/docs/flexbox
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
//Here is where all the styling for the background, colors, and text for the cards and search box happens.
const styles = StyleSheet.create({
  title: {
    height: 30,
    borderWidth: 2,
    margin: 4,
    padding: 2,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 5,
    borderColor: 'thistle',
    backgroundColor: 'rebeccapurple',
  },
  searchBox: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rebeccapurple',
    borderColor: 'white',
    backgroundColor: 'thistle'
  },  
  dataView: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    fontWeight: 'bold',
  },
  card: {
    margin: 2,
    backgroundColor: 'thistle',
  },
  link: {
    color: 'rebeccapurple'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rebeccapurple',
    padding: 8, 
  },
});
