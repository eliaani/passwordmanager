import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { DataContext } from './dataprovider';
import { Button } from 'react-native';

export default function Passwordlist({ handleDelete, handleEdit, editable }) {

  const { data } = useContext(DataContext)
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.entry}>
        <View style={styles.entryInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.password}>***************</Text>
        </View>
        {editable ?
          <View style={styles.entryButtons}>
            <Button
              onPress={() => handleEdit(index)}
              title="EDIT "
              color="green"
            />
            <Button
              onPress={() => handleDelete(index)}
              title="DELETE "
              color="red"
            />
          </View>
          : null}
        {!editable ?
          <View style={styles.entryButtons}>
            <Button
              onPress={() => navigator.clipboard.writeText(item.password)}
              title="COPY "
              color="#000000"
            />
          </View>
          : null}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  passwordInputText: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  generateButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  generateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    width: 380,
    marginTop: 20
  },
  entry: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  entryInfo: {
    flex: 1,
  },
  entryButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 10
  },
  username: {
    marginTop: 5,
  },
  password: {
    marginTop: 5,
  },
  passwordHidden: {
    marginTop: 5,
    color: '#ccc',
  },
});