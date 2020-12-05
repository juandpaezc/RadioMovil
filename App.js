import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {


  console.log("App executed");
  return (


    <View style={styles.container}>
      <Text>Ingrese</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Longitud 1"
          style={styles.input}
        />
      </View>
      <Text>Ingrese</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Latitud 1   "
          style={styles.input}
        />
      </View>
      <Text>Ingrese</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Longitud 2"
          style={styles.input}
        />
      </View>
      <Text>Ingrese</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Latitud 2   "
          style={styles.input}
        />
      </View>
      <Button title="Calcular" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    bottom: 20
  },
});
