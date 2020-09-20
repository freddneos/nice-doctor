import { BASE_API } from "./apiBase";

export default {
  checkToken: async () => {},
  signIn: async ({ email, password }) => {
    const req = await fetch(`${BASE_API}/auth`, {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = req.json();
    return json;
  },
  signUp: async ({ email, password , name }) => {
    const req = await fetch(`${BASE_API}/register`, {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password , name }),
    });

    const json = req.json();
    return json,
};
