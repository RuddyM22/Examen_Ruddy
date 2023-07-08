import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const ConsejoSalud = ({ navigation }) => {
  const consejos = [{tema: 'Alimentación saludable', descripcion: 'Limite los azúcares añadidos: Demasiada azúcar añadida en su dieta puede contribuir al aumento de peso, la obesidad, la diabetes tipo 2 y las enfermedades del corazón.', imagen: require('../imagenes/alimentacion-saludable.png')}, 
                    {tema: 'Visión', descripcion: 'Protegerse de los rayos solares: La radiación solar es una muy frecuente situación que afecta a la vista. Dado esto, los filtros para lentes, o bien, los anteojos solares son muy necesarios. Esto prevendría daños en el cristalino, estructura que se sitúa detrás del iris del ojo.', imagen: require('../imagenes/ojo.png')}, 
                    {tema: 'Corazón', descripcion: 'Hacer ejercicios físicos: Como mínimo, se recomienda que uno haga al menos 150 minutos de ejercicio moderado cada semana para reducir el riesgo de enfermedad cardíaca.', imagen: require('../imagenes/corazon.png')}, 
                    {tema: 'Salud ósea', descripcion: 'Incorpora la actividad física a tu rutina diaria: Las actividades en las que se sostiene el peso, como caminar, trotar y subir escaleras, pueden ayudarte a fortalecer los huesos y retardar la pérdida ósea.', imagen: require('../imagenes/rayos-x.png')}
                  ];
  return (
    <View style={container}>
      <View>
        <FlatList 
          data={consejos}
          renderItem={({ item }) => (
            <TouchableOpacity style={listItem} key={item.id} onPress={() => navigation.navigate('DetallesConsejo', {listaConsejos:item})}>
              <Image source={item.imagen} style={image}/>
              <Text style={title}>{item.tema}</Text>
            </TouchableOpacity>
          )}
          keyExtractor = {(item) => item.id?.toString()}
        />
      </View>
      <TouchableOpacity style={agendaButton} onPress={() => navigation.navigate('AgendaCita')}>
        <Text style={title}>Ir a la agenda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
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
    backgroundColor: 'lightblue',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
  },
});

const {container, listItem, image, title, agendaButton} = styles;

export default ConsejoSalud;