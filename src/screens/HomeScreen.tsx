import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { useAppTheme } from '../hooks/useAppTheme';
import { mockListas } from '../data/mockData';

type ListType = {
  id: string;
  name: string;
  total: number;
  bought: number;
};

export default function HomeScreen() {
  const theme = useAppTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [newListName, setNewListName] = useState('');

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          padding: 16,
          backgroundColor: theme.colors.background,
        },
        header: {
          fontSize: 24,
          fontWeight: 'bold',
          color: theme.colors.heading,
          marginBottom: 16,
        },
        button: {
          backgroundColor: theme.colors.primary,
          padding: 12,
          borderRadius: 8,
          marginBottom: 16,
        },
        buttonText: {
          color: '#FFF',
          textAlign: 'center',
          fontWeight: '600',
        },
        listCard: {
          backgroundColor: theme.colors.card,
          padding: 16,
          borderRadius: 8,
          marginBottom: 12,
          borderWidth: 1,
          borderColor: theme.colors.border,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 2,
        },
        listName: {
          fontSize: 18,
          fontWeight: '600',
          color: theme.colors.heading,
          marginBottom: 4,
        },
        listProgress: {
          fontSize: 14,
          color: theme.colors.text,
        },
        modalOverlay: {
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          padding: 24,
        },
        modalContent: {
          backgroundColor: theme.colors.card,
          borderRadius: 8,
          padding: 16,
        },
        modalTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          color: theme.colors.heading,
          marginBottom: 12,
        },
        input: {
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: 8,
          padding: 8,
          color: theme.colors.text,
          backgroundColor: theme.colors.inputBackground,
          marginBottom: 12,
        },
        createButton: {
          backgroundColor: theme.colors.primary,
          padding: 12,
          borderRadius: 8,
          marginBottom: 8,
        },
        createButtonText: {
          color: '#FFF',
          textAlign: 'center',
        },
        cancelText: {
          color: theme.colors.primary,
          textAlign: 'center',
        },
      }),
    [theme],
  );

  // Usa mockListas, e garante array vazio se undefined
  // Define the type for items in mockLista if not already defined
  type MockListaItemType = {
    id: string;
    nome: string;
    itens: { comprado: boolean }[];
  };

  const data: ListType[] = (mockListas ?? []).map((lista: MockListaItemType) => ({
    id: lista.id,
    name: lista.nome,
    total: lista.itens.length,
    bought: lista.itens.filter(i => i.comprado).length,
  }));

  function renderListItem({ item }: { item: ListType }) {
    const progress = (item.bought / item.total) * 100;
    return (
      <View style={styles.listCard}>
        <Text style={styles.listName}>{item.name}</Text>
        <Text style={styles.listProgress}>
          {item.bought} de {item.total} compras ({progress.toFixed(0)}%)
        </Text>
      </View>
    );
  }

  const handleCreateList = () => {
    setNewListName('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Listas</Text>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>+ Criar Nova Lista</Text>
      </TouchableOpacity>

      <FlatList data={data} keyExtractor={item => item.id} renderItem={renderListItem} />

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Criar Nova Lista de Compras</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Compras da Semana, Viagem"
              placeholderTextColor={theme.colors.placeholder}
              value={newListName}
              onChangeText={setNewListName}
            />
            <TouchableOpacity style={styles.createButton} onPress={handleCreateList}>
              <Text style={styles.createButtonText}>Criar Lista</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
