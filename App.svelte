<script>
  import QuestionBox from "./components/QuestionBox.svelte";
  import ResponseBoxes from "./components/ResponseBoxes.svelte";

  let responseJson;
</script>

<h class="title">Correspondence tool</h>
<br />
<QuestionBox bind:responseJson />
<ResponseBoxes {responseJson} />

<style>
  .title {
    font-size: 1.5rem;
    font-family: Verdana, sans-serif;
  }
</style>
