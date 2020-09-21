import { BASE_API } from "./apiBase";

export default {
  checkToken: async () => {},
  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (req.status == 200) {
      let { data } = await req.json();
      return data;
    } else {
      return { error: await req.text() };
    }
  },
  signUp: async (name, email, password) => {
    console.log(`${BASE_API}/register`, email, password, name);
    const req = await fetch(`${BASE_API}/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (req.status == 200) {
      let { data } = await req.json();
      return data;
    } else {
      return { error: await req.text() };
    }
  },
};
