// src/screens/ConfigScreen.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

type ThemeOption = 'light' | 'dark' | 'system';

export default function ConfigScreen() {
  // estados iniciais (você pode carregar de um contexto ou AsyncStorage)
  const [displayName, setDisplayName] = useState('Usuario Exemplo');
  const userEmail = 'usuarioteste@email.com';
  const [theme, setTheme] = useState<ThemeOption>('light');

  const saveProfile = () => {
    // aqui você dispara sua API / Context / AsyncStorage
    Alert.alert('Perfil salvo', `Nome de exibição: ${displayName}`);
  };

  const renderThemeButton = (option: ThemeOption, label: string) => (
    <TouchableOpacity
      key={option}
      style={[
        styles.themeButton,
        theme === option && styles.themeButtonActive,
      ]}
      onPress={() => setTheme(option)}
    >
      <Text
        style={[
          styles.themeButtonText,
          theme === option && styles.themeButtonTextActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Card 1: Perfil */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Suas Informações</Text>
          <Text style={styles.cardSubtitle}>
            Atualize seu nome de exibição. Seu e-mail não pode ser alterado aqui.
          </Text>

          <Text style={styles.label}>Nome de Exibição</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={displayName}
              onChangeText={setDisplayName}
              placeholder="Seu nome"
              placeholderTextColor="#888"
            />
          </View>

          <Text style={[styles.label, styles.labelMarginTop]}>Email</Text>
          <View style={[styles.inputWrapper, styles.inputDisabled]}>
            <TextInput
              style={styles.input}
              value={userEmail}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
            <Text style={styles.saveButtonText}>Salvar Alterações de Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Card 2: Aparência */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Aparência</Text>
          <Text style={styles.cardSubtitle}>
            Personalize a aparência do aplicativo.
          </Text>

          <Text style={styles.label}>Tema</Text>
          <View style={styles.themeRow}>
            {renderThemeButton('light', 'Claro')}
            {renderThemeButton('dark', 'Escuro')}
            {renderThemeButton('system', 'Sistema')}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#121212' },
  container: {
    padding: 16,
    backgroundColor: '#121212',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 6,
  },
  labelMarginTop: {
    marginTop: 16,
  },
  inputWrapper: {
    backgroundColor: '#2a2a2a',
    borderRadius: 6,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#fff',
  },
  inputDisabled: {
    opacity: 0.6,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#ff8c65',
    paddingVertical: 12,
    borderRadius: 6,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  themeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    paddingVertical: 10,
    marginHorizontal: 4,
  },
  themeButtonActive: {
    backgroundColor: '#ff8c65',
    borderColor: '#ff8c65',
  },
  themeButtonText: {
    textAlign: 'center',
    color: '#ccc',
    fontWeight: '500',
  },
  themeButtonTextActive: {
    color: '#fff',
  },
});
