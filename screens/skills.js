import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import Modifier from './component/modifier';

export default function Skills({ navigation }) {
  const db = SQLite.openDatabase('dnd.db');
  const [character, setCharacter] = useState([])
  

  const getChar = () => {
    db.transaction(tx => {
      tx.executeSql('select dex, intel, strenght, wisdom, const, charisma from character where id=?;',
      [navigation.getParam('character')], (_, { rows }) =>{
        setCharacter(rows._array)
      });
    });
  }

  useEffect(() => { 
    getChar()
  }, []);
  

  return (
    <View style={styles.container}>
     {
       character.map((item, key) => (
    <View style={styles.container} key={key}>
     <View style={styles.row1}>
      <View style={styles.w25}>
        <Text style={styles.text}>Acrobatics</Text>
        <Text>{Modifier(item.dex)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Animal Handling</Text>
        <Text>{Modifier(item.wisdom)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Arcana</Text>
        <Text>{Modifier(item.intel)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Athletics</Text>
        <Text>{Modifier(item.strenght)}</Text>
      </View>
     </View>
     <View style={styles.row1}>
      <View style={styles.w25}>
        <Text style={styles.text}>Deception</Text>
        <Text>{Modifier(item.charisma)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>History</Text>
        <Text>{Modifier(item.intel)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Insight</Text>
        <Text>{Modifier(item.wisdom)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Intimidation</Text>
        <Text>{Modifier(item.charisma)}</Text>
      </View>
     </View>
     <View style={styles.row1}>
      <View style={styles.w25}>
        <Text style={styles.text}>Investigation</Text>
        <Text>{Modifier(item.intel)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Medicine</Text>
        <Text>{Modifier(item.wisdom)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Nature</Text>
        <Text>{Modifier(item.intel)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Perception</Text>
        <Text>{Modifier(item.wisdom)}</Text>
      </View>
     </View>
     <View style={styles.row1}>
      <View style={styles.w25}>
        <Text style={styles.text}>Performance</Text>
        <Text>{Modifier(item.charisma)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Persuasion</Text>
        <Text>{Modifier(item.charisma)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Religion</Text>
        <Text>{Modifier(item.intel)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Sleight of Hand</Text>
        <Text>{Modifier(item.dex)}</Text>
      </View>
     </View>
     <View style={styles.row1}>
      <View style={styles.w25}>
        <Text style={styles.text}>Stealth</Text>
        <Text>{Modifier(item.dex)}</Text>
      </View>
      <View style={styles.w25}>
        <Text style={styles.text}>Survival</Text>
        <Text>{Modifier(item.wisdom)}</Text>
      </View>
     </View>
    </View>
       ))
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  row1: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
    margin: 25,
  },
  w25: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '25%'
  },
  text: {
    fontWeight: 'bold',
    marginTop: 1
  },
});