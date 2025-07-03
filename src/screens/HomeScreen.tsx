import React, { useState } from 'react';    // ← importe useState
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { mockLista } from '../data/mockData';

type ListType = {
  id: string;
  name: string;
  total: number;
  bought: number;
};

export default function HomeScreen() {
  // ← defina aqui os estados que você estava usando
  const [modalVisible, setModalVisible] = useState(false);
  const [newListName, setNewListName] = useState('');

  const handleCreateList = () => {
    // aqui você chamaria sua API passando `newListName`
    // depois limpa o campo e fecha o modal, por exemplo:
    setNewListName('');
    setModalVisible(false);
  };

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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Listas</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>+ Criar Nova Lista</Text>
      </TouchableOpacity>

      <FlatList
        data={mockLista.map(item => ({
          id: item.id,
          name: item.nome,
          total: 2,
          bought: item.comprado ? 1 : 0,
        }))}
        keyExtractor={item => item.id}
        renderItem={renderListItem}
      />

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Criar Nova Lista de Compras
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Compras da Semana, Viagem"
              value={newListName}
              onChangeText={setNewListName}
            />
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreateList}
            >
              <Text style={styles.createButtonText}>Criar Lista</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#121212' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 16 },
  button: { backgroundColor: '#ff8c65', padding: 12, borderRadius: 8, marginBottom: 16 },
  buttonText: { color: '#fff', textAlign: 'center' },
  listCard: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  listName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  listProgress: {
    fontSize: 14,
    color: '#ccc',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 16,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ff8c65',
    borderRadius: 8,
    padding: 8,
    color: '#fff',
    marginBottom: 12,
  },
  createButton: {
    backgroundColor: '#ff8c65',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  createButtonText: { color: '#fff', textAlign: 'center' },
  cancelText: { color: '#ff8c65', textAlign: 'center' },
});
