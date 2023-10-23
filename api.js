import ngrok_key from "./data/ngrok_key.json";
const NGROK_ADDRESS = ngrok_key["NGROK_KEY"];

console.log("NGROK_ADDRESS");
console.log(NGROK_ADDRESS);

export async function callAPI(questionString) {
  const resp = await fetch(NGROK_ADDRESS, {
    method: "POST",
    headers: jsonRequestHeaders(),
    body: JSON.stringify(questionString),
  });
  return await resp.json();
}

function jsonRequestHeaders() {
  let headers = {
    "Bypass-Tunnel-Reminder": "haha",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  return headers;
}
