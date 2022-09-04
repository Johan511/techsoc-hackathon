const createBudget= async (name: string) => {
    return await fetch("", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name }),
    });
}

  const send_request = async (receiver_id : string) => {
    return await fetch(`/users/send_request/${receiver_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      body: JSON.stringify({ name }),
    });
  }

  const add_friend = async (friendship_id : string) => {
    return await fetch(`/users/add_friend/${friendship_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      body: JSON.stringify({ name }),
    });
  }

  const remove_friend = async (friendship_id : string) => {
    return await fetch(`/users/remove_friends/${friendship_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      body: JSON.stringify({ name }),
    });
  }

  const get_friends = async () => {
    return await fetch(`/users/get_friends`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      body: JSON.stringify({ name }),
    });
  }



export default {send_request,
    add_friend,
    remove_friend,
    get_friends,}