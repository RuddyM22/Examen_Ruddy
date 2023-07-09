import React, { useState } from 'react'; /* Se importan las funciones necesarias desde 'react' */
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'; /* Se importan los componentes necesarios desde 'react-native' */

const AgendaCita = ({ navigation }) => { /* Componente principal de la pantalla que tiene 'navigation' como parámetro para poder navegar a otra pantalla */
    const [citas, setCitas] = useState([]); /* Se crea un arreglo vacío como variable de estado que permitirá almacenar los registros de las citas */
    const [nombres, setNombres] = useState(''); /* Se crea la variable de estado 'nombres' para almacenar los nombres de la persona que agenda la cita en cada registro */
    const [apellidos, setApellidos] = useState(''); /* Se crea la variable de estado 'apellidos' para almacenar los apellidos de la persona que agenda la cita en cada registro */
    const [fechaCita, setFechaCita] = useState(''); /* Se crea la variable de estado 'fechaCita' para almacenar la fecha de la cita agendada en cada registro */
    const [especialidad, setEspecialidad] = useState(''); /* Se crea la variable de estado 'especialidad' para almacenar la especialidad solicitada en cada registro de cita */

    const agregarCita = () => { /* Función para agregar un nuevo registro de cita al arreglo de objetos 'citas' */
        if (nombres.trim() !== '' && apellidos.trim() !== '' && fechaCita.trim() !== '' && especialidad.trim() !== '') { /* Se comprueba que los campos no estén vacíos al registrar una cita */
            setCitas([...citas, { nombres, apellidos, fechaCita, especialidad }]); /* Se agrega el nuevo registro al arreglo */
            setNombres(''); /* Se limpian los campos para un posible nuevo registro */
            setApellidos('');
            setFechaCita('');
            setEspecialidad('');
        }
    };

    return (
        <View style={container}>
            <Image source={require('../imagenes/cita-medica.png')} style={image} />
            <View style={formContainer}>
                <Text style={title}>Agendar citas médicas</Text>
                <TextInput style={input} placeholder='Nombres' value={nombres} onChangeText={(text) => setNombres(text)} />
                <TextInput style={input} placeholder='Apellidos' value={apellidos} onChangeText={(text) => setApellidos(text)} />
                <TextInput style={input} placeholder='Fecha de cita' value={fechaCita} onChangeText={(text) => setFechaCita(text)} />
                <TextInput style={input} placeholder='Especialidad requerida' value={especialidad} onChangeText={(text) => setEspecialidad(text)} />

                <TouchableOpacity onPress={agregarCita} style={buttonContainer}>
                    <Text style={buttonText}>AGENDAR CITA</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={buttonContainer} onPress={() => navigation.navigate('HistorialMed', { listaCitas: citas })}>
                <Text style={buttonText}>Ir al historial</Text>
            </TouchableOpacity>
        </View>
    );
};

/* Creación de estilos */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8eac9',
    },
    formContainer: {
        width: '80%',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'black',
        color: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#d14a7b',
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        marginBottom: 25,
    }
});

/* Aplicando desestructuración a los estilos */
const { container, formContainer, title, input, buttonContainer, buttonText, image } = styles;

/* Exportando el componente principal de la pantalla */
export default AgendaCita;