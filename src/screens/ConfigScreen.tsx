import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Appearance,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ThemeContext, ThemeOption } from '../context/ThemeContext';
import { useAppTheme } from '../hooks/useAppTheme';

const labels: Record<ThemeOption, string> = {
  light: 'Claro',
  dark: 'Escuro',
  system: 'Sistema',
};

export default function ConfigScreen() {
  const { choice, setChoice } = useContext(ThemeContext);
  const theme = useAppTheme();

  // Determina o tema efetivo (incluindo 'system')
  const systemScheme = Appearance.getColorScheme();
  const effective: ThemeOption =
    choice === 'system' ? (systemScheme ?? 'light') : choice;

  // Define cor do texto dos botões
  const buttonTextColor = (opt: ThemeOption) =>
    effective === 'dark' || choice === opt ? '#fff' : theme.colors.text;

  const [displayName, setDisplayName] = useState('Usuário Exemplo');
  const [userEmail] = useState('usuario@exemplo.com');

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* === Suas Informações === */}
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
          <View style={styles.disabledInputWrapper}>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.inputBackground,
                  color: theme.colors.text,
                },
              ]}
              value={userEmail}
              editable={false}
            />
          </View>

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

        {/* === Aparência === */}
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
            {(Object.keys(labels) as ThemeOption[]).map(option => {
              const iconName =
                option === 'light'
                  ? 'sun'
                  : option === 'dark'
                  ? 'moon'
                  : 'settings'; // engrenagem para “Sistema”
              return (
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
                    name={iconName}
                    size={20}
                    color={buttonTextColor(option)}
                    style={styles.iconMarginRight}
                  />
                  <Text
                    style={[
                      styles.themeButtonText,
                      { color: buttonTextColor(option) },
                    ]}
                  >
                    {labels[option]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
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
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  saveButton: {
    marginTop: 20,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    padding: 12,
    marginHorizontal: 4,
  },
  themeButtonText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
  },
  iconMarginRight: {
    marginRight: 6,
  },
  disabledInputWrapper: {
    opacity: 0.6,
  },
});
