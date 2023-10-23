<script>
  import { callAPI } from "../api.js";

  let questionString = null;
  export let responseJson = null;

  async function checkAndCallAPI() {
    responseJson = null;

    if (questionString == null || questionString == "") {
      alert("Please enter a valid question");
    } else {
      responseJson = await callAPI(questionString);
    }
  }
</script>

<textarea bind:value={questionString} placeholder="Enter the question here" />
<br />
<button class="go_button" on:click={checkAndCallAPI}>Calculate</button>

<style>
  textarea {
    width: 813px;
    height: 100px;
    border-radius: 5px;
    padding: 0.2rem;
    border: 1px solid #ccc;
    font-family: Verdana, sans-serif;
    font-size: 0.9rem;
  }
  .go_button {
    background: white;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 8px;
    font-size: 1rem;
    transition: background-color 0.1s ease-in-out;
    font-family: Verdana, sans-serif;
  }
  .go_button:hover {
    background: #dfdfdf;
  }
</style>
