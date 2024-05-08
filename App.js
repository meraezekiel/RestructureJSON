import { View, Text , ScrollView} from 'react-native'
import React from 'react'

export default function App() {

    const sampleData = [
        {
          id: 1,
          name: "John Doe",
          status: 1
        },
        {
          id: 2,
          name: "Jane Doe",
          status: 2
        },
        {
          id: 3,
          name: "Adam Rocket",
          status: 2
        },
        {
          id: 4,
          name: "Luis Rocket",
          status: 1
        }
    ]

    const restructureJson = (data) =>{
        return data && data.reduce((acc, item) => {
            const key = `status-${item?.status}`
            if(!acc[key]){
                acc[key] = []
            }

            acc[key].push(item)
            return acc
        },{})
    }

    
    const resData = restructureJson(sampleData)

    console.log("restructure data ---------",resData)
    

  return (
    <View
        style={{
            flex:1,
            backgroundColor:'#fff'
        }}
    >
        <Text 
            style={{
                color:'black'
            }}
        >Using the initial data below create a function that will achieve the expected result data show it to console:</Text>
    </View>
  )
}