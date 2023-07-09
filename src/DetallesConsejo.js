import React from 'react'; /* Se importan las funciones necesarias desde 'react' */
import { View, Text, StyleSheet } from 'react-native'; /* Se importan los componentes necesarios desde 'react-native' */
import { useRoute } from '@react-navigation/native'; /* Se importa el Hook 'useRoute' */

const DetallesConsejo = ({navigation}) => { /* Componente principal de la pantalla que tiene 'navigation' como parámetro para poder navegar a otra pantalla */
    const route = useRoute(); /* Se utiliza el Hook 'useRoute' para obtener los datos del arreglo que contiene los consejos de la otra pantalla */
    const consejosItem = route.params?.listaConsejos; /* Se almacenan los datos de 'useRoute' en la variable 'consejosItem' */
    const { tema, descripcion } = consejosItem; /* Se aplica desestructuración a 'consejosItem' */

    return (
        <View style={container}>
            <Text style={title}>{tema}</Text>
            <Text style={description}>{descripcion}</Text>
        </View>
    )
}

/* Creación de estilos */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#f8eac9',
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

/* Aplicando desestructuración a los estilos */
const {container, title, description} = styles;

/* Exportando el componente principal de la pantalla */
export default DetallesConsejo;