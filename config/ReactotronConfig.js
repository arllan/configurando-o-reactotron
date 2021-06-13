import Reactotron, { networking } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.18.24' })
    .useReactNative()
    .use(networking())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  libReactotron = Reactotron; // configuração para exporta a lib Reactotron

  console.tron = tron; // configuração para modificar o indentificador do console
  tron.clear();
}