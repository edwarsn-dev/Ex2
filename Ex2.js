import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const imagenAmigo = 'https://cdn-icons-png.flaticon.com/128/166/166260.png';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <Amigo1 />
      <Amigo2 />
      <Amigo3 />
      <Amigo4 />
      <Amigo5 />
    </ScrollView>
  );
}

// Componente 1
function Amigo1() {
  return (
    <View style={styles1.card}>
      <Text style={styles1.name}>Carlos Méndez</Text>
      <Text style={styles1.city}>San Pedro Sula</Text>
      <Image source={{ uri: imagenAmigo }} style={styles1.image} />
    </View>
  );
}

const styles1 = StyleSheet.create({
  card: {
    backgroundColor: '#fce4ec',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#880e4f',
  },
  city: {
    fontSize: 14,
    color: '#ad1457',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
});

// Componente 2
function Amigo2() {
  return (
    <View style={styles2.card}>
      <Text style={styles2.name}>Lucía Torres</Text>
      <Text style={styles2.city}>La Ceiba</Text>
      <Image source={{ uri: imagenAmigo }} style={styles2.image} />
    </View>
  );
}

const styles2 = StyleSheet.create({
  card: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0d47a1',
  },
  city: {
    fontSize: 14,
    color: '#1565c0',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
});

// Componente 3
function Amigo3() {
  return (
    <View style={styles3.card}>
      <Text style={styles3.name}>José Martínez</Text>
      <Text style={styles3.city}>Choluteca</Text>
      <Image source={{ uri: imagenAmigo }} style={styles3.image} />
    </View>
  );
}

const styles3 = StyleSheet.create({
  card: {
    backgroundColor: '#e8f5e9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2e7d32',
  },
  city: {
    fontSize: 14,
    color: '#388e3c',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
});

// Componente 4
function Amigo4() {
  return (
    <View style={styles4.card}>
      <Text style={styles4.name}>Ana López</Text>
      <Text style={styles4.city}>Comayagua</Text>
      <Image source={{ uri: imagenAmigo }} style={styles4.image} />
    </View>
  );
}

const styles4 = StyleSheet.create({
  card: {
    backgroundColor: '#fff3e0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ef6c00',
  },
  city: {
    fontSize: 14,
    color: '#f57c00',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
});

// Componente 5
function Amigo5() {
  return (
    <View style={styles5.card}>
      <Text style={styles5.name}>Daniela Reyes</Text>
      <Text style={styles5.city}>Tegucigalpa</Text>
      <Image source={{ uri: imagenAmigo }} style={styles5.image} />
    </View>
  );
}

const styles5 = StyleSheet.create({
  card: {
    backgroundColor: '#f3e5f5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#6a1b9a',
  },
  city: {
    fontSize: 14,
    color: '#8e24aa',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
});
