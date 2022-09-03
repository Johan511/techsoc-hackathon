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

 const loging = async (username : string, password : string) => {
    return await fetch('/auth/login')
 }


export default {createBudget}