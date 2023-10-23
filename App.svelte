<script>
  import QuestionBox from "./components/QuestionBox.svelte";
  import ResponseBoxes from "./components/ResponseBoxes.svelte";
  // import LoadingScreen from "./components/LoadingScreen.svelte";

  // let loading;
  let responseJson;
</script>

<h class="title">Correspondence tool</h>
<br />
<QuestionBox bind:responseJson />
<ResponseBoxes {responseJson} />

<!-- <LoadingScreen {loading} /> -->
<style>
  .title {
    font-size: 1.5rem;
    font-family: Verdana, sans-serif;
  }
</style>
