
<script lang="ts">

    let { test }: {test: [string, string][]} = $props();
</script>

<div class="container">
  {#each test as _, i}
  <div style="display: flex; align-items: center;">
    <h1 style="margin-top: 1rem;">{test[i][0]}</h1>
    <h2 style="margin-left: 0">{test[i][1]}</h2>
  </div>
  {/each}
</div>

<style lang="scss">
  @keyframes fadeIn {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

.container{

    div{
      h2 {
        overflow: hidden;
        width: 0;
        margin-left: 0;
      }
      &:hover {
        cursor: pointer;
        
        h2 {
          animation: fadeIn 1s ease-in-out;
          width: fit-content;
          text-align: start;
        }

      }
    }

  }


</style>