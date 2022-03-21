# ProjetoGazinFilms

/*esse é o componente dos filmes populares*/

import React,{useRef} from "react";
import {View,Text,FlatList,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import { Modalize } from "react-native-modalize";

const filmespopulares = [
    {
        id: 1,
        img: require('../imgs/blis.jpeg'),
        title: 'Blis',
        ano: '2021',
    },
    {
        id: 2,
        img: require('../imgs/malconemarie.jpg'),
        title: 'Malcolm&Marie',
        ano: '2021',
    },

    {
        id: 3,
        img: require('../imgs/FramingBritneySpears.jpg'),
        title: 'Framing Britiney...',
        ano: '2021',
    },

    {
        id: 4,
        img: require('../imgs/mulhermaravilha84.jpg'),
        title: 'Wonder Woman 84',
        ano: '2020',
    },

    {
        id: 5,
        img: require('../imgs/relatosdomundo.jpg'),
        title: 'News of the world',
        ano: '2021',
    },

    {
        id: 6,
        img: require('../imgs/mateoumorra.jpg'),
        title: 'Mate ou Morra',
        ano: '2021',
    },
    {
        id: 7,
        img: require('../imgs/mib3.jpg'),
        title: 'Mib 3',
        ano: '2012',
    },
    {
        id: 8,
        img: require('../imgs/Django.jpg'),
        title: 'Django',
        ano: '2012',
    }





]

const Listafilmespopulares  = () => {
    const modalizeRef = useRef(null)

function onOpen(){
    modalizeRef.current?.onOpen(true)
}
    return(
        <View>
           
            <Text style={{color: 'white',fontSize: 15,paddingTop: 10,paddingLeft: 10,fontWeight: 'bold'}}>Filmes populares</Text>
            <FlatList
            data={filmespopulares}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            tvParallaxMagnification={18}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            
            <View style={{marginTop: 5}}>
             


             <Modalize
             data={filmespopulares}
             keyExtractor={item => item.id}
             ref={modalizeRef}
             snapPoint={180}
             modalHeight={580}
             >

            <View>
                <Text>eaeaeae</Text>
            </View>
               

             </Modalize>
                   
        
                <TouchableOpacity onPress={() => {onOpen}}>  
             
               

            


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


    )
}

export default Listafilmespopulares
