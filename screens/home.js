import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function Home({ navigation }) {

  const db  = SQLite.openDatabase('dnd.db');
  const [chara, setChara] = useState([]);
  const [character, setCharacter] = useState('');
  const [onechar, setOnechar] =useState([]);
  const [health, setHealth] = useState('');
  const [armor, setArmor] = useState('');
  const [bonus, setBonus] = useState('');
  const [speed, setSpeed] = useState('');
  const [hpreset, setHpReset] =useState('');

  const pressAbility= () =>{
    navigation.navigate('AbilityScores', {character})
    
  }
  const pressSkills= () =>{
    navigation.navigate('Skills', {character})
    
  }
  const pressItems= () =>{
    navigation.navigate('Items', {character})
    
  }
  const pressStuff= () =>{
    navigation.navigate('Money', {character})
    
  }
  const pressSpells= () =>{
    navigation.navigate('Spells', {character})
    
  }
  const pressTraits= () =>{
    navigation.navigate('Traits', {character})
    
  }
  const getChar = () => {
    db.transaction(tx => {
      tx.executeSql('select * from character;', [], (_, { rows }) =>{
        setChara(rows._array)
      });
    });
  }
  
  const putValues = (e) => {
    setOnechar(e)
    setCharacter(e.id)
    setHealth(e.hp)
    setHpReset(e.hp)
    setArmor(e.ac)
    setBonus(e.bonus)
    setSpeed(e.speed)
  }
  
  const plusHealth = () => {
    let plus = parseInt(health) + 1;
    setHealth(plus)
  } 
  
  const minusHealth = () => {
    let minus = parseInt(health) - 1;
    setHealth(minus)
  }

  const resetHealth = () => {
    setHealth(hpreset)
  } 
  const createTables = () =>{
    db .transaction(tx  => {
      tx.executeSql('create table if not exists character(id integer primary key not null, name text, race text, class text, origin text, hp integer, speed integer, ac integer, bonus integer, strenght integer, dex integer, const integer, intel integer, wisdom integer, charisma integer);');
    })
    
    db.transaction(tx => {
      tx.executeSql('create table if not exists items (id integer primary key not null, item text, characterid integer);');
    })

    db.transaction(tx => {
      tx.executeSql('create table if not exists equipments (id integer primary key not null, equip text, characterid integer);');
    })

    db.transaction(tx => {
      tx.executeSql('create table if not exists spells (id integer primary key not null, spell text, characterid integer);');
    })

    db.transaction(tx => {
      tx.executeSql('create table if not exists traits (id integer primary key not null, trait text, characterid integer);');
    })
  

  }



  useEffect(() => { createTables()}, []);
  useEffect(() => { getChar()}, [] );
  

  return (
    <View style={styles.container}>
     <Text onPress={() => getChar()} style={styles.textupdate} >Update</Text>
      <View style={styles.w50}>
        <Text style={styles.text}>Character</Text>
          <Picker
            style={styles.picker}
            selectedValue={onechar}
            onValueChange={(itemValue) => putValues(itemValue)}
          >
            {chara.map(tg => {
              return (
                <Picker.Item key={tg.id} label={tg.name} value={tg} />)
              })}          
          </Picker>
      </View>
      <View style={styles.row}>
        <View style={styles.w33}>
          <Text style={styles.text}>Race</Text>
          <Text>{onechar.race}</Text>
       </View>
       <View style={styles.w33}>
          <Text style={styles.text}>Class</Text>
          <Text>{onechar.class}</Text>
       </View>
       <View style={styles.w33}>
          <Text style={styles.text}>Origin</Text>
          <Text>{onechar.origin}</Text>
       </View>
      </View>
      <View>
        <Text style={styles.text1}>Health</Text>
      </View>
      <View style={styles.w100}>
        <Button title= '+' onPress={plusHealth} style={styles.button}/>
      </View>
      <View style={styles.row}>
        <View style={styles.w33}>
          <Text style={styles.text}>Armor Class</Text>
          <View>
            <Text style={styles.armor}>{armor}</Text>
          </View>
        </View>
        <View style={styles.w33}>
            <View >
              <Text style={styles.hp}> {health} </Text>
            </View>
        </View>
        <View style={styles.w33}>
          <Text style={styles.text}>Profiency Bonus</Text>
          <View>
            <Text style={styles.armor}>+{bonus}</Text>
          </View>
        </View>
      </View>
      <View style={styles.w100}>
      <Button title= '-' onPress={minusHealth} />
      </View>
      <View style={{margin: 10}}>
        <Text>Speed is {speed}ft</Text>
      </View>
      <View style={styles.reset}>
        <Button title='Reset Health' onPress={resetHealth} color='#d9071f'/>
      </View>
      <View style={styles.buttons}>
      <Button title='Stats' onPress={pressAbility} color='#080808' />
      <Button title='Skills' onPress={pressSkills} color='#080808' />
      <Button title='Items' onPress={pressItems} color='#080808' />
      <Button title='Equip' onPress={pressStuff} color='#080808' />
      <Button title='Spells' onPress={pressSpells} color='#080808' />
      <Button title='Traits' onPress={pressTraits} color='#080808' />
   
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
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 1,
    marginRight: 37,
    marginBottom: 10,
    width: '90%',
  },
  w100: {
    backgroundColor: '#fff',
    width: '25%'
  },
  w50: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%'
  },
  picker: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#080808'
  },
  textupdate: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 300
  },
  text1: {
    fontWeight: 'bold',
    marginTop: 15
  },
  text: {
    fontWeight: 'bold',
    marginTop: 1
  },
  hp: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 50,
    width: '100%'
  },
  armor: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 25
  },
  row: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 5
  },
  w33: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '33%'
  },
  reset: {
    width: '20%',
    margin: 30
  },
  button: {
    width: '50%'
  }
});