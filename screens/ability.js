import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import Modifier from './component/modifier';

export default function AbilityScores({ navigation }) {
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
      <View style={styles.w50}>
        <Text style={styles.text}>Constitute</Text>
        <View style={styles.row}>
          <Text style={styles.armor}>{item.const}</Text>
          <Text>{Modifier(item.const)}</Text>
        </View>
      </View>
      <View style={styles.w50}>
        <Text style={styles.text}>Strenght</Text>
        <View style={styles.row}>
          <Text style={styles.armor}>{item.strenght}</Text>
          <Text>{Modifier(item.strenght)}</Text>
        </View>
      </View>
     </View>
     <View style={styles.row1}>
      <View style={styles.w50}>
        <Text style={styles.text}>Dexterity</Text>
        <View style={styles.row}>
          <Text style={styles.armor}>{item.dex}</Text>
          <Text>{Modifier(item.dex)}</Text>
        </View>
      </View>
      <View style={styles.w50}>
        <Text style={styles.text}>Wisdom</Text>
        <View style={styles.row}>
          <Text style={styles.armor}>{item.wisdom}</Text>
          <Text>{Modifier(item.wisdom)}</Text>
        </View>
      </View>
     </View>
     <View style={styles.row1}>
      <View style={styles.w50}>
        <Text style={styles.text}>Intelligence</Text>
        <View style={styles.row}>
          <Text style={styles.armor}>{item.intel}</Text>
          <Text>{Modifier(item.intel)}</Text>
        </View>
      </View>
      <View style={styles.w50}>
        <Text style={styles.text}>Charisma</Text>
        <View style={styles.row}>
          <Text style={styles.armor}>{item.charisma}</Text>
          <Text>{Modifier(item.charisma)}</Text>
        </View>
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
  row: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around'
  },
  row1: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
    margin: 40,
  },
  w50: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '50%'
  },
  armor: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 25
  },
  text: {
    fontWeight: 'bold',
    marginTop: 1
  },
});