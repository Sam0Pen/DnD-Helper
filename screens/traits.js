import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { TextInput, FlatList } from 'react-native-gesture-handler';

export default function Traits({navigation}) {
  const [stuff, setStuff] = useState('');
  const [stuffs, setStuffs] = useState([]);
  const db = SQLite.openDatabase('dnd.db');
  const charId = navigation.getParam('character');

  useEffect(() =>{updateList()}, []);

  const updateList= () =>{
    db.  transaction(tx => {
      tx .executeSql('select id, trait from traits where characterid = ?;',
      [parseInt(charId)], (_, { rows}) => {
      setStuffs(rows._array)
      }); 
    });
  }
  
  const saveItem = () => {
    db.transaction(tx => {
      tx.executeSql('insert into traits (trait, characterid) values (?, ?);',
      [stuff, parseInt(charId)]);
    }, null, updateList
    )
  }
  const deleteItem = (id) => {
    db.transaction(
      tx => { tx.executeSql('delete from traits where id = ?;',
      [id]);
    }, null, updateList
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Traits</Text>
      <View style={styles.w100}>
        <TextInput style={styles.textinput} placeholder='Special Traits' onChangeText={stuff => setStuff(stuff)} value={stuff} />
      </View>
      <View style={styles.buttons}>
        <Button onPress={saveItem} title='Add' />
      </View>
      <View style={styles.flatlist}>
      <FlatList style={{marginLeft: "5%"}}
      keyExtractor = { item => item.id.toString() }
      renderItem = {({ item })  =>
      <View style={styles.row}>
        <Text style={styles.items} >{item.trait} </Text>
        <Text style={styles.delete} onPress={()  =>  deleteItem(item.id)  } >Delete</Text>
      </View>}
      data={stuffs}/>
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
  w100: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%'
  },
  flatlist: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },
  text: {
    fontWeight: 'bold',
    marginTop: 10
  },
  row: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '95%',
    flexDirection: 'row',
    padding: 5,
    marginTop: 2
  },
  delete: {
    color: '#d9071f',
    fontSize: 12
  },
  items: {
    borderBottomColor: '#080808',
    borderBottomWidth: 1
  },
  textinput: {
    width: '100%',
    textAlign: 'center',
    borderBottomColor: '#080808',
    borderBottomWidth: 1
  },
  buttons: {
    justifyContent: 'center',
    padding: 5,
    width: '25%',
  }

});