const { View, Text, Image, StyleSheet } = require("react-native")

const Card = (props) => {
    return (
      <View style={styles.box}>
        <View style={styles.head}>
          <View style={styles.userImage}></View>
  
          <View style={styles.did}>
  
            <Text style={styles.text}> {props.name}</Text>
            <Text style={styles.text}> {props.last_name}</Text>
          </View>
  
        </View>
        <View style={styles.image}>
          <Image style={styles.img}
            resizeMode='cover'
            source={{ uri: "https://img.mstaml.com/i169390605570060045/%D8%B4%D8%A7%D9%87%D8%AF-%D8%A8%D8%B3%D9%87-%D8%B5%D8%BA%D9%8A%D8%B1%D9%87-%D9%84%D8%B7%D9%8A%D9%81%D8%A9-%D9%85%D9%86-%D9%81%D8%B5%D9%8A%D9%84%D8%A9-%D8%B3%D9%83%D9%88%D8%AA%D8%B4-%D9%81%D9%88%D9%84%D8%AF-%D8%A8%D8%B3%D9%87-%D8%B5%D8%BA%D9%8A%D8%B1%D9%87-%D9%85%D9%86-%D9%81%D8%B5%D9%8A%D9%84%D8%A9-%D8%B3%D9%83%D9%88%D8%AA%D8%B4-%D9%81%D9%88%D9%84%D8%AF.jpg" }} />
        </View>
      </View>
    )
  }

  export default Card;

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#00000050',
      padding: 20,
    },
    box: {
      height: 300,
      width: '100%',
      // flex: 1,
      backgroundColor: 'blue',
      padding: 5,
      margin: 10
      // justifyContent
      // alignItems
    },
    head: {
      flexDirection: 'row',
      flex: 1,
      borderWidth: 2,
      alignItems: 'center'
    },
    userImage: {
      backgroundColor: 'red',
      height: 100,
      width: 100,
      borderWidth: 1,
      borderRadius: 100
    },
    userImage2: {
      backgroundColor: '#1999',
      height: 100,
      width: 100,
      borderWidth: 1,
      borderRadius: 100,
      marginHorizontal: 10
    },
    image: {
      flex: 2,
    },
    text: {
      backgroundColor: 'black',
      borderWidth: 3,
      borderColor: '#145145',
      alignSelf: 'stretch',
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
      margin: 10
      // alignSelf:'stretch'
    },
    do: {
      backgroundColor: 'black',
      flex: 900,
      borderWidth: 3,
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold'
      // alignSelf:'stretch'
    },
    did: {
      // borderWidth: 10,
      alignSelf: 'stretch',
      flex: 1,
      // alignItems:'flex-end',
      justifyContent: 'center'
  
    },
    img: {
      height: '100%',
      width: '100%',
      backgroundColor: '#4545'
    }
  
  })