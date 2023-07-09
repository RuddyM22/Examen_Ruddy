import React from 'react'; /* Se importan las funciones necesarias desde 'react' */
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'; /* Se importan los componentes necesarios desde 'react-native' */
import { useRoute } from '@react-navigation/native'; /* Se importa el Hook 'useRoute' */

const HistorialMed = ({ navigation }) => { /* Componente principal de la pantalla que tiene 'navigation' como parámetro para poder navegar a otra pantalla */
    const route = useRoute(); /* Se utiliza el Hook 'useRoute' para obtener los datos del arreglo de la otra pantalla */
    const citasItem = route.params?.listaCitas; /* Se almacenan los datos de 'useRoute' en la variable 'citasItem' */

    return (
        <View style={container}>
            <Text style={title}>Historial de citas</Text>
            <FlatList
                data={citasItem}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={historialItem}>
                        <Text style={textSpace}>--------------------------------------------------------------</Text>
                        <Text style={historialText}>Nombres: {item.nombres}</Text>
                        <Text style={historialText}>Apellidos: {item.apellidos}</Text>
                        <Text style={historialText}>Fecha de cita: {item.fechaCita}</Text>
                        <Text style={historialText}>Especialidad de cita: {item.especialidad}</Text>
                        <Text style={textSpace}>--------------------------------------------------------------</Text>
                    </View>
                )}
            />

            <TouchableOpacity style={buttonContainer} onPress={() => navigation.navigate('ConsejoSalud')}>
                <Text style={buttonText}>Ver consejos</Text>
            </TouchableOpacity>
        </View>
    );
};

/* Creación de estilos */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f8eac9',
    },
    title:{
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    historialItem: {
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 10,
        padding: 20,
        backgroundColor: 'white',
        borderColor: '#d14a7b',
        borderWidth: 2,
    },
    historialText: {
        color: 'black',
        fontSize: 15,
        marginBottom: 2,
        
    },
    textSpace:{
        color: 'gray',
        fontWeight: 'bold'
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
});

/* Aplicando desestructuración a los estilos */
const { container, title, historialItem, historialText, textSpace, buttonContainer, buttonText } = styles;

/* Exportando el componente principal de la pantalla */
export default HistorialMed;