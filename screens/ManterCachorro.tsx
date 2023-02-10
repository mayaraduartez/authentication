import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import React,{useEffect, useState} from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import {auth, firestore, storage} from "../firebase";
import { Cachorro } from "../model/Cachorro";
import meuestilo from "../meuestilo";

const ManterCachorro=()=>{
    const[formCachorro, SetFormCachorro]=useState<Partial<Cachorro>>({})
    const cachorroRef=firestore.collection('Usuario').doc(auth.currentUser?.uid).collection('Cachorro')

    const limparFormulario=()=>{
        SetFormCachorro({})
    }

    const cancelar=()=>{
        limparFormulario()

}

    const salvar=async()=>{
        const cachorro=new Cachorro(formCachorro)
        const cachorroRefComId=cachorroRef.doc()
        cachorro.id=cachorroRefComId.id
        cachorroRefComId.set(cachorro.toFirestore()).then(()=>{
            alert("Cachorro Salvo " + cachorro.nome)
        })
        limparFormulario()
    }

    return(
        <View style={meuestilo.container}>
            <TextInput
            placeholder="Nome do Cachorro"
            style={meuestilo.input}
            value={formCachorro.nome}
            onChangeText={val=>SetFormCachorro({
                ...formCachorro, nome: val})}
            ></TextInput>

            <TextInput
            placeholder="Sexo"
            style={meuestilo.input}
            value={formCachorro.sexo}
            onChangeText={val=>SetFormCachorro({
                ...formCachorro, sexo: val})}
            ></TextInput>

            <TextInput
            placeholder="Raça"
            style={meuestilo.input}
            value={formCachorro.raca}
            onChangeText={val=>SetFormCachorro({
                ...formCachorro, raca: val})}
            ></TextInput>

            <TextInput
            placeholder="Data de Nascimento"
            style={meuestilo.input}
            value={formCachorro.datanascimento}
            onChangeText={val=>SetFormCachorro({
                ...formCachorro, datanascimento: val})}
            ></TextInput>
            
            <Pressable 
            onPress={salvar}
            style={(meuestilo.button,
                    meuestilo.buttonOutline)}
            >
                <Text style={meuestilo.buttonOutlineText}>
                    Salvar
                </Text>
            </Pressable>

        </View>
        
    )
}
export default ManterCachorro;