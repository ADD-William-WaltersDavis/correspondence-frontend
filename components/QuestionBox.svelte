<script>
  import { callAPI } from "../api.js";
  import { RingLoader } from "svelte-loading-spinners";

  let questionString = null;
  let loading = false;
  export let responseJson = null;

  async function checkAndCallAPI() {
    responseJson = null;

    if (questionString == null || questionString == "") {
      alert("Please enter a valid question");
    } else {
      loading = true;
      // added try statement to catch connection to API error and highlight to customer
      try {
        responseJson = await callAPI(questionString);
      } catch (error) {
        alert("Not connected to API")
      }
      loading = false;
    }
  }

</script>

<textarea bind:value={questionString} placeholder="Enter the question here" />
<br />
<div style="display: flex; ">
  <button
    class="calculate_button"
    on:click={checkAndCallAPI}
    class:loading={loading}
  >
    Calculate
  </button>
  <div style="margin-right: 5px;"></div>
  {#if loading}
    <RingLoader size="20" color="#FF3E00" unit="px" duration="2s" />
  {/if}
</div>

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
  .calculate_button {
    background: white;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 8px;
    font-size: 1rem;
    transition: background-color 0.1s ease-in-out;
    font-family: Verdana, sans-serif;
  }
  .calculate_button:hover {
    background: #dfdfdf;
  }

  .calculate_button.loading {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.3;
  }
</style>
