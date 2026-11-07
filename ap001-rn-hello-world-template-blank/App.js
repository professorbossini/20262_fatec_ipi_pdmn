import { useState } from 'react'
import { 
  Button,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
//hook. useState (a partir da versão 16.8)
export default function App() {
  const [numero, setNumero] = useState(1)
  const incrementar = () => setNumero(numero + 1)
  return (
    <View style={styles.container}>
      <Text>{numero}</Text>
      <Button
        onPress={incrementar} 
        title='Incrementar'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
