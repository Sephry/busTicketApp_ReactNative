import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

const SeferCard = ({ firmaName, fiyat, kalkisSaati }) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.containerCard}>
      <Card.Content style={styles.firmaCard}>
        <Text style={styles.firmaText}>{firmaName}</Text>
      </Card.Content>
      <Card.Actions>
        <Card.Content style={{}}>
          <Text style={styles.firmaText}>{kalkisSaati}</Text>
        </Card.Content>
        <Card.Content style={{}}>
          <Text style={styles.firmaText}>{fiyat} TL</Text>
        </Card.Content>
        <TouchableOpacity
          style={styles.btnSec}
          onPress={() => navigation.navigate("Sefer Detay")}
        >
          <Text style={styles.cardtext}>Koltuk Seç</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    padding: 5,
    margin: 5,
    backgroundColor: "#415A77",
  },
  firmaCard: {},
  firmaText: {
    fontSize: 20,
    color: "#E0E1DD",
  },
  cardtext: {
    color: "#E0E1DD",
    fontSize: 15,
    marginHorizontal: 20,
  },
  fiyatText: {
    color: "#E0E1DD",
    fontSize: 18,
  },
  btnSec: {
    backgroundColor: "#1B263B",
    padding: 10,
    margin: 5,
  },
});

export default SeferCard;
