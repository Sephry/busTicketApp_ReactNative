import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Divider, RadioButton, useTheme } from "react-native-paper";
import Modal from "../../components/Modal";
import DateTimePicker from "../../components/DateTimePicker";
import { useNavigation } from "@react-navigation/native";

function BiletAra() {
  const [checked, setChecked] = useState("first");
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.ustContainer}>
        <View style={styles.radioContainer}>
          <Text style={styles.textA}>Gidiş</Text>
          <RadioButton
            color={theme.colors.secondColor}
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.textA}>Gidiş- Dönüş</Text>
          <RadioButton
            color={theme.colors.secondColor}
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
        </View>
      </View>

      <Modal />

      <View style={styles.dateContainer}>
        <View>
          <Text style={styles.textA}>Baslangic Tarihi </Text>
          <Text style={styles.textA}>gg/aa/yyyy </Text>
        </View>

        <Divider bold horizontalInset />

        <View>
          <Text style={styles.textA}>Bitis Tarihi </Text>
          <Text style={styles.textA}>gg/aa/yyyy </Text>
        </View>
      </View>

      <DateTimePicker />

      <TouchableOpacity
        style={styles.araBtn}
        onPress={() => navigation.navigate("Sefer Sec")}
      >
        <Text style={styles.textA}>Ara</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1B263B",
  },
  ustContainer: {
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  araBtn: {
    width: "80%",
    marginBottom: 50,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#415A77",
    color: "#E0E1DD",
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  textA: {
    color: "#e0e1dd",
  },
});

export default BiletAra;
