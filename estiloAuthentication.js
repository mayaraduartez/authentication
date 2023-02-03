import { StyleSheet, StatusBar } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 10
  },
  containerlistar: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    padding: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    resizeMode: "cover",
  },
  // buttonContainer: {
  //   width: 300,
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  // },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  separador: {
    height: 1,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  containerflat: {
    backgroundColor: 'white',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10
  },
  itemStylefirebase: {
    fontSize: 12,
    padding: 5,
  },
  alinhamentoLinha: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  alinhamentoColuna: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
})