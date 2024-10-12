import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from 'expo-router';
import ForgotPasswordScreen from '@/Screens/Forgotpass'

import ForgotScreen from '@/Screens/Forgotpass';
type LoginScreenNavigationProp = NativeStackNavigationProp<  RootStackParamList,  'loginApp'>;
type props={
  navigation:LoginScreenNavigationProp
}
const loginApp: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  console.log("from login app")
  return (
    <View style={styles.container}>
 
        <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/t/2/assets/logo.png' }} style={styles.logo} />

      
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="username@gmail.com"
        placeholderTextColor="#999"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity style={styles.eyeIcon}>
          <Text><i className="fa-sharp fa-light fa-eye"></i></Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPassword} >
        <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('forgot')}
      />
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerLink}>Register</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode:'contain'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitle: {
    color: '#1a1a1a',
  },
  loginText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  passwordContainer: {
    position: 'relative',
    width: 300,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 30,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#666',
  },
  loginButton: {
    width: 300,
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  orText: {
    color: '#666',
    marginBottom: 10,
  },
  gmailLogo: {
    width: 50,
    height: 50,
  },
  registerContainer: {
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: 'gray',
  },
  registerLink: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default loginApp;
export type RootStackParamList={
  loginApp:undefined
  forgot:undefined
  
}