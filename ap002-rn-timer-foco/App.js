//16.8
//hook
import { useEffect, useState } from 'react'
import { 
  Pressable,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

export default function App() {
  const [segundos, setSegundos] = useState(25 * 60)
  const [rodando, setRodando] = useState(false)

  useEffect(() => {
    if(!rodando)return
    const id = setInterval(() => {
      setSegundos(s => s - 1)
    }, 1000)
    //função de limpeza
    return () => clearInterval(id)
  })
  const minutos = Math.floor(segundos / 60)
  const segs = segundos % 60
  return (
    <View style={styles.container}>
      <Text
        style={styles.tempo}>
        {String(minutos).padStart(2, '0')}:{String(segs).padStart(2, '0')}
      </Text>
      <Pressable
        onPress={() => {setRodando(r => !r)}}
        style={styles.botao}>
          <Text
            style={styles.textoBotao}>{rodando ? "Pausar" : "Iniciar"}</Text>
      </Pressable>

      {/* //botão reiniciar */}
      <Pressable
        style={styles.botaoSecundario}
        onPress={() => {
          setRodando(false)
          setSegundos(25 * 60)
        }}>
          <Text
            style={styles.textoBotao}>
              Reiniciar
          </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempo: {
    fontSize: 72, color: '#FFFFFF', fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#087EA4',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 10
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600'
  },
  botaoSecundario: {
    marginTop: 12,
    backgroundColor: "#334155",
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 10
  }
});
