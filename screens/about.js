import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
        <View>
        <Text style={styles.text}>This is an aplication to help you play Dungeon and Dragons. 
    Please visit following link to get more info about the game.</Text>
    <Text style={styles.text2}
      onPress={() => Linking.openURL('https://online.anyflip.com/ofsj/cxmj/mobile/index.html')}>
         D&D Player's Handbook
    </Text>
        </View>
        <View style={styles.text1}>
        <Text style={styles.text}>App made by Sami Jaanu</Text>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    text: {
        margin: 40,
        textAlign: 'center'
    },
    text2: {
        color: 'blue',
        margin: 40,
        textAlign: 'center'
    },
    text1: {
        flex: 1,
        alignItems: 'flex-end',
    }
})