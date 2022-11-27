import React, { useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, View, Image, TextInput, FlatList, Text } from 'react-native';

import Header from './Header';
import Course from './Course';

const data = [
    { title: 'Web Application Programming', faculty: 'Asaad Saad', code: 'CS472', rating: 4 },
    { title: 'Modern Web Application', faculty: 'Asaad Saad', code: 'CS572', rating: 5 },
    { title: 'Enterprise Architecture', faculty: 'Joe Bruen', code: 'CS557', rating: 4 },
    { title: 'Algorithms', faculty: 'Clyde Ruby', code: 'CS421', rating: 5 },
    { title: 'Object Oriented JavaScript', faculty: 'Keith Levi', code: 'CS372', rating: 3 },
    { title: 'Big Data', faculty: 'Prem Nair', code: 'CS371', rating: 5 },
    { title: 'Web Application Architecture', faculty: 'Rakesh Shrestha', code: 'CS377', rating: 5 },
    { title: 'Big Data Analytics', faculty: 'Mrudula Mukadam', code: 'CS378', rating: 5 },
];

export default function CoursesList() {
    const [info , setInfo] = useState(data);
    const [search, setSearch] = useState('');
      
     function handleSearch(text){
        if(text){
            const res = info.filter((cs) => cs.title.toUpperCase().includes(search.toUpperCase()))
            setSearch(text)
            setInfo(res)
        }
        else{
            setInfo(data);
            setSearch(text);
        }
        
     }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                paddingTop: Platform.OS === 'android' ? 30 : 0,
                paddingBottom: 200
            }}>
            <View>
                <Header />
<TextInput style={styles.input} value={search} onChangeText={handleSearch} placeholder="Live Search"/>
            <FlatList 
            data={info}
            renderItem= {({ item }) => <Course data={item} />}
            keyExtractor ={ (item, index) => index}
            />
            </View >
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5',
    },
});
