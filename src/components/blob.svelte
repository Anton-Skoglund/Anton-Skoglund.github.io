<script lang="ts">
  import { onMount } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;

  let centerX = 250; // Center of viewBox
  let centerY = 250;

  let scaleX = 1;
  let scaleY = 1;

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dx = (mouseX - window.innerWidth / 2) / window.innerWidth;
      const dy = (mouseY - window.innerHeight / 2) / window.innerHeight;

      scaleX = 1 + dx * 0.5;
      scaleY = 1 + dy * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<svg viewBox="0 0 500 500" class="blob">
  <g transform="translate(250, 250) scale({scaleX}, {scaleY}) translate(-250, -250)">
    <path
      d="M421,307Q379,364,321,392Q263,420,205,390Q147,360,108,305Q69,250,102,188Q135,126,202,108Q269,90,328,121Q387,152,423,201Q459,250,421,307Z"
      fill="#6C63FF" />
  </g>
</svg>

<style>
  .blob {
    position: fixed;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    pointer-events: none;
    transition: transform 0.05s linear;
  }
</style>
