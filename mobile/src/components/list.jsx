import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const List = (...props) => {
  return (
    <View style={styles.wrapper} key={i}>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={[styles.btnDetail, styles.btn]} onPress={() => navigation.navigate('Detail', { itemId: item._id })}>
          <Text style={styles.btnText}>Detail</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    backgroundColor: COLORS.success,
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  }
})

export default List