<script lang="ts">
  let {x, y, radius, speed, direction}: {x: number, y:number, radius: number, speed: number, direction: number} = $props()
  console.log(direction)
</script>

<div style="left: {x}px; top: {y}px; transform: rotate({direction + Math.PI/2}rad);">⏅</div>

<style>
  div{
    position: absolute;
  }
</style>
