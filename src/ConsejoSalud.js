import React from 'react'; /* Se importan las funciones necesarias desde 'react' */
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native'; /* Se importan los componentes necesarios desde 'react-native' */

const ConsejoSalud = ({ navigation }) => { /* Componente principal de la pantalla que tiene 'navigation' como parámetro para poder navegar a otra pantalla */
  const consejos = [{ tema: 'Alimentación saludable', descripcion: 'Limite los azúcares añadidos: Demasiada azúcar añadida en su dieta puede contribuir al aumento de peso, la obesidad, la diabetes tipo 2 y las enfermedades del corazón.', imagen: require('../imagenes/alimentacion-saludable.png') },
  { tema: 'Visión', descripcion: 'Protegerse de los rayos solares: La radiación solar es una muy frecuente situación que afecta a la vista. Dado esto, los filtros para lentes, o bien, los anteojos solares son muy necesarios. Esto prevendría daños en el cristalino, estructura que se sitúa detrás del iris del ojo.', imagen: require('../imagenes/ojo.png') },
  { tema: 'Corazón', descripcion: 'Hacer ejercicios físicos: Como mínimo, se recomienda que uno haga al menos 150 minutos de ejercicio moderado cada semana para reducir el riesgo de enfermedad cardíaca.', imagen: require('../imagenes/corazon.png') },
  { tema: 'Salud ósea', descripcion: 'Incorpora la actividad física a tu rutina diaria: Las actividades en las que se sostiene el peso, como caminar, trotar y subir escaleras, pueden ayudarte a fortalecer los huesos y retardar la pérdida ósea.', imagen: require('../imagenes/rayos-x.png') }
  ]; /* Arreglo de objetos que contiene la información para los consejos */
  return (
    <View style={container}>
      <View>
        <FlatList
          data={consejos}
          renderItem={({ item }) => (
            <TouchableOpacity style={listItem} key={item.id} onPress={() => navigation.navigate('DetallesConsejo', { listaConsejos: item })}>
              <Image source={item.imagen} style={image} />
              <Text style={title}>{item.tema}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id?.toString()}
        />
      </View>
      <TouchableOpacity style={agendaButton} onPress={() => navigation.navigate('AgendaCita')}>
        <Text style={buttonText}>Ir a la agenda</Text>
      </TouchableOpacity>
    </View>
  );
};

/* Creación de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8eac9',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  agendaButton: {
    backgroundColor: '#d14a7b',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

/* Aplicando desestructuración a los estilos */
const { container, listItem, image, title, agendaButton, buttonText } = styles;

/* Exportando el componente principal de la pantalla */
export default ConsejoSalud;