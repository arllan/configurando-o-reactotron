import React from 'react';
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
 return (
   <View>
     <Text>OII22I</Text>
   </View>
  );
}