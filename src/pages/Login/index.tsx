import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ImagemFundo from '../../../assets/fundocinzajpg.jpg'
import { styles } from './style';

export function Login() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 50}}>
        Hello React Native
      </Text> */}
      <StatusBar style="auto" />

      {/* <TouchableOpacity style={{backgroundColor: 'blue'}}>
        <Text style={{ fontSize: 50}}>
          Clicar
        </Text>
      </TouchableOpacity> */}

    {/* <Button title='Clicar' /> */}

      {/* <Image /> */}
    {/* <Text style={styles.titulo}>
      Titulo
    </Text>

    <Text style={styles.subTitulo}>
      SubTitulo
    </Text> */}

      <Image style={styles.imagem}source={ImagemFundo} alt='FundoCinza'/>

      <View style={styles.containerForms}>

      <TextInput keyboardType='email-address'  placeholderTextColor={'#fff'} style={styles.input} placeholder='Digite seu email:'/>
      <TextInput secureTextEntry={true} placeholderTextColor={'#fff'}  style={styles.input} placeholder='Digite sua senha:'/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleButton}>Entrar</Text>
        </TouchableOpacity>



      </View>


    </View>

  );
}
