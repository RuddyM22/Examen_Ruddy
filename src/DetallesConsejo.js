import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetallesConsejo = ({navigation}) => {
    const route = useRoute();
    const consejosItem = route.params?.listaConsejos;

    return (
        <View>
            <Text>{consejosItem.tema}</Text>
            <Text>{consejosItem.descripcion}</Text>
        </View>
    )
}

export default DetallesConsejo;