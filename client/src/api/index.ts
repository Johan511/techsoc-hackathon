export const API = {
  createBudget: (name: string) => {
    return fetch("", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name }),
    });
  },
};
