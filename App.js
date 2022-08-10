import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [checkNumber, setCheckNumber] = useState('')
  let showText
  if (!phoneNumber || !checkNumber) showText = ''
  else showText = phoneNumber !== checkNumber ? `${phoneNumber} 與 ${checkNumber} 不同` : `上下相同無誤`

  const changePhoneNumber = (num) => {
    setPhoneNumber(num)
  }

  const changeCheckNumber = (num) => {
    setCheckNumber(num)
  }

  const clear = () => {
    setPhoneNumber('')
    setCheckNumber('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>- 號碼比較 APP -</Text>
      <TextInput
        style={[styles.align, styles.input]}
        placeholder="請輸入一組號碼"
        keyboardType="phone-pad"
        secureTextEntry={false}
        editable={true}
        autoFocus={false}
        onChangeText={(num) => changePhoneNumber(num)}
        maxLength={10}
        value={phoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="請輸入另一組號碼"
        keyboardType="phone-pad"
        secureTextEntry={false}
        editable={true}
        autoFocus={false}
        onChangeText={(num) => changeCheckNumber(num)}
        maxLength={10}
        value={checkNumber}
      />
      <Text style={ [styles.align, phoneNumber === checkNumber ? styles.correct : ''] }>{ showText }</Text>

      <Button
        title="Clear"
        onPress={clear}
      />
      <StatusBar style="auto" />
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
  title: {
    fontSize:20
  },
  input: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    textAlign:'center'
  },
  align: {
    marginTop: 10
  },
  correct: {
    color: 'red',
    fontWeight: 'bold'
  }
});
