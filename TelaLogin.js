# ProjetoGazinFilms
import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image} from "react-native";

/*Essa é a Tela de Login*/

const TelaLogin = ({navigation}) => {
    return(
    <View style={Estilos.ConteinerPrincipal}>
           
             <View style={Estilos.conteinerLogo}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white', fontStyle: 'italic'}}>Gazin Films</Text>
                </View>
                
                <View /*Conteiner Inputs */ style={Estilos.ConteinerInputs}>

                    <TextInput
                     placeholder="Email"
                     onChangeText={() => {}}     
                     style={Estilos.InputEmail}   
                     
                    />
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={() => {}}
                        style={Estilos.InputSenha}   
                        
                    />


                        <TouchableOpacity  style={{backgroundColor: '#3C6DFF', width: 150,height: 35, padding: 9,marginTop: 25, elevation: 10, borderRadius: 4}}onPress={() => {navigation.navigate('Home')}}>
                            <Text style={{textAlign: 'center', color: 'white'}}>Acessar</Text>
                        </TouchableOpacity>

                        
                <View /*Criar Conta */ style={Estilos.ConteinerCriaConta}>
                     <Text style={{fontSize: 13,color: 'white', fontWeight: 'bold'}}> já se cadastrou no seu app de filmes</Text>
                     <TouchableOpacity onPress={() => {() => navigation.navigate('Home')}}>
                         <Text style={{fontSize: 15,textAlign: 'center',fontWeight: 'bold',
                        color: '#C2D1FF'}}>Crie sua conta agora !</Text>
                     </TouchableOpacity>
                </View>

                </View>





        </View>
    )
}

export default TelaLogin;


const Estilos = StyleSheet.create({

    ConteinerPrincipal:{
      flex: 1, backgroundColor: '#1B2021'
    },

    conteinerLogo:{
                
        marginTop: 180,
        marginLeft: 30,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#3C6DFF',
         width: 300,
         height: 50 ,
         borderRadius: 18,
         elevation: 10

        
     
    },
    Logo:{
        width: 200,
        height: 180,
    },
    ConteinerInputs:{
        top: 50,
        justifyContent:'center',
        alignItems: 'center'
    },
    InputEmail:{
        backgroundColor: 'white',
        width: 250,
        height: 40,
        paddingLeft: 5,
        marginBottom: 6,
        borderRadius: 4
    },
    InputSenha:{
        backgroundColor: 'white',
        width: 250,
        paddingLeft: 5,
        height: 40,
        marginTop: 6,
        borderRadius: 4
    },
    ConteinerCriaConta:{
        marginTop: 15
    }



})
