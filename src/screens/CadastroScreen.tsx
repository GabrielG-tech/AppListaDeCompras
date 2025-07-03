import React, { useState, useMemo } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useAppTheme } from '../hooks/useAppTheme';

type Props = {
  navigation: StackNavigationProp<any>;
};

export default function CadastroScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const [nome, setNome] = useState('');

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          padding: 16,
          backgroundColor: theme.colors.background,
        },
        input: {
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 6,
          padding: 12,
          marginBottom: 16,
          backgroundColor: theme.colors.inputBackground,
          color: theme.colors.text,
        },
        button: {
          backgroundColor: theme.colors.primary,
          padding: 12,
          borderRadius: 6,
        },
        buttonText: {
          color: '#fff',
          textAlign: 'center',
          fontWeight: '600',
        },
      }),
    [theme],
  );

  const adicionarItem = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do item"
        placeholderTextColor={theme.colors.placeholder}
        value={nome}
        onChangeText={setNome}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={adicionarItem}
        disabled={!nome.trim()}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
