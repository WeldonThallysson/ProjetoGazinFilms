

# ProjetoGazinFilms

/*Esse é o componente Topo*/

import React from "react";
import {View,Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";




const Topo  = () => {
    return(
        <View style={Estilos.conteinerTopo}>
            <View style={Estilos.conteinerTexto}>
              <Text style={Estilos.textotitulo}>GazinFilms</Text>
              
            </View>

            <View style={Estilos.conteinerBusca}>
            <TextInput
            style={Estilos.busca}
            />
            <TouchableOpacity onPress={() => {}}>
            
             <View style={{top: 5, right: 20}}>
              <Icon name="search" size={15} color={'white'} style={{position:'absolute'}}/>
             </View>  
             </TouchableOpacity>
            


            
          
               
         </View>
        
        </View>


    )
}

export default Topo

const Estilos = StyleSheet.create({
   
    conteinerTopo:{
       flexDirection: 'row',
        backgroundColor: '#2C2C34',
        height: 45,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10
    },
    conteinerTexto:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12
        
    },
    textotitulo:{
        color:'white',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold'
        
    },
    conteinerBusca:{
        flexDirection: 'row',
        marginLeft: 85,
        marginTop: 5
        

    },
    busca:{
        color: 'white',
        fontSize: 14,    
        width: 160,
        height: 30,
        paddingBottom: 6,
        backgroundColor: '#494850',
        elevation: 6,
        borderRadius: 3
    },
    icone:{
    
    }

})
