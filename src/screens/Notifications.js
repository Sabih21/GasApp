import { View, Text, StyleSheet, FlatList, data } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from "react-native";

const Notifications = () => {
const [notification,setNotification]=useState([
    {name: 'Khan', id: '1'},
    {name: 'Ishaq', id: '2'},
    {name: 'Shamsi', id: '3'},
    {name: 'Waleed', id: '4'},
    {name: 'Raja', id: '5'},
    {name: 'Khurram', id: '6'},
    {name: 'Moiz', id: '7'},
    {name: 'Talha', id: '8'},
]);

const { width, height } = Dimensions.get("window");

  return (
    <View style={{
        height: height,
          width: width,
      }}>
    <View style={{
        backgroundColor: "black",
        flex: 1
    }}>
        <View style={{
            backgroundColor: "orange",
            height: "23%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                //marginTop:25,
                width: "100%"
            }}>
                <View style={{ width: "100%" }}>
                    <Text style={{
                        fontSize: 28,
                        color: "black",
                        fontWeight: "bold",
                        marginTop: 80,
                    }}>Notifications</Text>

                </View>
            </View>
            </View>
            <FlatList
            keyExtractor={(item) => item.id}
            data={notification}
            renderItem={({item}) => (
                <Text style={{
                    marginTop:20,
                    padding:40,
                    backgroundColor:'lightgray',
                    fontSize:20
                }}>{item.name}</Text>
            )}
            />
</View>
            </View>
  )
}

export default Notifications