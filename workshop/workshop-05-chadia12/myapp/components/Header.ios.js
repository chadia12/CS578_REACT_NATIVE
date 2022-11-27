import React from 'react';
import { Text, View, Image } from 'react-native';

import HeaderStyle from '../styles/HeaderStyle';
import CourseImage from '../images/course.png';

const Header = () => {
  return (
    
      <View style={{alignItems:"center", marginTop:8}}>
<Image source={CourseImage} style={{width:100, height:100}}/>
<Text style={HeaderStyle.ios}> Courses Overview
  </Text> 
</View>
   
     
  )
};

export default Header;
