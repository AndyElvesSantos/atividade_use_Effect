import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import styled from 'styled-components/native';

const Tela = styled.View`
  flex: 1;
  align-items: center;
`

const Titulo = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`

const Input = styled.TextInput`
  width: 50%;
  background-color: #c4c4c4;
  height: 50px;
  font-size: 25px;
  margin-top: 20px;
  padding-left: 15px;
  border-radius: 15px;
`

export default function App() {
  return (
    <Tela>
      <Titulo>Conversor de Quilometros</Titulo>
      <Input placeholder = "Digite Km´s" />
    </Tela>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
