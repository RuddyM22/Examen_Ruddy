import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AgendaCita from "./src/AgendaCita";
import HistorialMed from "./src/HistorialMed";
import ConsejoSalud from "./src/ConsejoSalud";
import DetallesConsejo from "./src/DetallesConsejo";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AgendaCita"
          component={AgendaCita}
          options={{ title: 'Agendar Cita' }}
        />
        <Stack.Screen
          name="HistorialMed"
          component={HistorialMed}
          options={{ title: 'Historial médico' }}
        />
        <Stack.Screen
          name="ConsejoSalud"
          component={ConsejoSalud}
          options={{ title: 'Consejos para la salud' }}
        />
        <Stack.Screen
          name="DetallesConsejo"
          component={DetallesConsejo}
          options={{ title: 'Detalles de consejo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;