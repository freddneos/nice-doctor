import React from "react";
import { Calendar } from "react-native-big-calendar";

const events = [
  {
    title: "Meeting",
    start: new Date(2020, 9, 21, 10, 0),
    end: new Date(2020, 9, 21, 13, 30),
  },
  {
    title: "Coffee break",
    start: new Date(2020, 9, 21, 15, 45),
    end: new Date(2020, 9, 21, 19, 30),
  },
];

export default () => {
  return <Calendar events={events} height={600} />;
};
