/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Animated,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const leftValue = useState(new Animated.Value(0))[0];

  const moveBall = () => {
    Animated.spring(leftValue, {
      toValue: 300,
      //duration: 1000,
      useNativeDriver: false
    }).start();
  }
  return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Animated.View style={{
              backgroundColor: 'red', 
              borderRadius: 50,
              width: 100,
              height: 100,
              marginLeft: leftValue
          }}></Animated.View>
          <TouchableOpacity onPress={moveBall}><Text>Click ME.</Text></TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
