/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </>
  );
}

function AppContent() {
  const [isValid, setIsValid] = useState(true);

  return (
    <View style={styles.container}>
      <View style={isValid ? styles.valid : styles.invalid}>
        <Text>Hello</Text>
      </View>
      <Button title="Change validity" onPress={() => setIsValid(!isValid)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 12,
    padding: 16,
  },
  valid: {
    borderRadius: 1,
    overflow: 'hidden',
  },
  invalid: {
    borderRadius: 1,
    overflow: 'hidden',
    borderWidth: 1,
  },
});

export default App;
