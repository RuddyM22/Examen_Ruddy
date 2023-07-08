import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

const HistorialMed = ({ navigation }) => {
    const route = useRoute();
    const citasItem = route.params?.listaCitas;

    return (
        <View>
            <FlatList
                data={citasItem}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <Text>{item.nombres}</Text>
                    <Text>{item.apellidos}</Text>
                    <Text>{item.fechaCita}</Text>
                    <Text>{item.especialidad}</Text>
                  </TouchableOpacity>
                )}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ConsejoSalud')}>
                <Text>Ver consejos</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HistorialMed;