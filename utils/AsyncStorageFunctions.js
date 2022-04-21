import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("station");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const storeUserData = async (value, login) => {
    try {
      const jsonValue = JSON.stringify(value);
      const login = JSON.stringify(login)
      await AsyncStorage.setItem("stationLogin", login);
      await AsyncStorage.setItem("station", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  export const LogoutUser = async (token) => {
    try {
      fetch("http://localhost:3001/utilisateur/logoutstation", {
        method: "GET",
        Authorization: token
      }).then((res) => {console.log(res)})
      await AsyncStorage.removeItem("station");
    } catch (e) {
      console.log(e);
    }
  };