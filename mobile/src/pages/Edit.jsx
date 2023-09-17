import { View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import axios from 'axios'
import { COLORS, CONTAINER } from '../constans/Theme'
import { useState, useEffect } from 'react'
import Toast from 'react-native-toast-message'


const Home = ({ route, navigation }) => {
  const [ name, setName ] = useState('')
  const [ price, setPrice ] = useState(0)
  const [ desc, setDesc ] = useState('')
  //const [ data, setData ] = useState({})
  const { itemId } = route.params
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${itemId}`)
        setName(response.data.name);
        setPrice(response.data.price.toString()); 
        setDesc(response.data.desc);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData(); 
  }, []);

  const showToast = (type, text) => {
    Toast.show({
      type: type,
      text1: text,
      autoHide: true,
      position: 'bottom',
      visibilityTime: 1000
    })
  }
  
  const updateData = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/products/${itemId}`, { name, price, desc })
      showToast('success', 'New item successfully updated')
      navigation.navigate('')
    } catch (e) {
      console.log(e)
      showToast('error', e)
    }
  }
  
  
  
  return (
    <SafeAreaView style={CONTAINER}>
      <Text style={styles.title}>Edit Item</Text>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput value={name} style={styles.inputField} onChangeText={text => setName(text)}  />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Price</Text>
          <TextInput value={price.toString()} keyboardType="numeric" style={[styles.inputField, { width: 130 }]} onChangeText={text => setPrice(text)} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Description</Text>
          <TextInput value={desc} multiline={true} style={[styles.inputField, {height: 300 }]} onChangeText={text => setDesc(text)}  />
        </View>
        <TouchableOpacity style={styles.btn} onPress={updateData}>
          <Text style={styles.btnText}>Edit Item</Text>
        </TouchableOpacity>
        
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

export default Home