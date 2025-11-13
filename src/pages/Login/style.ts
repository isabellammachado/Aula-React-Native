
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, //o quanto ocupa da tela, o maximo é 1 q é 100%
    // width: '80%',
    // height: '70%',
    // backgroundColor: '#fff',
    backgroundColor: Platform.OS === 'android' ? 'green': '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    color: 'green'
  },

  subTitulo: {
    fontSize:25
  },
  containerForms: {
    backgroundColor: '#ddd',
    width:'80%',
    height:'30%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    borderRadius:8,
  },

  input: {
    width:'100%',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 20,
    borderRadius:8,

  },

  button: {
    width:'100%',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 20,
    borderRadius:8,
    justifyContent: 'center'
  },
  titleButton:{
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 25,
    borderRadius: 8,
    textAlign: 'center'

    
  },
  imagem: {
    width: '80%',
    height:325,
    borderRadius: 8,
    marginBottom: 10,
  }



  
});                                         
