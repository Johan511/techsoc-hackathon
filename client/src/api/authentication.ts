const createBudget = async (name: string) => {
    return await fetch("", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name }),
    });
  }

 const login = async (username : string, password : string) => {
  return await fetch("/auth/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
 }

 const register = async (email_id : string, name : string, mobile_number : string, password : string) => {
  return await fetch("/auth/register", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email_id, name, mobile_number, password }),
  });
 }


export default {login, register}