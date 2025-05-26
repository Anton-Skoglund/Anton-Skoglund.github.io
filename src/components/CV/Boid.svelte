<script lang="ts">
  let {x, y, radius, speed, direction}: {x: number, y:number, radius: number, speed: number, direction: number} = $props()
  
  // Function to generate a random hex color
  function getRandomColor() {
    return '#1999' + Math.floor((Math.random() * 128) + 128).toString(16).padStart(2, '0');
  }

  // Set a random color when the component is created
  let glowColor = getRandomColor();



</script>

<div class="orb" style="left: {x}px; top: {y}px; transform: rotate({direction + Math.PI/2}rad);     background: rgba(30,250,255,0.1);
    box-shadow:
      0 0 30px {glowColor},
      0 0 40px {glowColor},
      0 0 60px {glowColor},
      0 0 90px {glowColor};

      "></div>

<style>
  div{
    position: absolute;
  }
  .orb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: pulse 2s infinite ease-in-out;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
</style>


