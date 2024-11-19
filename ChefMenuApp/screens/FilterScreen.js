import React, { useState } from 'react';
import { View, Text, FlatList, Picker, StyleSheet } from 'react-native';

const FilterScreen = ({ menuItems }) => {
  const [selectedCourse, setSelectedCourse] = useState('Starters');

  const filteredItems = menuItems.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <Picker selectedValue={selectedCourse} onValueChange={(value) => setSelectedCourse(value)}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{`${item.name} - $${item.price}`}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default FilterScreen;
