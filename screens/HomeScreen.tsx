import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import Profile from "./Profile";
import ListarUsuarios from "./ListarUsuarios";

const Drawer = createDrawerNavigator();


function ProfileScreen({ navigation }) {
  return <Profile></Profile>;
}
function ListarUsuariosScreen({ navigation }) {
  return <ListarUsuarios></ListarUsuarios>;
}

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="ListarUsuarios" component={ListarUsuariosScreen} />
    </Drawer.Navigator>
  );
};
export default HomeScreen;


