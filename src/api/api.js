const BASE_URL = "https://api.green-api.com";

export async function SetSettings(id, token) {
  const settings = {
    method: "POST",
    body: JSON.stringify({
      webhookUrl: "",
      outgoingWebhook: "yes",
      stateWebhook: "yes",
      incomingWebhook: "yes",
    }),
  };
  try {
    let response = await fetch(
      `${BASE_URL}/waInstance${id}/getSettings/${token}`,
      settings
    );
    let data = await response.json();

    return data;
  } catch (err) {
    alert(err);
  }
}

export async function SendMessage(id, token, tel, message) {
  const settings = {
    method: "POST",
    body: JSON.stringify({
      chatId: `${tel}@c.us`,
      message: `${message}`,
    }),
  };
  try {
    let response = await fetch(
      `${BASE_URL}/waInstance${id}/sendMessage/${token}`,
      settings
    );
    let data = await response.json();

    return data;
  } catch (err) {
    alert(err);
  }
}

export async function GetMessage(id, token) {
  try {
    let response = await fetch(
      `${BASE_URL}/waInstance${id}/receiveNotification/${token}`
    );
    let data = await response.json();

    return data;
  } catch (err) {
    alert(err);
  }
}

export async function DelMessage(id, token, receiptId) {
  const settings = {
    method: "DELETE",
  };
  try {
    let response = await fetch(
      `${BASE_URL}/waInstance${id}/deleteNotification/${token}/${receiptId}`,
      settings
    );
    let data = await response.json();
    return data;
  } catch (err) {
    alert(err);
  }
}
