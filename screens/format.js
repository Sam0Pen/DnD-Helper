import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Picker, Button, Alert} from 'react-native';
import * as SQLite from 'expo-sqlite';


export default function Format({navigation}) {
  
  const db  = SQLite.openDatabase('dnd.db');
  const [char, setChar] = useState({
    nameValue: '',
    raceValue: 'dragonborn',
    classValue: 'barbarian', 
    originValue: 'acolyte',
    healthValue: '0',
    speedValue: '0', 
    armorValue: '0',
    bonusValue: '2',
    strenghtValue: '0',
    dexValue: '0',
    constValue: '0',
    intelValue: '0',
    wisValue: '0',
    charisValue: '0'
  })


  const saveChar = () => {
    db.transaction(tx => {
      tx.executeSql('insert into character (name, race, class, origin, hp, speed, ac, bonus, strenght, dex, const, intel, wisdom, charisma) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', 
      [char.nameValue, char.raceValue, char.classValue, char.originValue, parseInt(char.healthValue), parseInt(char.speedValue), parseInt(char.armorValue), parseInt(char.bonusValue), parseInt(char.strenghtValue), parseInt(char.dexValue), parseInt(char.constValue), parseInt(char.intelValue), parseInt(char.wisValue), parseInt(char.charisValue)],
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
            <TextInput onChangeText={nameValue => setChar(old => ({ ...old, nameValue}))} value={char.nameValue} style={styles.textinput} placeholder='your character name'/>
        </View>
        <View style={styles.row}>
            <View style={styles.w100}>
                <Text style={styles.text}>Race</Text>
                <Picker
                style={styles.picker}
                selectedValue={char.raceValue}
                onValueChange={(raceValue) =>
                    setChar(old => ({ ...old, raceValue}))}
                    >
                      <Picker.Item label='Dragonborn' value='dragonborn' />
                      <Picker.Item label='Dwarf' value='dwarf' />
                      <Picker.Item label='Elf' value='elf' />
                      <Picker.Item label='Gnome' value='gnome' />
                      <Picker.Item label='Half-Elf' value='half-elf' />
                      <Picker.Item label='Halfling' value='halfling' />
                      <Picker.Item label='Half-Orc' value='half-orc' />
                      <Picker.Item label='Human' value='human' />
                      <Picker.Item label='Thiefling' value='thefling' />
                </Picker>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.w50}>
                <Text style={styles.text}>Class</Text>
                <Picker
                style={styles.picker}
                selectedValue={char.classValue}
                onValueChange={(classValue) =>
                  setChar(old => ({ ...old, classValue}))}
                    >
                        <Picker.Item label='Barbarian' value='barbarian' />
                        <Picker.Item label='Bard' value='bard' />
                        <Picker.Item label='Cleric' value='cleric' />
                        <Picker.Item label='Druid' value='druid' />
                        <Picker.Item label='Fighter' value='fighter' />
                        <Picker.Item label='Monk' value='monk' />
                        <Picker.Item label='Paladin' value='paladin' />
                        <Picker.Item label='Ranger' value='ranger' />
                        <Picker.Item label='Rogue' value='rogue' />
                        <Picker.Item label='Sorcerer' value='sorcerer' />
                        <Picker.Item label='Warlock' value='warlock' />
                        <Picker.Item label='Wizard' value='wizard' />
                </Picker>
            </View>
            <View style={styles.w50}>
                <Text style={styles.text}>Origin</Text>
                <Picker
                style={styles.picker}
                selectedValue={char.originValue}
                onValueChange={(originValue) =>
                  setChar(old => ({ ...old, originValue}))}
                    >
                        <Picker.Item label='Acolyte' value='acolyte' />
                        <Picker.Item label='Charlatan' value='charlatan' />
                        <Picker.Item label='Criminal' value='criminal' />
                        <Picker.Item label='Entertainer' value='entertainer' />
                        <Picker.Item label='Folk Hero' value='folk hero' />
                        <Picker.Item label='Guild Artisan' value='guild artisan' />
                        <Picker.Item label='Hermit' value='hermit' />
                        <Picker.Item label='Noble' value='noble' />
                        <Picker.Item label='Outlander' value='outlander' />
                        <Picker.Item label='Sage' value='sage' />
                        <Picker.Item label='Sailor' value='sailor' />
                        <Picker.Item label='Soldier' value='soldier' />
                        <Picker.Item label='Urchin' value='urchin' />
                </Picker>
            </View>
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
          <TextInput keyboardType='numeric' onChangeText={bonusValue => setChar(old => ({ ...old, bonusValue}))} value={char.bonusValue} style={styles.textinput25}/>
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
          <TextInput keyboardType='numeric' onChangeText={charisValue => setChar(old => ({ ...old, charisValue}))} value={char.charisValue} style={styles.textinput25}/>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.w50} onPress={saveChar} title='Save' />
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
  },
  picker: {
    width: 150,
    height: 60,
    borderWidth: 1,
    borderColor: '#080808'
  }
});