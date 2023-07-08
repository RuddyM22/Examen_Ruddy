import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const ConsejoSalud = ({ navigation }) => {
  const consejos = [{tema: 'Alimentación saludable', descripcion: 'Limite los azúcares añadidos: Demasiada azúcar añadida en su dieta puede contribuir al aumento de peso, la obesidad, la diabetes tipo 2 y las enfermedades del corazón. '}, 
                    {tema: 'Visión', descripcion: 'Protegerse de los rayos solares: La radiación solar es una muy frecuente situación que afecta a la vista. Dado esto, los filtros para lentes, o bien, los anteojos solares son muy necesarios. Esto prevendría daños en el cristalino, estructura que se sitúa detrás del iris del ojo.'}, 
                    {tema: 'Corazón', descripcion: 'Hacer ejercicios físicos: Como mínimo, se recomienda que uno haga al menos 150 minutos de ejercicio moderado cada semana para reducir el riesgo de enfermedad cardíaca.'}, 
                    {tema: 'Salud ósea', descripcion: 'Incorpora la actividad física a tu rutina diaria: Las actividades en las que se sostiene el peso, como caminar, trotar y subir escaleras, pueden ayudarte a fortalecer los huesos y retardar la pérdida ósea.'}, 
                    {}
                  ];
  return (
    <View>
      <View>
        <FlatList
          data={consejos}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetallesConsejo', {listaConsejos:item})}>
              <Text>{item.tema}</Text>
            </TouchableOpacity>
          )}
          keyExtractor = {(item) => item.id?.toString()}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AgendaCita')}>
        <Text>Ir a la agenda</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConsejoSalud;