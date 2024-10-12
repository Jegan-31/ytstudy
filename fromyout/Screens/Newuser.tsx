import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button, Dimensions, TouchableHighlight, Linking, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type NewUserProps = NativeStackScreenProps<RootStackParamList, 'NewUser'>;

function NewUser({navigation}:NewUserProps){
    return(
        <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      <Button
        title="Click to go to DetailsScreen"
        onPress={() => navigation.navigate('loginApp')}
      />
      <View style={styles.logoContainer}>
      {/* <Image
              style={styles.logo}
              //className="w-full flex-1"
              source={require("C:/JewelsProj/Jewelsapp/assets/images/JCSLogo.png")}
            /> */}
      </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create your account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username / E-Mail*</Text>
          <TextInput style={styles.input} placeholder="Enter your Username" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password*</Text>
          <TextInput style={styles.input} placeholder="Enter your Password" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fullname*</Text>
          <TextInput style={styles.input} placeholder="Enter the Full Name" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth*</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number*</Text>
          <TextInput style={styles.input} placeholder="Enter your Mobile/Whatsapp  Number" />
        </View>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>CLEAR</Text>
          </TouchableOpacity>
        </View>
         
        <Text style={styles.disptext}>By clicking Create Account you agree to the </Text>
        <TouchableHighlight onPress={() => Linking.openURL('https://www.example.com')}>
        <Text style={styles.linkText}> Terms and Conditions </Text>
      </TouchableHighlight>
      </View>
      
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff9db',
      alignItems: 'center',
      justifyContent: 'center',
    },
    disptext:{
      fontSize:18,
      marginBottom:10,
      marginTop:10,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff9db',
    },
    menuIcon: {
      fontSize: 24,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    joinButton: {
      backgroundColor: '#1a2b49',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      marginRight: 8,
    },
    joinButtonText: {
      color: 'white',
    },
    addButton: {
      backgroundColor: '#f5b700',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
    },
    addButtonText: {
      color: 'black',
    },
    
    logo: { 
      resizeMode: "contain",
       height:200,
        width:100
      },
    formContainer: {
      width: '100%',
      maxWidth: 400,
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      marginBottom: 4,
    },
    input: {
      backgroundColor: '#fff9db',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
    },
    submitButton: {
      backgroundColor: '#1a2b49',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    submitButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    clearButton: {
      backgroundColor: '#f5b700',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    clearButtonText: {
      color: 'black',
      fontWeight: 'bold',
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    subtitle: {
      color: '#1a1a1a',
    },
    linkText: {
      color: 'blue',
      textDecorationLine: 'underline',
      fontSize:18,
    },
  });

  export default NewUser;

  export type RootStackParamList={
    NewUser:undefined
    Home:undefined
    loginApp:undefined
  }