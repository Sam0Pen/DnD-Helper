import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';
import * as SQLite from 'expo-sqlite';


export default function Edit({navigation}) {
  
  const db  = SQLite.openDatabase('dnd.db');
  const [nameValue, setName] = useState(navigation.getParam('name'));
  const [healthValue, setHealth] = useState(navigation.getParam('hp').toString());
  const [speedValue, setSpeed] = useState(navigation.getParam('speed').toString());
  const [armorValue, setArmor] = useState(navigation.getParam('ac').toString());
  const [bonusValue, setBonus] = useState(navigation.getParam('bonus').toString());
  const [strenghtValue, setStrenght] = useState(navigation.getParam('strenght').toString());
  const [dexValue, setDex] = useState(navigation.getParam('dex').toString());
  const [constValue, setConst] = useState(navigation.getParam('const').toString());
  const [intelValue, setIntel] = useState(navigation.getParam('intel').toString());
  const [wisValue, setWis] = useState(navigation.getParam('wisdom').toString());
  const [charisValue, setCharis] = useState(navigation.getParam('charisma').toString());


  const updateChar = () => {
    db.transaction(tx => {
      tx.executeSql('Update character set name=?, hp=?, speed=?, ac=?, bonus=?, strenght=?, dex=?, const=?, intel=?, wisdom=?, charisma=? where id=?;', 
      [nameValue, parseInt(healthValue), parseInt(speedValue), parseInt(armorValue), parseInt(bonusValue), parseInt(strenghtValue), parseInt(dexValue), parseInt(constValue), parseInt(intelValue), parseInt(wisValue), parseInt(charisValue), navigation.getParam('id')],
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
            <TextInput onChangeText={nameValue => setName(nameValue)} value={nameValue} style={styles.textinput}/>
        </View>
        <View style={styles.row}>
          <View style={styles.w25}>
          <Text style={styles.text}>Health</Text>
          <TextInput keyboardType='numeric' onChangeText={healthValue => setHealth(healthValue)} value={healthValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w25}>
          <Text style={styles.text}>Speed</Text>
          <TextInput keyboardType='numeric' onChangeText={speedValue => setSpeed(speedValue)} value={speedValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w25}>
          <Text style={styles.text}>Armor Class</Text>
          <TextInput keyboardType='numeric' onChangeText={armorValue => setArmor(armorValue)} value={armorValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w25}>
          <Text style={styles.text}>Prof Bonus</Text>
          <TextInput keyboardType='numeric' onChangeText={bonusValue => setBonus(bonusValue)} value={bonusValue} style={styles.textinput25}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.w33}>
          <Text style={styles.text}>Strength</Text>
          <TextInput keyboardType='numeric' onChangeText={strenghtValue => setStrenght(strenghtValue)} value={strenghtValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w33}>
          <Text style={styles.text}>Dexterity</Text>
          <TextInput keyboardType='numeric' onChangeText={dexValue=> setDex(dexValue)} value={dexValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w33}>
          <Text style={styles.text}>Constitution</Text>
          <TextInput keyboardType='numeric' onChangeText={constValue => setConst(constValue)} value={constValue} style={styles.textinput25}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.w33}>
          <Text style={styles.text}>Intelligence</Text>
          <TextInput keyboardType='numeric' onChangeText={intelValue => setIntel(intelValue)} value={intelValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w33}>
          <Text style={styles.text}>Wisdom</Text>
          <TextInput keyboardType='numeric' onChangeText={wisValue => setWis(wisValue)} value={wisValue} style={styles.textinput25}/>
          </View>
          <View style={styles.w33}>
          <Text style={styles.text}>Charisma</Text>
          <TextInput keyboardType='numeric' onChangeText={charisValue => setCharis(charisValue)} value={charisValue} style={styles.textinput25}/>
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