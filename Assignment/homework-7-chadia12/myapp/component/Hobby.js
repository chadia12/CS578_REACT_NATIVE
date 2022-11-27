import { useState } from "react"
import { ScrollView,Text, View } from "react-native";
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function Hobby(){
    const arr = [{title:"Swimming", name:"swim"},
     {title: "Travel", name:"wallet-travel"}, 
     {title:"Reading", name:"read"},
     {title: "Music", name: "music"}];

    const [data, setData] = useState(arr);
    return(
        <View>
            <ScrollView>
                {data.map((item ,index) => 
                <Text key={index}>{item.title} <MaterialCommunityIcons name={item.name} color={"green"} size={26}/></Text>)}
            </ScrollView>

        </View>
    )
}