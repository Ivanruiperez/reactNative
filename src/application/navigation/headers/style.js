import { getStatusBarHeight } from "react-native-status-bar-height";

export const background = {
  paddingTop: getStatusBarHeight(),
  backgroundColor: "#DFDFDF",
  justifyContent: "center",
  alignItems: "center",
};

export const container = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  width: "95%",
  margin: 5,
  marginBottom: 0,
  padding: 10,
};

export const viewFavsButton = { fontWeight: "bold" };
