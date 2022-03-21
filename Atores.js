# ProjetoGazinFilms

/*nesse componente adicionei mais 3 atores diferentes, the rock(Jumanji) , ryan renolds(Deadpool), robert downey junior(Homem de ferro)*/


import React from "react";
import {View,Text,FlatList,StyleSheet,Image,TouchableOpacity} from 'react-native';


const Atorees = [
    {
        id: 1,
        img: require('../imgs/adamdriver.jpg'),
    },
    {
        id: 2,
        img: require('../imgs/megryan.jpg'),
    }, 
    {
        id: 3,
        img: require('../imgs/wolfgangbodison.jpg'),
    },
    {
        id: 4,
        img: require('../imgs/kitharington.jpg'),
    },
    {
        id: 5,
        img: require('../imgs/angelinajolie.jpg'),
    },
    {
        id: 6,
        img: require('../imgs/ryanrenolds.jpg'),
    },
    {
        id: 7,
        img: require('../imgs/therock.jpg'),
    },
    {
        id: 8,
        img: require('../imgs/robertdowneyjr.jpg'),
    },
]

    


const Atores  = () => {
    return(
        <View>
            <View style={{backgroundColor: ''}}>
            <Text style={{color: 'white',fontSize: 15,paddingTop: 10,paddingLeft: 10,fontWeight: 'bold'}}>Atores Populares</Text>




            <FlatList
            data={Atorees}
            horizontal={true}
        
            showsHorizontalScrollIndicator={false}
            tvParallaxMagnification={18}
            keyExtractor={item => item.id}
            renderItem={({item}) => 

            <View style={{marginTop: 5 ,}}>
                <TouchableOpacity onPress={() => {} } style={{borderRadius: 10}}>  
                <Image source={item.img} style={{ width: 48, height: 52, marginLeft: 11,borderRadius: 25}}/>

                
                </TouchableOpacity>  


            </View>
                
        
        
        }
            />
        </View>
     </View>


    )
}

export default Atores
