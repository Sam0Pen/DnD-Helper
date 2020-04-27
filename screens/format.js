import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Picker, Button, Alert} from 'react-native';
import * as SQLite from 'expo-sqlite';


export default function Format({navigation}) {
  
  const db  = SQLite.openDatabase('dnd.db');
  const [nameValue, setName] = useState('');
  const [raceValue, setRace] = useState('dragonborn');
  const [classValue, setClass] = useState('barbarian');
  const [originValue, setOrigin] = useState('acolyte');
  const [healthValue, setHealth] = useState('0');
  const [speedValue, setSpeed] = useState('0');
  const [armorValue, setArmor] = useState('0');
  const [bonusValue, setBonus] = useState('2');
  const [strenghtValue, setStrenght] = useState('0');
  const [dexValue, setDex] = useState('0');
  const [constValue, setConst] = useState('0');
  const [intelValue, setIntel] = useState('0');
  const [wisValue, setWis] = useState('0');
  const [charisValue, setCharis] = useState('0');


  const saveChar = () => {
    db.transaction(tx => {
      tx.executeSql('insert into character (name, race, class, origin, hp, speed, ac, bonus, strenght, dex, const, intel, wisdom, charisma) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', 
      [nameValue, raceValue, classValue, originValue, parseInt(healthValue), parseInt(speedValue), parseInt(armorValue), parseInt(bonusValue), parseInt(strenghtValue), parseInt(dexValue), parseInt(constValue), parseInt(intelValue), parseInt(wisValue), parseInt(charisValue)],
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
            <TextInput onChangeText={nameValue => setName(nameValue)} value={nameValue} style={styles.textinput} placeholder='your character name'/>
        </View>
        <View style={styles.row}>
            <View style={styles.w100}>
                <Text style={styles.text}>Race</Text>
                <Picker
                style={styles.picker}
                selectedValue={raceValue}
                onValueChange={(itemValue) =>
                    setRace(itemValue)}
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
                selectedValue={classValue}
                onValueChange={(itemValue) =>
                    setClass(itemValue)}
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
                selectedValue={originValue}
                onValueChange={(itemValue) =>
                    setOrigin(itemValue)}
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