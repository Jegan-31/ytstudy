
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



type ForgotScreenProps = NativeStackScreenProps<RootStackParamList, 'Forgot'>;

function ForgotScreen({navigation}:ForgotScreenProps){
  return(

  <View style={styles.container}>
  <View style={styles.header}>
    <TouchableOpacity>
      <FontAwesome name="arrow-left" size={24} color="#1A1A1A" />
    </TouchableOpacity>
  </View>
  <View style={styles.logoContainer}>
  {/* <Image
          style={styles.logo}
          //className="w-full flex-1"
          source={require("C:/JewelsProj/Jewelsapp/assets/images/JCSLogo.png")}
        /> */}

  </View>
  <Text style={styles.title}>Forgot Password?</Text>
  <Text style={styles.subtitle}>
    Please enter your email below to receive your password reset instructions.
  </Text>
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="username@gmail.com"
      placeholderTextColor="#1A1A1A"
      keyboardType="email-address"
      autoCapitalize="none"
    />
    <FontAwesome name="check-circle" size={24} color="#1A1A1A" style={styles.icon} />
  </View>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Send Email</Text>
  </TouchableOpacity>
</View>
)}
// const ForgotPasswordScreen: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <FontAwesome name="arrow-left" size={24} color="#1A1A1A" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.logoContainer}>
//       <Image
//               style={styles.logo}
//               //className="w-full flex-1"
//               source={require("C:/JewelsProj/Jewelsapp/assets/images/JCSLogo.png")}
//             />

//       </View>
//       <Text style={styles.title}>Forgot Password?</Text>
//       <Text style={styles.subtitle}>
//         Please enter your email below to receive your password reset instructions.
//       </Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="username@gmail.com"
//           placeholderTextColor="#1A1A1A"
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <FontAwesome name="check-circle" size={24} color="#1A1A1A" style={styles.icon} />
//       </View>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Send Email</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9DB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: { 
    resizeMode: "contain",
     height:100,
      width:100
    },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  logoSubText: {
    fontSize: 18,
    color: '#1A1A1A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1A1A1A',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#1A1A1A',
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Forgot :undefined;
  loginApp :undefined
};
export default ForgotScreen