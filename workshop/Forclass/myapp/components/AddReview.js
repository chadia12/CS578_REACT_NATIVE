import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';

const AddReview = () => {
  const [data, setData] = useState({name:'',rating:'', comment:'',submitting:false})
  function handleInput(text, data){
setData((prev)=> ({...prev, [data]:text}))
  }
  function ratingFinished(rating){
    setData((prev) => ({...prev, rating:rating}))
  }
  const navigation = useNavigation()
  
 function handleSubmit(){
  setData((prev) => ({...prev, submitting:true}))
  setTimeout( () => {
    setData((prev) => ({...prev, submitting:false}))
    return navigation.goBack();
  },1000)

 }


  return (
    <View style={styles.root}>
    <Text style={styles.addReview}>Add Review</Text>
    <TextInput style={styles.input} value={data.name} onChangeText={(text)=>handleInput(text, 'name')} />
    <Text style={styles.rating}>Your Rating</Text>
    <Rating 
    type='star'
    ratingCount={5}
    imageSize={40}
    startingValue={0}
    onFinishRating ={ratingFinished}/>

    
    <TextInput style={styles.input} multiline={true} numberOfLines = {5} value={data.comment} onChangeText={(text)=>handleInput(text, 'comment')}/>
   {data.submitting && <ActivityIndicator />} 
    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}> 
      <Text style={styles.submitButtonText}>Submit Review</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default AddReview;
