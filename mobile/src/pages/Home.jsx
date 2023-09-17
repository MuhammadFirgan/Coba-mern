import { View, SafeAreaView, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { COLORS, CONTAINER } from '../constans/Theme'
import axios from 'axios'


const Home = ({ navigation }) => {
  const [ items, setItems ] = useState([])
  
  const fetchAllData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products')
      setItems(response.data.data)
    } catch (e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    fetchAllData()
  }, [])
  
  return (
    <SafeAreaView style={CONTAINER}>
      <TouchableOpacity style={styles.btnNewItem} onPress={() => navigation.navigate('Create')}>
        <Text style={styles.btnText}>Add New Item</Text>
      </TouchableOpacity>
      
      <FlatList 
        data={items}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity style={[styles.btnDetail, styles.btn]} onPress={() => navigation.navigate('Detail', { itemId: item._id })}>
              <Text style={styles.btnText}>Detail</Text>
            </TouchableOpacity>
            
          </View>
        </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btnNewItem: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginVertical: 12
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.secondary,
    marginVertical: 8
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 8
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8
  },
  btnDetail: {
    backgroundColor: COLORS.success,
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  }
})

export default Home