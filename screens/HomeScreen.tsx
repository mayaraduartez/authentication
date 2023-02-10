import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import Profile from "./Profile";
import ListarUsuarios from "./ListarUsuarios";
import ManterCachorro from "./ManterCachorro";

const Drawer = createDrawerNavigator();


function ProfileScreen({ navigation }) {
  return <Profile></Profile>;
}
function ListarUsuariosScreen({ navigation }) {
  return <ListarUsuarios></ListarUsuarios>;
}

function ManterCachorroScreen({navigation}){
  return <ManterCachorro></ManterCachorro>;
}

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="ListarUsuarios" component={ListarUsuariosScreen} />
      <Drawer.Screen name="Manter Dog" component={ManterCachorroScreen} />
    </Drawer.Navigator>
  );
};
export default HomeScreen;


