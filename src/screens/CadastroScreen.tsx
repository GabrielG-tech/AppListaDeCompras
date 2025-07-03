import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Button, 
  StyleSheet 
} from 'react-native';

import type { StackNavigationProp } from '@react-navigation/stack';

type CadastroScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function CadastroScreen({ navigation }: CadastroScreenProps) {
  const [nome, setNome] = useState('');

  const adicionarItem = () => {
    // por enquanto só volta, depois vamos integrar com o estado da lista
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do item"
        value={nome}
        onChangeText={setNome}
      />
      <Button
        title="Adicionar"
        onPress={adicionarItem}
        disabled={!nome.trim()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
});
