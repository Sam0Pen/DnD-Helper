import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';
import * as SQLite from 'expo-sqlite';


export default function Edit({navigation}) {
  
  const db  = SQLite.openDatabase('dnd.db');
  const [char, setChar] = useState({
    nameValue: navigation.getParam('name').toString(),
    healthValue: navigation.getParam('hp').toString(),
    speedValue: navigation.getParam('speed').toString(), 
    armorValue: navigation.getParam('ac').toString(),
    bonusValue: navigation.getParam('bonus').toString(),
    strenghtValue:  navigation.getParam('strenght').toString(),
    dexValue: navigation.getParam('dex').toString(),
    constValue: navigation.getParam('const').toString(),
    intelValue: navigation.getParam('intel').toString(),
    wisValue: navigation.getParam('wisdom').toString(),
    charisValue: navigation.getParam('charisma').toString()
  })

  const updateChar = () => {
    db.transaction(tx => {
      tx.executeSql('Update character set name=?, hp=?, speed=?, ac=?, bonus=?, strenght=?, dex=?, const=?, intel=?, wisdom=?, charisma=? where id=?;', 
      [char.nameValue, parseInt(char.healthValue), parseInt(char.speedValue), parseInt(char.armorValue), parseInt(char.bonusValue), parseInt(char.strenghtValue), parseInt(char.dexValue), parseInt(char.constValue), parseInt(char.intelValue), parseInt(char.wisValue), parseInt(char.charisValue), navigation.getParam('id')],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert('Success');
          navigation.goBack();
        } else{
          alert('failed');
        }
      });
    });
    
  }


  return (
    <View style={styles.container}>
        <View style={styles.w100}>
            <Text style={styles.text}>Character Name</Text>
            <TextInput onChangeText={nameValue => setChar(old => ({ ...old, nameValue}))} value={char.nameValue} style={styles.textinput}/>
        </View>
        <View style={styles.row}>
          <View style={styles.w25}>
          <Text style={styles.text}>Health</Text>
          <TextInput keyboardType='numeric' onChangeText={healthValue => setChar(old => ({ ...old, healthValue}))} value={char.healthValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w25}>
          <Text style={styles.text}>Speed</Text>
          <TextInput keyboardType='numeric' onChangeText={speedValue => setChar(old => ({ ...old, speedValue}))} value={char.speedValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w25}>
          <Text style={styles.text}>Armor Class</Text>
          <TextInput keyboardType='numeric' onChangeText={armorValue => setChar(old => ({ ...old, armorValue}))} value={char.armorValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w25}>
          <Text style={styles.text}>Prof Bonus</Text>
          <TextInput keyboardType='numeric' onChangeText={bonusValue => setChar(old => ({ ...old, bonusValue}))} value={char.bonusValue}  style={styles.textinput25}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.w33}>
          <Text style={styles.text}>Strength</Text>
          <TextInput keyboardType='numeric' onChangeText={strenghtValue => setChar(old => ({ ...old, strenghtValue}))}  value={char.strenghtValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w33}>
          <Text style={styles.text}>Dexterity</Text>
          <TextInput keyboardType='numeric' onChangeText={dexValue => setChar(old => ({ ...old, dexValue}))}  value={char.dexValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w33}>
          <Text style={styles.text}>Constitution</Text>
          <TextInput keyboardType='numeric' onChangeText={constValue => setChar(old => ({ ...old, constValue}))} value={char.constValue} style={styles.textinput25}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.w33}>
          <Text style={styles.text}>Intelligence</Text>
          <TextInput keyboardType='numeric' onChangeText={intelValue => setChar(old => ({ ...old, intelValue}))} value={char.intelValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w33}>
          <Text style={styles.text}>Wisdom</Text>
          <TextInput keyboardType='numeric' onChangeText={wisValue => setChar(old => ({ ...old, wisValue}))} value={char.wisValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w33}>
          <Text style={styles.text}>Charisma</Text>
          <TextInput keyboardType='numeric'  onChangeText={charisValue => setChar(old => ({ ...old, charisValue}))} value={char.charisValue} style={styles.textinput25}/>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.w50} onPress={updateChar} title='Update' />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%', 
  },
  w50: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '50%'
  },
  w25: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '25%'
  },
  w33: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '33%'
  },
  w100: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%'
  },
  row: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 5
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
    width: '90%',
  },
  textinput: {
      width: 150,
      textAlign: 'center',
      borderBottomColor: '#080808',
      borderBottomWidth: 1
  },
  textinput25: {
    width: 50,
    textAlign: 'center',
    borderBottomColor: '#080808',
    borderBottomWidth: 1
},
  text: {
    fontWeight: 'bold',
    marginTop: 10
  }
});