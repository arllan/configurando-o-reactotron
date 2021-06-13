import React, {useEffect} from 'react';
import { View, Text } from 'react-native';

import './config/ReactotronConfig'; // chama o arquivo de configuração

console.tron.log('hiiiicvcvcvciiiiiii!!!!');
console.tron.log('Funcionou!');
console.tron.warn('Funcionou!')
console.tron.error('Funcionou!')

console.tron.display({
  name: 'KNOCK KNOCK',
  preview: 'Who\'s there?',
  value: 'Orange.'
})



export default function exemplo_reactotron() {

  const bench = libReactotron.benchmark("Verificar o tempo de execução") // instancia do marcador

  function teste(){ // função a ser testada quanto tempo para ser executada
    return 1000 *258
  }
 
  
  function slowFunction() { // exemplo de como medir o tempo de execução de uma lib
  
    // Verifica quando tempo para executar essa funcionalidade
    bench.step("Thing A")

    bench.step(aula = '2589633');
   
    bench.step('TesteA: '+ teste());

    // Verifica quando tempo para executar essa funcionalidade
    bench.step("Thing B")
  
    // Verifica quando tempo para executar essa funcionalidade
    bench.stop("Thing C")
  }

  bench.step('TesteB: '+ teste()); // função medida o tempo de execução

  useEffect(()=>{
    slowFunction()
  },[])
  
 return (
   <View>
     <Text>OII22I</Text>
   </View>
  );
}