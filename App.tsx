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



// how is the animation actually played on the screen?
// 1. Computation = JS Thread; Animation by Native OS 
// 1a. Compute
// 1b. Serialize
// 1c. Transfer it over the bridge to host OS
// 1d. Deserialize
// 1e. Run the frame

// 2. Everything by Native OS
// 2a. Before your animation starts - serialize the whole animation thing
// 2b. Native OS deserialize the it
// 2c. Win!

// 1. No more over the bridge transfer
// 2. JS thread is now free for aother stuff
// 3. Smoother animations



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const leftValue = useState(new Animated.Value(0))[0];

  const moveBall = () => {
    Animated.timing(leftValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
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
              opacity: leftValue
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
