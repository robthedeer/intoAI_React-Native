import { StatusBar } from 'expo-status-bar';
import { Button,TouchableOpacity,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Plan My Day</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'top',
    justifyContent: 'center',
  },
});
