import React, { useState } from "react";
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import { SafeAreaView, StyleSheet } from "react-native";
export let list = [
  { seatNumber: 1, seatType: "booked" },
  { seatNumber: 11, seatType: "women" },
  { seatNumber: 16, seatType: "booked" },
  { seatNumber: 17, seatType: "women" },
  { seatNumber: 22, seatType: "women" },
  { seatNumber: 39, seatType: "women" },
  { seatNumber: 41, seatType: "booked" },
  { seatNumber: 42, seatType: "women" },
  { seatNumber: 43, seatType: "women" },
];
const BusSeat = ({ layout }) => {
  return (
    <SafeAreaView>
      <SeatsLayout
        row={13}
        driverPosition="left"
        maxSeatToSelect={4}
        layout={
          layout
            ? { columnOne: 2, columnTwo: 2 }
            : { columnOne: 2, columnTwo: 1 }
        }
        isSleeperLayout={true}
        selectedSeats={list}
        numberTextStyle={styles.numberStyle}
        getBookedSeats={(seats) => {
          console.log("getBookedSeats :: ", seats);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  numberStyle: { fontSize: 12 },
});

export default BusSeat;
