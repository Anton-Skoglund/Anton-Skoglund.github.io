<script lang="ts">
  export let setElRef: (el: HTMLElement) => void;
  let navDiv: HTMLElement;

  // Call the callback once it's mounted
  import { onMount } from 'svelte';
  onMount(() => {
    if (setElRef && navDiv) setElRef(navDiv);
  });
</script>

<div bind:this={navDiv}>
  <a href="#/">Home</a>
  <a href="#/cv">CV</a>
</div>



<style>
    div {
        width: 100%;

        display: flex;
        
        a {
            margin: 1rem;
            color: #fff;
            font-size: 2rem;
        
            &:hover{
                color: red;
            }
        }        
    }
</style>