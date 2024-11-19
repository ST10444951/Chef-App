import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, menuItems }) => {
  const calculateAverage = (course) => {
    const filtered = menuItems.filter((item) => item.course === course);
    const total = filtered.reduce((sum, item) => sum + item.price, 0);
    return filtered.length ? (total / filtered.length).toFixed(2) : 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{`${item.name} - ${item.course} - $${item.price}`}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>Total Items: {menuItems.length}</Text>
      <Text>Average Prices:</Text>
      <Text>Starters: ${calculateAverage('Starters')}</Text>
      <Text>Mains: ${calculateAverage('Mains')}</Text>
      <Text>Desserts: ${calculateAverage('Desserts')}</Text>
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('Filter')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default HomeScreen;
