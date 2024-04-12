import React from 'react';
import { Text, View, Pressable, ImageBackground, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fundo from '../assets/fundoso.png';

export default function Sobre({ navigation }) {
  return (
    <ImageBackground source={Fundo} resizeMode='cover' style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SOBRE O DESENVOLVEDOR</Text>
        <Image
          source={require('../assets/pestedocarai.webp')}
          style={styles.image}
        />
        <Text style={styles.text}>Nome: Milena Souza Santos</Text>
        <Text style={styles.text}>Sala: 3º Info</Text>
        <Text style={styles.text}>RM: 07703</Text>
        <Text style={styles.email}>E-mail: milena.santos233@etec.sp.gov.br</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginTop: 50,
    color: '#ffffff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 30,
  },
  button: {
    padding: 10,
    backgroundColor: "black",
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});
