import * as React from "react";
import { View } from "react-native";
import { List, Divider, useTheme } from "react-native-paper";

const Modal = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const theme = useTheme();

  return (
    <View style={{ width: "80%" }}>
      <List.Section>
        <List.Accordion
          titleStyle={{ color: theme.colors.textColor }}
          style={{ color: theme.colors.secondColor }}
          title="Nereden"
        >
          <List.Item
            titleStyle={{ color: theme.colors.textColor }}
            title="Ankara"
            onPress={() => console.log("tiklandi")}
          />
          <List.Item
            titleStyle={{ color: theme.colors.textColor }}
            title="İstanbul"
            onPress={() => console.log("tiklandi")}
          />

          <List.Item
            titleStyle={{ color: theme.colors.textColor }}
            title="Bolu"
            onPress={() => console.log("tiklandi")}
          />
        </List.Accordion>

        <Divider
          horizontalInset
          style={{ margin: 8 }}
          theme={{ colors: theme.colors.background }}
        />

        <List.Accordion
          titleStyle={{ color: theme.colors.textColor }}
          style={{ color: theme.colors.secondColor }}
          title="Nereye"
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item
            titleStyle={{ color: theme.colors.textColor }}
            onPress={() => console.log("tiklandi")}
            title="Ankara"
          />
          <List.Item
            titleStyle={{ color: theme.colors.textColor }}
            title="İstanbul"
            onPress={() => console.log("tiklandi")}
          />
          <List.Item
            titleStyle={{ color: theme.colors.textColor }}
            title="Bolu"
            onPress={() => console.log("tiklandi")}
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default Modal;
