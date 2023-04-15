import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const [_, setUser] = useAuth();

  const handleRegister = () => {
    setUser({
      email,
      password,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Ticket</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputRepeat}
          placeholder="Password Repeat"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 15 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>
          Hesabınız var mı? Burdan hemen giriş yapabilirsiniz.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D1B2A",
  },
  title: {
    fontSize: 24,
    color: "#E0E1DD",
    height: "10%",
  },
  inputView: {
    backgroundColor: "#778DA9",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    color: "#E0E1DD",
    flex: 1,
    padding: 10,
  },
  TextInputRepeat: {
    height: 50,
    color: "#E0E1DD",
    flex: 1,
    padding: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#E0E1DD",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#415A77",
    color: "#E0E1DD",
  },
  loginText: {
    color: "#e0e1dd",
  },
});

export default Register;
