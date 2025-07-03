import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ThemeContext, ThemeOption } from '../context/ThemeContext';
import { useAppTheme } from '../hooks/useAppTheme';
import Icon from 'react-native-vector-icons/Feather';

const labels: Record<ThemeOption, string> = {
  light: 'Claro',
  dark: 'Escuro',
  system: 'Sistema',
};

export default function ConfigScreen() {
  const { choice, setChoice } = useContext(ThemeContext);
  const theme = useAppTheme();

  // Apenas para demo; você pode integrar com AsyncStorage ou API
  const [displayName, setDisplayName] = useState('Usuario Exemplo');
  const [userEmail] = useState('usuarioteste@email');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Card 1: Suas Informações */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: theme.colors.heading }]}>
            Suas Informações
          </Text>
          <Text style={[styles.cardSubtitle, { color: theme.colors.text }]}>
            Atualize seu nome de exibição. Seu e-mail não pode ser alterado aqui.
          </Text>

          <Text style={[styles.label, { color: theme.colors.text }]}>
            Nome de Exibição
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.colors.inputBackground,
                color: theme.colors.text,
              },
            ]}
            value={displayName}
            onChangeText={setDisplayName}
            placeholder="Seu nome"
            placeholderTextColor={theme.colors.placeholder}
          />

          <Text
            style={[
              styles.label,
              { color: theme.colors.text, marginTop: 16 },
            ]}
          >
            Email
          </Text>
          <TextInput
            style={[
              styles.input,
              styles.inputDisabled,
              {
                backgroundColor: theme.colors.inputBackground,
                color: theme.colors.text,
              },
            ]}
            value={userEmail}
            editable={false}
          />

          <TouchableOpacity
            style={[
              styles.saveButton,
              { backgroundColor: theme.colors.primary },
            ]}
            onPress={() => {
              /* saveProfile() */
            }}
          >
            <Text style={styles.saveButtonText}>
              Salvar Alterações de Perfil
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card 2: Aparência */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: theme.colors.heading }]}>
            Aparência
          </Text>
          <Text style={[styles.cardSubtitle, { color: theme.colors.text }]}>
            Personalize a aparência do aplicativo.
          </Text>

          <Text style={[styles.label, { color: theme.colors.text }]}>Tema</Text>
          <View style={styles.themeRow}>
            {(Object.keys(labels) as ThemeOption[]).map(option => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.themeButton,
                  choice === option && {
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.primary,
                  },
                ]}
                onPress={() => setChoice(option)}
              >
                <Icon
                  name={
                    option === 'light'
                      ? 'sun'
                      : option === 'dark'
                      ? 'moon'
                      : 'sliders'
                  }
                  size={20}
                  color={choice === option ? '#fff' : theme.colors.text}
                  style={styles.iconMarginRight}
                />
                <Text
                  style={[
                    styles.themeButtonText,
                    choice === option && { color: '#fff' },
                  ]}
                >
                  {labels[option]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  cardSubtitle: { fontSize: 14, marginBottom: 12 },
  label: { fontSize: 14, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  inputDisabled: {
    opacity: 0.6,
  },
  saveButton: { marginTop: 20, paddingVertical: 12, borderRadius: 6 },
  saveButtonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  themeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    padding: 12,
    marginHorizontal: 4,
  },
  themeButtonText: { flex: 1, textAlign: 'center', fontWeight: '500' },
  iconMarginRight: { marginRight: 6 },
});
