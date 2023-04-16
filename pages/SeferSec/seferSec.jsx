import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SeferCard from "../../components/SeferCard";

function SeferSec() {
  return (
    <ScrollView style={styles.container}>
      <SeferCard
        firmaName={"Metro"}
        fiyat="500"
        kalkisSaati="20:30"
        bosKoltuk={8}
        koltukTipi={"2 + 2"}
      />
      <SeferCard
        firmaName={"Varan"}
        fiyat="250"
        kalkisSaati="14:00"
        bosKoltuk={15}
        koltukTipi={"2 + 1"}
      />
      <SeferCard
        firmaName={"Kamil Koç"}
        fiyat="300"
        kalkisSaati="00:30"
        bosKoltuk={1}
        koltukTipi={"2 + 1"}
      />
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
