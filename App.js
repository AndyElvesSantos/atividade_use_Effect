import React,{useState, useEffect} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import styled from 'styled-components/native';

const Tela = styled.View`
  flex: 1;
  align-items: center;
`

const Titulo = styled.Text`
  font-size: 20px;
  margin-top: 20px;
`

const Input = styled.TextInput`
  width: 70%;
  background-color: #c4c4c4;
  height: 50px;
  font-size: 25px;
  margin-top: 20px;
  padding-left: 15px;
  border-radius: 15px;
`
const ResultadoView = styled.View`
  margin-top: 50px;
`

const Resultado = styled.View`
  background-color: #7DF9FF;
  border-radius: 15px;
  padding: 20px;
`

const ResultadoTexto = styled.Text`
  font-size: 25px;

`
export default function App() {
  const [km, alteraKM] = useEffect('10');
  const [Milhas, alteraMilhas] = useEffect('0,6214');
  const TranformarKM = () => {
    const indice = (parseFloat(km) * parseFloat(Milhas));
    alteraKM(indice);
  }
  useEffect (() => {TranformarKM() }, [km, milhas] );
  return (
    <Tela>
      <Titulo>CONVERSOR DE QUILÔMETROS</Titulo>
      <Input placeholder = "Digite os Km´s" keyboardType= "Numeric" value={km} onChangeText= { (k) => {alteraKM(k)}}  />
      <ResultadoView>
        <Resultado>
        <ResultadoTexto> 175 Milhas</ResultadoTexto>
        </Resultado>
      </ResultadoView>
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
