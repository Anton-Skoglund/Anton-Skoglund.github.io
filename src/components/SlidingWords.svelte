
<script lang="ts">
  let { test }: {test: [string, string][]} = $props();

  const len = test.length;
  const isHovered = $state(new Array(len).fill(false));
  const isInit = $state(new Array(len).fill(false));
    





</script>

<div class="container">
  {#each test as _, i}
  <a
    href="/{test[i][2]}"
    role="button"
    tabindex=0
    onmouseenter={() => { isHovered[i] = true; isInit[i] = true }} 
    onmouseleave={() => { isHovered[i] = false; isInit[i] = true}}
    id={"expandableText" + i.toString()}
    class:isNotHovered={!isHovered[i]}
    class:isInit={isInit[i]}

    style="display: flex; align-items: center;">
    <h1 style="margin-top: 1rem;">{test[i][0]}</h1>
    <h2 style="margin-left: 0">{test[i][1]}</h2>
  </a>
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

  @keyframes fadeOut {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

.container{
  width: 40rem;
  align-items: start;
    a{
      color: white;
      margin-bottom: -5rem;
      h1{
        font-size: 10rem;
        line-height: 0;
        
      }

      h2 {
        font-size: 5rem;
        overflow: hidden;
        margin-top: 2rem;
        overflow: hidden;
      white-space: nowrap;
        

      }
      &:hover {
        cursor: pointer;
        
        h2 {
          animation: fadeIn 0.5s ease-in-out;
          animation-fill-mode: forwards;
          width: fit-content;
          text-align: start;
        }
      }
    }

    .isInit.isNotHovered {
      animation: fadeOut 0.5s ease-in-out; 
      width: 0;
    }
    .isNotHovered {
      width: 0;
    }
  }


</style>