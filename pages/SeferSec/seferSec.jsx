import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SeferCard from "../../components/SeferCard";

function SeferSec() {
  return (
    <ScrollView style={styles.container}>
      <SeferCard firmaName={"Metro"} fiyat="500" kalkisSaati="20:30" />
      <SeferCard firmaName={"Varan"} fiyat="250" kalkisSaati="14:00" />
      <SeferCard firmaName={"Kamil Koç"} fiyat="300" kalkisSaati="00:30" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B263B",
  },
});
export default SeferSec;
