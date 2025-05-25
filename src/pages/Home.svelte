
<script>
    import Nav from "../components/Nav.svelte";
  import SlidingWords from "../components/SlidingWords.svelte";
</script>
<Nav></Nav>
<main>
  <SlidingWords test={[["A", "i", "#/cv"], ["N", "etwork", "#/cv"], ["T", "esting", "#/cv"], ["O", "pen source", "#/cv"], ["N", "othing", "#/boids"], ["S", "ecurity", "#/cv"]]}></SlidingWords>
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
