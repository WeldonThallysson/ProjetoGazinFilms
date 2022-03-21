# ProjetoGazinFilms

/*Esse é o componente dos filmes que rolam como principais */


import React,{useState} from "react";
import {View,Text,StyleSheet,Image,FlatList,Dimensions,Modal} from 'react-native';
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";

const {width: screenWidth,height: screenHeight} = Dimensions.get('window')

const filmes = [
    {
    id: 1,
    imgUrl:require('../imgs/jumanji.jpeg'),
    title: 'Jumanji',
    desc: 'Quatro adolecentes encontram um video game, cuja a ação se passa em uma floresta tropical.Empolgados com jogo,eles escolhem,seus avatares para o desafio,mas um evento inesperado faz com que eles sejam transportados para dentro do universo ficticio,transformando-os nos personagens de aventura.'

   },
   {
    id: 2,
    imgUrl:require('../imgs/doutorcartaz.jpg'),
    title: 'Doutor Estranho 2',
    desc: 'A porta do multiverso, cheia de mistério e loucura, se abre. Agora que o Homem de Ferro e o Capitão América partiram após uma batalha feroz em Vingadores: Ultimato, o ex-cirurgião genial, e mago mais forte de todos, Doutor Estranho, deve desempenhar um papel ativo como uma figura central nos Vingadores. '
   },
   {
    id: 3,
    imgUrl:require('../imgs/homemcartaz.jpg'),
    title: 'Homem Aranha no Way Home',
    desc: 'A porta do multiverso, cheia de mistério e loucura, se abre. Agora que o Homem de Ferro e o Capitão América partiram após uma batalha feroz em Vingadores: Ultimato, o ex-cirurgião genial, e mago mais forte de todos, Doutor Estranho, deve desempenhar um papel ativo como uma figura central nos Vingadores. '
   },
   {
    id: 4,
    imgUrl:require('../imgs/finch.png'),
    title: 'Finch',
    desc: 'Um desastre mundial acabou com a civilização humana e transformou o planeta em um grande deserto assolado por tempestades de areia.'
   },
   {
    id: 5,
    imgUrl:require('../imgs/relatosdomundo.jpg'),
    title: 'Relatos do Mundo',
    desc: 'Um veterano de guerra que viaja de cidade em cidade lendo as notícias faz uma perigosa viagem pelo Texas para levar uma garotinha órfã até seu novo lar.'
   },


]

const Filmescartaz = () => {
   

    
    
    return(
        
        
        <View>
        <Carousel 
        data={filmes}
        sliderWidth={360}
        itemWidth={380}
        layoutCardOffset={18}
        pagingEnable={true}
        renderItem={({item}) => 
          <View style={Estilos.conteinerCarousel}>
            <Image source={item.imgUrl} style={Estilos.imagemCarousel}/>

            <View style={Estilos.textonaimagem}>
             <Text style={Estilos.textotituloimg}>{item.title}</Text>
             <Text style={Estilos.textodescimg}>{item.desc}</Text>
            
            </View>

         </View>
            }
        
        />
        
        
        </View> 
         
       


    )
}

export default Filmescartaz

const Estilos = StyleSheet.create({
    

    conteinerCarousel:{
        flexDirection: 'column'

    },
    imagemCarousel:{
        width: 350, height: 180, marginLeft: 5,marginTop: 5, borderRadius:7,
    },
    textonaimagem:{
        position: "absolute", top: 100, left: 15
    },
    textotituloimg:{
        fontSize: 20,fontWeight: 'bold',color: 'white',paddingBottom: 3
    },
    textodescimg:{
        fontSize: 8, color: 'white',width: 250, 
    }
    })
