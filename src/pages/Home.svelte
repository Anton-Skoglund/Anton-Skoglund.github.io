
<script>
  import SlidingWords from "../components/SlidingWords.svelte";
</script>
<nav>
  <a href="#/">Home</a>
  <a href="#/about">About</a>
</nav>
<main>
  <SlidingWords test={[["A", "i"], ["N", "etwork"], ["T", "esting"], ["O", "pen source"], ["N", "othing"], ["S", "ecurity"]]}></SlidingWords>
</main>


<style lang="scss">
  main {
    width: 100%;
    display: flex;
    align-items: start;
  }
</style>
