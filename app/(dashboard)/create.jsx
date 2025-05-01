import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Create = () => {
  return (
    <ThemedView safe style={styles.container}>

        <ThemedText title style={styles.heading}>
            Add a new Book
        </ThemedText>
        <Spacer />


    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      heading: {
        fontSize: 18,
        fontWeight: "bold"
      }
})