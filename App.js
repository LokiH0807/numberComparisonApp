import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, TouchableHighlight } from 'react-native';

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

  // clear btn
  const clear = () => {
    setPhoneNumber('')
    setCheckNumber('')
  }

  // page change
  const [pageStatus, setPageStatus] = useState(1)
  const changePage = (pageIdx) => {
    setPageStatus(pageIdx)
  }

  if (pageStatus === 1) return (
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

      <TouchableOpacity 
        style={{ backgroundColor: '#00BFFF', borderRadius: 10, padding: 10, alignItems: 'center', flexDirection: 'row', marginTop: 10 }}
        onPress={clear}
      >
        <Image 
        style={{ width: 20, height: 20, marginRight: 5 }}
          source={{ uri: 'data:image/png;base64,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' }}
        />
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold'  }}>Clear</Text>
      </TouchableOpacity>

      <TouchableHighlight 
        style={ styles.button }
        onPress={() => {
          changePage(2)
        }}
      >
        <Text style={ styles.buttonText }>Change to page 2</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  )
  if (pageStatus === 2) return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>我是另一頁</Text>
      <TouchableHighlight 
        style={ styles.button }
        onPress={() => {
          changePage(1)
        }}
      >
        <Text style={ styles.buttonText }>Change to page 1</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  )
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
  },
  button: {
    marginTop: 10,
    backgroundColor: '#87CEFA',
    borderRadius: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    padding: 10,
  }
});
