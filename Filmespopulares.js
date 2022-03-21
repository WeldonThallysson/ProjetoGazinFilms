# ProjetoGazinFilms
/*esse é o componente filmespopulares*/

import React from "react";
import {View,Text,FlatList,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';


const filmespopulares = [
    {
        id: 1,
        img: require('../imgs/doutorEstranho2.jpg'),
        title: 'Doutor Estanho 2',
        ano: '2022',
    },
    {
        id: 2,
        img: require('../imgs/alertavermelho.jpg'),
        title: 'Malcolm&Marie',
        ano: '2021',
    },

    {
        id: 3,
        img: require('../imgs/finch.png'),
        title: 'Finch',
        ano: '2021',
    },

    {
        id: 4,
        img: require('../imgs/eusouumalenda.jpg'),
        title: 'Eu sou uma Lenda',
        ano: '2020',
    },

    {
        id: 5,
        img: require('../imgs/guerramundialZ.jpg'),
        title: 'Guerra Mundial Z',
        ano: '2021',
    },

    {
        id: 6,
        img: require('../imgs/depoisdaterra.jpg'),
        title: 'Depois da Terra',
        ano: '2021',
    },
    {
        id: 7,
        img: require('../imgs/Power.jpg'),
        title: 'Power',
        ano: '2021',
    },
    {
        id: 8,
        img: require('../imgs/thelittlethings.jpg'),
        title: 'The Little things',
        ano: '2021',
    }





]

const Filmeslancamentos  = () => {
    return(
    <View>
          <View>

<Text style={{color: 'white',fontSize: 15,paddingTop: 10,paddingLeft: 10,fontWeight: 'bold'}}>Filmes lançamentos</Text>

<FlatList
            data={filmespopulares}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            tvParallaxMagnification={18}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            <View style={{marginTop: 5}}>
                <TouchableOpacity onPress={() => {} }>  
                <ImageBackground source={item.img} style={{ width: 60, height: 110, marginLeft: 10,borderRadius: 3 }}>


                <View style={{ alignItems: 'flex-start', marginTop: 18, top: 20,backgroundColor: '#1A1B25', width: 62, height: 40,top: 60,left: 0,elevation: 15, borderRadius: 5}}>
                    <Text style={{color: 'white', fontSize: 7,paddingLeft: 4, paddingTop: 5 ,fontWeight: 'bold'  }}>{item.title}</Text>
                    <Text style={{color: 'white', fontSize: 5, paddingLeft: 4,paddingRight: 15 }}>{item.ano}</Text>
                </View>

                </ImageBackground>
                </TouchableOpacity>  


            </View>
                
        
        
        }
            />
        </View>

        
        </View>


    )
}

export default Filmeslancamentos
