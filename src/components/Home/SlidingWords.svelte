
<script lang="ts">
  import { onMount } from "svelte";

  let { letterInfo }: {letterInfo: [string, string, string][]} = $props();

  const len = letterInfo.length;
  const isHovered = $state(new Array(len).fill(false));
  const isInit = $state(new Array(len).fill(false));

  
  let mainEl: Element;
  let width = 0;
  let height = 0;

  let smallText = $state(5);
  let largeText = $state(2* smallText);


  let maxWidthWord = 0;
  


  let longestTotal = calcLongestTotal(letterInfo) + 50;

  
  function calcLongestTotal(letterInfo: [string, string, string][]): number{
    let longestTotal = 0;
    letterInfo.forEach(letter => {
      longestTotal = Math.max(getTextWidthInRem(letter[0], largeText) + getTextWidthInRem(letter[1], smallText), longestTotal)
    });

    return longestTotal + 50;
  }


  function getTextWidthInRem(text: string, fontSizeRem: number, fontFamily = "Arial"): number {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // px per 1rem
    const fontSizePx = fontSizeRem * baseFontSize;

    context.font = `${fontSizePx}px ${fontFamily}`;
    const metrics = context.measureText(text);
    const widthPx = metrics.width;

    return widthPx // / baseFontSize; // convert back to rem
  }




  onMount(() => {
    const updateSize = () => {
        const rect = mainEl.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        while(longestTotal - 20> width){
          smallText *= 0.9;
          largeText *= 0.9;

          longestTotal = calcLongestTotal(letterInfo)
        }
        while(longestTotal < width && smallText != 5){
          if (smallText >= 5){
            smallText = 5;
            largeText = 10;
            break;
          }
          smallText *= 1.1;
          largeText *= 1.1;

          longestTotal = calcLongestTotal(letterInfo)
        }

    };

    updateSize(); // Initial set
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(mainEl);

    const rect = mainEl.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    return () => {
            resizeObserver.disconnect();
    };
  });
</script>

<div bind:this={mainEl} class="container" style="width:{longestTotal}px">
  {#each letterInfo as _, i}
  <a
    href="/{letterInfo[i][2]}"
    role="button"
    tabindex=0
    onmouseenter={() => { isHovered[i] = true; isInit[i] = true }} 
    onmouseleave={() => { isHovered[i] = false; isInit[i] = true}}
    id={"expandableText" + i.toString()}
    class:isNotHovered={!isHovered[i]}
    class:isInit={isInit[i]}

    style="display: flex; align-items: center;">
    <h1 style="margin-top: 1rem; font-size: {largeText}rem">{letterInfo[i][0]}</h1>
    <h2 style="margin-left: 0; font-size: {smallText}rem">{letterInfo[i][1]}</h2>
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
  align-items: start;
    a{
      color: white;
      margin-bottom: -5rem;
      h1{
        line-height: 0;
        
      }

      h2 {
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
    }
    .isNotHovered {
      width: 0;
    }
  }


</style>