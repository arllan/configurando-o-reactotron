

# Instalando Reactotron

[Documentação Oficial do Reactotron](https://github.com/infinitered/reactotron)

1- Primeiro instale o reactotron no computador [Baixar](https://github.com/infinitered/reactotron/releases)

2- Com reactotron instalado na maquina agora vamos instalar no projeto com o comando:
```
npm i --save-dev reactotron-react-native
```
2.1 - instale a dependencia do asyncStorage por que e preciso para rodar  reactotron.

Instalação:
```
npm install @react-native-async-storage/async-storage

```
Link:
```
 react-native link @react-native-async-storage/async-storage
```

3 -  Com reactotron instalado como dependencia de desenvolvimento agora vamos criar o arquivo de configuração no projeto. Criar pasta na raiz chamada **config/ReactotronConfig.js**. Agora vamos adicionar as configurações.


```javascript
import  Reactotron  from  'reactotron-react-native';

import  AsyncStorage  from  '@react-native-async-storage/async-storage';
if (__DEV__) {
	const  tron = Reactotron.configure({ host:  '192.168.18.24' })// o ip foi adicionado por que de inicio o reactotron não achou a maquina.
	.useReactNative()
	.setAsyncStorageHandler(AsyncStorage)
	.connect();
	console.tron = tron;
	tron.clear();
}

```


4- Com tudo configurado e funcionando vamos agora ver como fazer um log.
```javascript
console.tron.log('Funcionou!');
console.tron.warn('Funcionou!')
console.tron.error('Funcionou!')

console.tron.display({
	name:  'KNOCK KNOCK',
	preview:  'Who\'s there?',
	value:  'Orange.'
})
```