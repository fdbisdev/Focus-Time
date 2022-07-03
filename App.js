import React, { useState } from 'react';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer'
import { 
  StyleSheet, 
  SafeAreaView, 
  Platform, 
  StatusBar 
} from 'react-native';
import { colors } from './src/utils/colors';

const App = () => {
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
          <Focus addSubject={setCurrentSubject}/> 
        ) : (
         <Timer 
            focusSubject={currentSubject}
            onTimerEnd={() => {}}
            clearSubject={() => setCurrentSubject(null)}
         />
        )}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  },
  text: {
    color: colors.white,
  }
});
