import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button, Card, TextInput, List } from "react-native-paper";

const KoltukInput = ({ koltukNo }) => {
  const [text, setText] = useState("");

  return (
    <Card style={styles.cardStyle}>
      <Card.Actions>
        <TextInput
          style={styles.textInput}
          inputMode="numeric"
          mode="flat"
          label="TC Kimlilk No"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <List.Section style={{ width: "42%" }}>
          <List.Accordion
            titleStyle={styles.listTitleStyle}
            title="Cinsiyetiniz"
          >
            <List.Item
              style={{
                borderWidth: 1,
                backgroundColor: "#778DA9",
              }}
              titleStyle={styles.listTitleStyle}
              title="Erkek"
              onPress={() => console.log("tiklandi")}
            />
            <List.Item
              style={{
                borderWidth: 1,
                backgroundColor: "#778DA9",
              }}
              titleStyle={styles.listTitleStyle}
              title="Kadin"
              onPress={() => console.log("tiklandi")}
            />

            <List.Item
              style={{
                borderWidth: 1,
                backgroundColor: "#778DA9",
              }}
              titleStyle={styles.listTitleStyle}
              title="Diger"
              onPress={() => console.log("tiklandi")}
            />
          </List.Accordion>
        </List.Section>

        <View style={styles.koltukNoStyle}>
          <Text style={styles.koltukNoText}>Koltuk No {koltukNo}</Text>
        </View>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1B263B",
  },
  textInput: {
    flex: 1,
    width: "50%",
  },
  koltukNoStyle: {
    width: "15%",
  },
  koltukNoText: {
    color: "#E0E1DD",
    fontSize: 18,
  },
  listTitleStyle: {
    color: "#E0E1DD",
    fontSize: 16,
  },
});

export default KoltukInput;
