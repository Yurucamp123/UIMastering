import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'

const PayAndConfirmButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PAY & CONFIRM</Text>
    </View>
  )
}

export default PayAndConfirmButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF7622',
        borderRadius: s(12),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: vs(15),
        marginTop: vs(20),
        marginBottom: vs(20),
    },

    text: {
        color: '#FFFFFF',
        fontSize: s(14),
        fontWeight: 'bold',
    }
})