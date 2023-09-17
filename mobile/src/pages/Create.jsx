import { View, SafeAreaView, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native'
import { COLORS, CONTAINER } from '../constans/Theme'
import { useState, forwardRef } from 'react'
import axios from 'axios'
import Toast from 'react-native-toast-message'

const Create = ({ navigation }) => {
  const [item, setItem] = useState({
    name: '',
    price: '',
    desc: ''
  })
  
  const showToast = (type, text) => {
    Toast.show({
      type: type,
      text1: text,
      autoHide: true,
      position: 'bottom',
      visibilityTime: 1000
    })
  }
  
  const handleItem = async () => {
    try {
      const response = await axios.post('http://localhost:3000/products', item)
      showToast('success', 'New item successfully added')
      navigation.goBack()
    } catch (e) {
      console.log(e)
      showToast('error', e)
    }
  }
  
  
  return (
    <SafeAreaView style={CONTAINER}>
      <Text style={styles.title}>Add New Item</Text>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput style={styles.inputField}   onChangeText={(text) => setItem({...item, name: text})}/>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Price</Text>
          <TextInput keyboardType="numeric" style={[styles.inputField, { width: 130 }]} onChangeText={(text) => setItem({...item, price: text})} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Description</Text>
          <TextInput multiline={true} style={styles.inputField} onChangeText={(text) => setItem({...item, desc: text})} />
        </View>
        <Button style={styles.btn} title="Add new item" onPress={handleItem} />
        {/*<TouchableOpacity style={styles.btn} onPress={handleItem}>
          <Text style={styles.btnText}>Add New Item</Text>
        </TouchableOpacity> */}
        
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    textTransform: 'uppercase'
  },
  content: {
    marginVertical: 12,
    gap: 14
  },
  contentWrapper: {
    gap: 5
  },
  inputField: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 13,
    borderRadius: 8
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  }
})

export default Create