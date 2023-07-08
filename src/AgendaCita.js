import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

const AgendaCita = ({ navigation }) => {
    const [citas, setCitas] = useState([{nombres, apellidos, fechaCita, especialidad}]);
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fechaCita, setFechaCita] = useState('');
    const [especialidad, setEspecialidad] = useState('');

    const agregarCita = () => {
        if (nombres.trim() !== '' && apellidos.trim() !== '' && fechaCita.trim() !== '' && especialidad.trim() !== '') {
            setCitas([...citas, { nombres, apellidos, fechaCita, especialidad }]);
            setNombres('');
            setApellidos('');
            setFechaCita('');
            setEspecialidad('');
        }
    };

    return (
        <View>
            <View>
                <Text>Agendar citas médicas</Text>
                <TextInput placeholder='Nombres' value={nombres} onChangeText={(text) => setNombres(text)} />
                <TextInput placeholder='Apellidos' value={apellidos} onChangeText={(text) => setApellidos(text)} />
                <TextInput placeholder='Fecha de cita' value={fechaCita} onChangeText={(text) => setFechaCita(text)} />
                <TextInput placeholder='Especialidad requerida' value={especialidad} onChangeText={(text) => setEspecialidad(text)} />

                <Button title='Agendar cita' onPress={agregarCita}/>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('HistorialMed', {listaCitas:citas})}>
                <Text>Ir al historial</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AgendaCita;