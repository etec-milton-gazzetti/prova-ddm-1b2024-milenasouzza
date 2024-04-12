import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>PESTE NEGRA</Text>
      <Image
        source={require('../assets/pestedocarai.webp')}
        style={styles.image}
      />
      <Text style={styles.content}>
        A Peste Negra, também conhecida como a Grande Peste ou a Peste Bubônica, foi uma das epidemias mais devastadoras da história humana. Originada na Ásia Central, a doença se espalhou pela Europa no século XIV, resultando em milhões de mortes.
      </Text>
      <Text style={styles.subtitle}>Origem</Text>
      <Text style={styles.content}>
        A Peste Negra é causada pela bactéria Yersinia pestis, que normalmente infecta roedores, como ratos, e é transmitida aos humanos através de pulgas. Acredita-se que a epidemia tenha começado na China, espalhando-se ao longo das rotas comerciais para o Oriente Médio e a Europa.
      </Text>
      <Text style={styles.subtitle}>Sintomas</Text>
      <Text style={styles.content}>
        Os sintomas da Peste Negra incluem febre alta, dores de cabeça intensas, inchaço dos gânglios linfáticos (bubões) e erupções cutâneas. A doença pode progredir rapidamente e levar à morte se não for tratada.
      </Text>
      <Text style={styles.subtitle}>impacto</Text>
      <Text style={styles.content}>
       Estima-se que entre 75 e 200 milhões de pessoas tenham morrido devido à Peste Negra, o que representava uma grande porcentagem da população mundial na época. A pandemia causou colapso econômico, desorganização social e mudanças significativas na estrutura da sociedade.
      </Text>
      <Text style={styles.subtitle}>Conclusão</Text>
      <Text style={styles.content}>
        A Peste Negra foi uma das pandemias mais catastróficas da história, deixando um legado duradouro de morte e destruição. Seu impacto profundo moldou significativamente a história da humanidade e continua a ser estudado como um exemplo de como as doenças infecciosas podem alterar o curso da civilização. A pesquisa contínua sobre a Peste Negra também é importante para entender melhor as pandemias modernas e desenvolver estratégias eficazes de prevenção e controle de doenças.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center'
  },
});
