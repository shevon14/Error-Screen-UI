import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

export default function App() {

  // Error Type 01
  return(
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCB82F'
      }}
    >
      <Image
        source={require('./src/assets/404.png')}
        style={{
          width: Dimensions.get('screen').width - 80,
          height: 320,
        }}
        resizeMode="contain"
      />
      <Text style={{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
      }}>
        {`Oops! You weren't\nsupposed to see this.`}
      </Text>
      <Text
        style={{
          color: '#000',
          fontWeight: '600',
          fontSize: 12,
          marginVertical: 10,
        }}
      >
        The page you were looking was loading incorrectly.
      </Text>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: '#000',
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginTop: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: '#FFF',
            fontWeight: '600',
            fontSize: 14,
          }}
        >GO BACK</Text>
      </TouchableOpacity>
    </View>
  )


  // Error Type 02
  // return(
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: '#E5E9E8'
  //     }}
  //   >
  //     <Image
  //       source={require('./src/assets/500.png')}
  //       style={{
  //         width: Dimensions.get('screen').width - 80,
  //         height: 320,
  //       }}
  //       resizeMode="contain"
  //     />
  //     <Text style={{
  //       color: '#000',
  //       fontWeight: 'bold',
  //       fontSize: 25,
  //       textAlign: 'center',
  //       marginTop: 15,
  //     }}>
  //       {`Sorry! It's not you. It's us.`}
  //     </Text>
  //     <Text
  //       style={{
  //         color: '#000',
  //         fontWeight: '600',
  //         fontSize: 14,
  //         marginVertical: 10,
  //       }}
  //     >
  //       We are expecting an internal server problem.
  //     </Text>
  //     <TouchableOpacity
  //       onPress={() => {}}
  //       style={{
  //         backgroundColor: '#000',
  //         paddingVertical: 10,
  //         paddingHorizontal: 20,
  //         marginTop: 10,
  //         borderRadius: 5,
  //       }}
  //     >
  //       <Text
  //         style={{
  //           color: '#FFF',
  //           fontWeight: '600',
  //           fontSize: 14,
  //         }}
  //       >TRY AGAIN</Text>
  //     </TouchableOpacity>
  //   </View>
  // )
}