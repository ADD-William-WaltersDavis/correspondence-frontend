<script>
  export let responseJson;
  let context = "";
  let generatedAnswer = "";

  $: {
    // context and generatedAnswer are placeholders, change when backend is running
    if (responseJson) {
      context = responseJson["context"];
      generatedAnswer = responseJson["generatedAnswer"];
    }
  }

  function copyToClipboard() {
    const textarea = document.createElement("textarea");
    textarea.value = generatedAnswer;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
</script>

<div style="opacity: {responseJson == null ? 0.2 : 1};">
  <div class="box" style="width: 300px;">
    <div class="header">Context</div>
    <div class="response-text">
      {context}
    </div>
  </div>

  <div class="box" style="width: 500px;">
    <div class="header">
      Generated Answer
      {#if responseJson != null}
        <button on:click={copyToClipboard}
          >Copy to clipboard</button
        >
      {/if}
    </div>
    <div class="response-text">
      {generatedAnswer}
    </div>
  </div>
</div>

<style>
  .box {
    border: 1px solid #ccc;
    margin-top: 10px;
    height: 300px;
    border-radius: 5px;
    padding: 0.2rem;
    border: 1px solid #ccc;
    display: inline-block;
    font-family: Verdana, sans-serif;
    overflow: auto;
    resize: both;
  }

  .box .response-text {
    font-size: 0.9rem;
  }

  .box .header {
    height: 30px;
    line-height: 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 18px;
    display: block;
    display: block;
    padding: 10px;
    border: 1px solid #ccc;
    border-top: none;
    border-left: none;
    border-right: none;
  }
  button {
    background: white;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 8px;
    font-size: 1rem;
    transition: background-color 0.1s ease-in-out;
    font-family: Verdana, sans-serif;
    float: right;
  }
  button:hover {
    background: #dfdfdf;
  }
</style>
