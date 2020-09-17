import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory' ;
import ReadStory from './screens/ReadStory' ;

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadStory},
  Write: {screen: WriteStory},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Read"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/Write.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
})