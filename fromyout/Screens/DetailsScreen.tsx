import * as React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


// Typing props for DetailsScreen using NativeStackScreenProps
type DetailsScreenProps = NativeStackScreenProps<RootStackParamList , 'Details'>;

type props={
  navigation:DetailsScreenProps;
}

function DetailsScreen({ navigation }: DetailsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen same screen r different screen </Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
     
      <Button 
        title="Go to newpage... again"
        onPress={() => navigation.navigate('Logindo')}
      />
     
     

    </View>
  );
}
const styles =StyleSheet.create({
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})


export default DetailsScreen;
export  type RootStackParamList={
  Home:undefined
  Details:undefined
  Logindo:undefined
}