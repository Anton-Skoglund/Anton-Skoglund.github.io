<script lang="ts">
  export let setElRef: (el: HTMLElement) => void;
  let navDiv: HTMLElement;

  // Call the callback once it's mounted
  import { onMount } from "svelte";
  onMount(() => {
    if (setElRef && navDiv) setElRef(navDiv);
  });
</script>

<div bind:this={navDiv}>
  <a href="#/">Home</a>
  <a href="#/projects">Project</a>
</div>

<style>
  div {
    width: min(100%, 70rem);

    display: flex;
    margin: auto;
        font-family: "PT Serif", serif;


    a {
      margin: 1rem;
      color: #fff;
      font-size: 2rem;

      &:hover {
        font-style: italic;
      }
    }
  }
</style>
