import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetallesConsejo = ({navigation}) => {
    const route = useRoute();
    const consejosItem = route.params?.listaConsejos;
    const { tema, descripcion } = consejosItem;

    return (
        <View style={container}>
            <Text style={title}>{tema}</Text>
            <Text style={description}>{descripcion}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 15,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      textAlign: 'justify',
    },
  });

const {container, title, description} = styles;

export default DetallesConsejo;