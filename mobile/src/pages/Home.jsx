import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, CONTAINER } from '../constans/Theme'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={CONTAINER}>
      <TouchableOpacity style={styles.btnNewItem} onPress={() => navigation.navigate('Create')}>
        <Text style={styles.btnText}>Add New Item</Text>
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Text style={styles.itemName}>Item 1</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={[styles.btnDetail, styles.btn]} onPress={() => navigation.navigate('Detail')}>
            <Text style={styles.btnText}>Detail</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={[styles.btnEdit, styles.btn]}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnDelete, styles.btn]}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.itemName}>Item 1</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={[styles.btnDetail, styles.btn]}>
            <Text style={styles.btnText}>Detail</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={[styles.btnEdit, styles.btn]}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnDelete, styles.btn]}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.itemName}>Item 1</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={[styles.btnDetail, styles.btn]}>
            <Text style={styles.btnText}>Detail</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={[styles.btnEdit, styles.btn]}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnDelete, styles.btn]}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity> */}
        </View>
      </View>
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
    borderColor: COLORS.secondary
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
    backgroundColor: COLORS.primary,
  },
  // btnEdit: {
  //   backgroundColor: COLORS.warning,
    
  // },
  // btnDelete: {
  //   backgroundColor: COLORS.danger,
    
  // },
  btnText: {
    color: 'white',
    textAlign: 'center'
  }
})

export default Home