<script>
  import { RingLoader } from "svelte-loading-spinners";
  export let loading = true;

  function getLoadingClass() {
    if (loading) {
      return "loadingScreen";
    } else {
      return "blank";
    }
  }
</script>

{#if loading}
  <div class={getLoadingClass()} />
  <div class="loadingText">
    Calculating &nbsp;
    <RingLoader size="25" color="#FF3E00" unit="px" duration="2s" />
  </div>
{/if}

<style>
  .loadingScreen {
    background-color: black;
    opacity: 0.3;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  }

  .loadingText {
    background-color: white;
    display: inline-flex;
    align-items: center;
    position: absolute;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    scrollbar-width: none;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .blank {
    display: none;
  }
</style>
