import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import {router} from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='#161616'/>
      <View>
        <View style={{margin: 5}}>
          <View style={{width: 200, alignSelf: "center"}}><Text style={styles.textLabel}>Usuário</Text></View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={{margin: 5}}>
          <View style={{width: 200, alignSelf: "center"}}><Text style={styles.textLabel}>Senha</Text></View>
          <TextInput style={styles.textInput} />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={() => router.navigate("/home")}>
        <Text style={styles.textLogin}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center"
  },
  textLabel: {
    color: "white",
  },
  textInput: {
    width: 200,
    height: 35,
    borderColor: "#FB941B",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    alignSelf: "center"
  },
  buttonLogin: {
    backgroundColor: "#FB941B",
    width: 200,
    height: 35,
    borderRadius: 4,
    justifyContent: "center",
    alignSelf: "center",
    margin: 15,
  },
  textLogin: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18
  }
});
