# ProjetoGazinFilms

/* Esse é o arquivo onde estão os componentes ,eu decidi modular todos eles para organizer em arquivos separados então todos esses arquivos eu irei deixar
aqui no repositorio, fiz isso para deixar o código organizado e legivel .
*/





import React from 'react';
import {View,Text,FlatList,StatusBar,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Atores from './Atores';
import Filmescartaz from './Filmescartaz';
import Filmeslancamentos from './Filmeslancamentos';
import Listafilmespopulares from './Listafilmespopulares';
import Topo from './Topo';

const Home = ({navigation}) => {
  return(
    <View style={{flex: 1, backgroundColor: '#1B2021'}} >
        <StatusBar
        backgroundColor={'#2C2C34'}
        
        />
      <View /* conteiner do topo do cabeçalho geral*/ >
        <View /*conteiner só da busca e do nome*/>
            <Topo/>
        </View>

        <View /*conteiner das imagens dos filmes em cartaz*/>
            <Filmescartaz/>
        </View>
      </View>

      <View /*conteiner do section ou do conteudo da na tela no meio */>
        
        <View /* conteiner da lista dos filmes populares */>
          <Listafilmespopulares/>
        </View>

        <View /*conteiner da lista dos filmes lançamentos */>
            <Filmeslancamentos/>
        </View>


      </View>


      <View /*conteiner do rodapé */>
          <View /*flat list dos atores */>
              <Atores/>
          </View>



          <View /*informações adicionais */ style={{marginTop: 10, marginLeft: 5}}>
             <Text style={{fontSize: 12,color: 'white'}}>Gazinfilms <Icon name={'copyright'} size={10} color={'white'}/> 2021 </Text>
             <Text style={{fontSize: 10, color:'white'}}>Desenvolvido por Weldon Thallysson</Text>
          </View>
          
      </View>


     









    </View>

  );
}





export default Home;
