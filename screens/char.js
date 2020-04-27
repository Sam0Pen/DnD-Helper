import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function Char({navigation}) {
    
    const db  = SQLite.openDatabase('dnd.db');
    const [chara, setChara] = useState([]);

    const pressCreate= () =>{
      navigation.navigate('Format')
       
     }
      
    const getChar = () => {
        db.transaction(tx => {
          tx.executeSql('select * from character;', [], (_, { rows }) =>{
            setChara(rows._array)
          });
        });
      }
      const deleteItem= (id) => {
        db.transaction(tx =>  {
            tx.executeSql('delete from traits where characterid = ?;', [id]);
            tx.executeSql('delete from spells where characterid = ?;', [id]);
            tx.executeSql('delete from items where characterid = ?;', [id]);
            tx.executeSql('delete from equipments where characterid = ?;', [id]);
            tx.executeSql('delete from character where id = ?;', [id]);
        }, null, getChar
        )
    }
    
    useEffect(() => { getChar()}, []);

             
             

  return (
    <View style={styles.container}>
      <Text onPress={() => getChar()} style={styles.textupdate} >Update</Text>
      <Text style={styles.text}>Characters</Text>
      <FlatList style={{marginLeft: "5%"}}
      keyExtractor = { item => item.id.toString() }
      renderItem = {({ item })  =>
      <View style={styles.row}>
        <Text style={styles.edit} onPress={()  => navigation.navigate('Edit', item)} >Edit</Text>
        <Text style={styles.text2}>{item.name} </Text>
        <Text style={styles.delete} onPress={()  =>  deleteItem(item.id)  } >Delete</Text>
      </View>}
      data={chara}/>
      <View style={styles.buttons}>
          <Button title='Create' onPress={pressCreate} />
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
  row: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '95%',
    flexDirection: 'row',
    padding: 2,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 10
  },
  text2: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize:20
  },
  delete: {
    color: '#d9071f',
    fontSize: 20,
    marginTop: 10,
  },
  edit: {
    color: '#07d923',
    fontSize: 20,
    marginTop: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 2,
    width: '90%',
  },
  textupdate: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 300
  }
  
});