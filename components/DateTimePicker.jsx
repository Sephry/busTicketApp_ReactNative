import React from "react";
import { DatePickerModal } from "react-native-paper-dates";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const DateTimePicker = () => {
  const [range, setRange] = React.useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );
  return (
    <SafeAreaProvider>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Button
          style={{ backgroundColor: "#415A77" }}
          onPress={() => setOpen(true)}
          uppercase={false}
        >
          <Text style={{ color: "#E0E1DD" }}>Gün aralıgı seçiniz</Text>
        </Button>

        <DatePickerModal
          mode="range"
          locale="tr"
          visible={open}
          onDismiss={onDismiss}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default DateTimePicker;
