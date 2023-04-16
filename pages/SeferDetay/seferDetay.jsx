import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import BusSeat from "../../components/BusSeat";
import { Portal, Modal } from "react-native-paper";
import KoltukInput from "../../components/KoltukInput";
import { useNavigation } from "@react-navigation/native";
import { list } from "./../../components/BusSeat";

function SeferDetay({ route }) {
  const { firmaName, fiyat, kalkisSaati, bosKoltuk, koltukTipi } = route.params;

  const navigation = useNavigation();

  let koltukType = false;
  if (koltukTipi === "2 + 2") {
    koltukType = true;
  } else {
    koltukType = false;
  }

  const [visible, setVisible] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: "#0D1B2A",
    margin: 40,
    borderRadius: 30,
  };
  const [fiyatChange, setFiyatChange] = useState(fiyat);

  const [count, setCount] = useState(1);
  const [inputList, setInputList] = useState([]);

  const handleYolcuEkle = () => {
    const newCount = count + 1;
    const newComponent = <KoltukInput key={count} koltukNo={bosKoltuk} />;
    if (newCount === 3) {
      console.log(newCount);
      setDisabledBtn(true);
    }
    let newFiyat = fiyat * (count + 1);
    setFiyatChange(newFiyat);
    setCount(newCount);
    setInputList([...inputList, newComponent]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.firmaTitle}>{firmaName}</Text>

      {inputList.map((component) => component)}
      <KoltukInput key={count} koltukNo={bosKoltuk} />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <BusSeat layout={koltukType} />
        </Modal>
      </Portal>
      <TouchableOpacity
        style={styles.btnSec}
        disabled={disabledBtn}
        onPress={handleYolcuEkle}
      >
        <Text style={styles.cardtext}>Yolcu Ekle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSec} onPress={showModal}>
        <Text style={styles.cardtext}>Koltuk Seç</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSatinAl}
        onPress={() => navigation.navigate("Odeme Ekrani")}
      >
        <Text style={styles.fiyatText}>{fiyatChange} TL</Text>
        <Text style={styles.satinAlText}>Satın Al</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B263B",
    alignItems: "center",
  },
  firmaTitle: {
    color: "#E0E1DD",
    fontSize: 35,
    margin: 25,
  },
  btnSec: {
    backgroundColor: "#415A77",
    padding: 10,
    width: "50%",
    margin: 5,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  cardtext: {
    color: "#E0E1DD",
    fontSize: 15,
  },
  btnSatinAl: {
    backgroundColor: "#415A77",
    padding: 10,
    width: "80%",
    height: "10%",
    margin: 5,
    marginBottom: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  satinAlText: {
    color: "#E0E1DD",
    fontSize: 20,
    fontWeight: "bold",
  },
  fiyatText: {
    color: "#E0E1DD",
    fontSize: 15,
  },
});
export default SeferDetay;
