import { createAppContainer, createSwitchNavigator } from "react-navigation";
// pages
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main
  })
);
