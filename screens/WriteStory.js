import React from "react";
import { render } from "react-dom";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import {Header} from 'react-native-elements';

export default class WriteStory extends React.Component {
    constructor()
    {
      this.state={
        title:"",
        author:"",
        story:"",
      }
      render(); {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
              text: 'Stories', 
              style: { color: '#fff', fontSize: 20 },
            }}
          />
          <View>
          <KeyboardAvoidingView behavior="padding" enabled>
              <TextInput             
              placeholder="Author"
              onChangeText={text => {
                this.setState({
                  author: text
                });
              }}
              ></TextInput>
  
              <TextInput             
              placeholder="Title"
              onChangeText={text => {
                this.setState({
                  title: text
                });
              }}
              ></TextInput>
  
              <TextInput             
              placeholder="Story"
              multiline = {true}
              onChangeText={text => {
                this.setState({
                  story: text
                });
              }}
              ></TextInput>
              </KeyboardAvoidingView>
              </View>
              <TouchableOpacity>
              style = {styles.submitButton}
              onPress={this.submitStory}
              <Text style = {styles.submitText}>Submit</Text>
              </TouchableOpacity>
          </View>
        );
      }
    }
 styles = StyleSheet.create({
      submitButton:{      
      backgroundColor: "#FBC02D",
      width: 100,
      height: 50
      },
      
      submitText:{      
      padding: 10,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "white"
      }
    })}