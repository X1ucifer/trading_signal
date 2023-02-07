import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  StyleSheet
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { LinearGradient } from 'expo-linear-gradient';



const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  //when ui loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  //when component loads

  return (
    // <SafeAreaView className="bg-white pt-5 ">
    <LinearGradient
      colors={['#684A3F', '#0B0100']}
      start={[1, 0]}
      end={[1, 1]}
      style={styles.container}
    >
    </LinearGradient>
  );



  // </SafeAreaView>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});


export default HomeScreen;
