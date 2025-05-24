
<script>
    import Nav from "../components/Nav.svelte";
  import SlidingWords from "../components/SlidingWords.svelte";
</script>
<Nav></Nav>
<main>
  <SlidingWords test={[["A", "i"], ["N", "etwork"], ["T", "esting"], ["O", "pen source"], ["N", "othing"], ["S", "ecurity"]]}></SlidingWords>
</main>


<style lang="scss">
  body {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    align-items: start;
  }
</style>
