import { View, SafeAreaView, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { COLORS, CONTAINER } from '../constans/Theme';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message'

const Detail = ({ route, navigation }) => {
  const [item, setItem] = useState({});
  const { itemId } = route.params;

  const fetchDataById = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${itemId}`);
      setItem(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchDataById();
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

  const deleteItem = async () => {
    Alert.alert(
      'Are you sure',
      'This action cannot be undone.',
      [
        {
          text: 'Cancel',
          onPress: () => navigation.goBack(),
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: async () => {
            try {
              const response = await axios.delete(`http://localhost:3000/products/${itemId}`);
              showToast('success', 'New item successfully deleted')
              navigation.goBack()
            } catch (e) {
              console.log(e);
              showToast('error', e)
            }
          },
          style: 'destructive'
        }
      ],
      { cancelable: true }
    );
  }

  return (
    <SafeAreaView style={CONTAINER}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={[styles.btnEdit, styles.btn]} onPress={() => navigation.navigate('Edit', { itemId: item._id })}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnDelete, styles.btn]} onPress={deleteItem}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{item.price}</Text>
        <Text style={styles.title}>{item.desc}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 8
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8
  },
  btnEdit: {
    backgroundColor: COLORS.warning,
  },
  btnDelete: {
    backgroundColor: COLORS.danger,
  },
  btnText: {
    color: 'white',
  }
})

export default Detail;
