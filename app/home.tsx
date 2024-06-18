import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Notification from 'expo-notifications'

Notification.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: true,
        shouldShowAlert: true
    })
})

export default function Home(){

    async function handleNotification(){
        const status = await Notification.getPermissionsAsync()
        if(!status.granted) {
            Alert.alert("Alerta", "Sem permissão")
        }
        Notification.scheduleNotificationAsync({
            content: {
                title: "Pix recebido",
                body: "\nTeste"
            },
            trigger: null
        })
    }

    return(
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#161616'/>

            <View style={{height: 70, marginBottom: 50}}>
                <Text style={styles.label}>Icones</Text>
                <ScrollView style={styles.scrollIcon} horizontal={true}></ScrollView>
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} keyboardType="default" />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={styles.label}>Valor</Text>
                <TextInput style={styles.input} keyboardType="numeric"  />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={styles.label}>Intervalo</Text>
                <TextInput style={{...styles.input, width: 40}} keyboardType="numeric"  />
            </View>

            <View>
                <Text style={styles.label}>Mensagem</Text>
                <TextInput style={{...styles.input, width: 250, height: 95}}/>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNotification}>
                <Text style={{color: "white", fontSize: 18, fontWeight: "500"}}>Enviar Notificação</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#161616",
        width: "100%",
        height: "100%",
        paddingTop: 100
    },
    scrollIcon: {
        width: 315,
        backgroundColor: "white",
        marginLeft: 20,
        borderRadius: 5,
    },
    label: {
        color: "white",
        marginLeft: 20,
        marginBottom: 5,
    },
    input: {
        width: 200,
        height: 35,
        backgroundColor: "white",
        borderRadius: 5,
        marginLeft: 20
    },
    button: {
        backgroundColor: "#FB941B",
        alignSelf: "center",
        width: 240,
        height: 35,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 50
    }
})