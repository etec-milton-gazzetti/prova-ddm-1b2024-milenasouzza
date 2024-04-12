import { Text, View, Pressable, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import conteudo from './telaconteudo';
import Fundo from '../assets/pesteera.jpg'

export default function Home({ navigation }) {
  return (
    <ImageBackground source={Fundo} resizeMode='cover' style={{alignItems: 'center', height: '100%', width: '100%',}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
      <Pressable
                  style={[styles.button, { marginTop: 560 }]}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={{color: '#ffffff', width:120,paddingLeft:40}}>SOBRE</Text>
      </Pressable>
      
      <Pressable
        style={[styles.button, { marginTop: 20 }]}
        onPress={() => navigation.navigate("conteudo")}
      >
        <Text style={{color: '#ffffff',width:120,paddingLeft:30, }}>CONTEÚDO</Text>
      </Pressable>
    </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  button: {
     padding: 10,
    backgroundColor: "black",
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();


