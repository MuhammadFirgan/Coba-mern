import { View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { COLORS, CONTAINER } from '../constans/Theme'


const Home = () => {
  return (
    <SafeAreaView style={CONTAINER}>
      <Text style={styles.title}>Add New Item</Text>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput style={styles.inputField}  />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Price</Text>
          <TextInput keyboardType="numeric" style={styles.inputField}  />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Product Description</Text>
          <TextInput multiline={true} style={styles.inputField}   />
        </View>
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
  label: {
    
  },
  inputField: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5
  }
})

export default Home