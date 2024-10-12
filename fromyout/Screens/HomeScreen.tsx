import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Typing props for HomeScreen using NativeStackScreenProps
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainText}>Home Screen displayed here from index.tsx page </Text>
      <Button
        title="Click to go to DetailsScreen"
        onPress={() => navigation.navigate('Details')}
      />
      
      <View style={styles.header}>
        <FontAwesome name="bars" size={24} color="black" />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('C:/hellworld/ytstudy/fromyout/assets/images/JCSLogo.png')}
          />
          <Text style={styles.headerText}>
            Looking for gold and diamond jewellery? JCS has the best collection handcrafted jewellery.
          </Text>
        </View>
        <View style={styles.notificationContainer}>
          <FontAwesome name="bell" size={24} color="black" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>6</Text>
          </View>
        </View>
      </View>

      <Text style={styles.updateText}>Rate updated on 10:55 AM 27-Aug-2024</Text>

      <View style={styles.rateContainer}>
        <View style={styles.rateBox}>
          <FontAwesome name="pie-chart" size={24} color="#FFD700" />
          <Text style={styles.rateText}>₹ 6,694</Text>
          <Text style={styles.rateSubText}>22KT Per Gram</Text>
        </View>
        <View style={styles.rateBox}>
          <FontAwesome name="line-chart" size={24} color="#A9A9A9" />
          <Text style={styles.rateText}>₹ 93.50</Text>
          <Text style={styles.rateSubText}>Per Gram</Text>
        </View>
      </View>

      <View style={styles.gridContainer}>
        {['Join Scheme', 'My Scheme', 'Brochure', 'My Profile', 'Customer Care', 'Branches'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
            {/* <FontAwesome name={gridIcons[item]} size={24} color="white" /> */}
            <Text style={styles.gridText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.adContainer}>
        {/* <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/collections/JadauRings_1920x.jpg?v=1657794728' }} style={styles.adImage} /> */}
        <View style={styles.adTextContainer}>
          <Text style={styles.adSubText}>LATEST COLLECTION</Text>
          <Text style={styles.adTitle}>Wedding Rings</Text>
          <Text style={styles.adSubText}>at an unbelievable price</Text>
          <TouchableOpacity style={styles.adButton}>
            <Text style={styles.adButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const gridIcons = {
  'Join Scheme': 'random',
  'My Scheme': 'bandcamp',
  'Brochure': 'folder-o',
  'My Profile': 'user-md',
  'Customer Care': 'whatsapp',
  'Branches': 'building-o',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  mainText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    padding: 16,
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF0000',
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
  },
  updateText: {
    textAlign: 'center',
    color: '#4B5563',
    fontSize: 12,
    marginVertical: 8,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  rateBox: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: width * 0.4, // make it responsive to screen width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  rateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  rateSubText: {
    color: '#6B7280',
    fontSize: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#1E3A8A',
    width: width * 0.28, // make it responsive to screen width
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  gridText: {
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
  },
  adContainer: {
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16,
  },
  adImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  adTextContainer: {
    padding: 16,
    alignItems: 'center',
  },
  adSubText: {
    color: '#6B7280',
    fontSize: 12,
  },
  adTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  adButton: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  adButtonText: {
    color: 'white',
  },
});

export default HomeScreen;
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  NewUser:undefined

};
