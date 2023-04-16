import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CreditCard from "../../components/CreditCard";
import { Checkbox, TextInput } from "react-native-paper";
import { CheckBox } from "react-native-web";

const OdemeEkrani = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <CreditCard />

      <View style={styles.form}>
        <View style={styles.formItem}>
          <TextInput style={styles.formInput} placeholder="Adinizi Giriniz" />
        </View>
        <View style={styles.formItem}>
          <TextInput
            style={styles.formInput}
            placeholder="Kart Numaranizi Girniz"
          />
        </View>
        <View style={styles.formItem}>
          <TextInput
            style={styles.formInput}
            placeholder="Kart Tarihini Giriniz"
          />
        </View>
        <View style={styles.formItem}>
          <TextInput style={styles.formInput} placeholder="CCV Giriniz" />
        </View>

        <View style={styles.formCheckBox}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.checkBoxText}>
            Kullanım Koşullarını Kobul Ediyorum
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btnOde}>
        <Text style={styles.satinAlText}>Satın Al</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OdemeEkrani;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  form: {
    height: "50%",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  formItem: {},
  formInput: {
    marginVertical: 5,
    borderRadius: 10,
  },
  btnOde: {
    position: "relative",
    backgroundColor: "#415A77",
    padding: 10,
    width: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  satinAlText: {
    color: "#E0E1DD",
    fontSize: 20,
    fontWeight: "bold",
  },
  formCheckBox: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxText: {
    color: "#415A77",
    fontSize: 18,
  },
});
