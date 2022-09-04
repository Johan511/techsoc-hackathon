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
const create_sub_budget = async ( budget_id : string, sub_budget_name : string, total_amount : string ) => {
    return await fetch("/budget/create_sub_budget", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ budget_id, sub_budget_name, total_amount }),
      });
}


const add_friend_to_sub_budget = async (sub_budget_id : string, amount_total : number, amount_paid : number , friend_id : string) => {
    return await fetch("/budget/create_sub_budget", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ sub_budget_id,
            amount_total,
            amount_paid,
            friend_id, }),
      });
}


export default {createBudget, create_sub_budget, add_friend_to_sub_budget}