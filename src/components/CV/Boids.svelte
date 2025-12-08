<script lang="ts">
    import { onMount } from "svelte";


    import Boid from "./Boid.svelte";
    let running = true;


    let boidRefs: Boid[] = [];
    let boids = Array.from({ length: 50 }, (_, i) => ({ x: 100, y: 100, radius: 10, speed: 1, direction: Math.random() * 2 * Math.PI}));


    let mainEl: Element;
    let width = 0;
    let height = 0;


    function updatePosition(){
        for(let i = 0; i < boids.length; i++){
            const boid = boids[i];
            const x = boids[i].x;
            const y = boids[i].y; 
            const radius = boids[i].radius;

            if(x > width - radius * 2){
                boids[i].x = 0;
            }else if(x < 0){
                boids[i].x = width -  radius*2;
            }else{
                boids[i].x += boid.speed * Math.cos(boid.direction);
            }

            if(y > height - radius * 2){
                boids[i].y = 0;
            }else if(y < 0){
                boids[i].y = height - radius*2;
            }
            else{
                boids[i].y += boid.speed * Math.sin(boid.direction);
            }
        }
    }



    function updateDirection(){
const perceptionRadius = 50;
const separationDistance = 30;

const separationWeight = 15;
const cohesionWeight = 1.0;
const steerStrength = 0.005;

for (let i = 0; i < boids.length; i++) {
  const boid = boids[i];

  let total = 0;

  let avgX = 0;
  let avgY = 0;

  let separationX = 0;
  let separationY = 0;

  for (let j = 0; j < boids.length; j++) {
    if (i === j) continue;

    const other = boids[j];
    const dx = other.x - boid.x;
    const dy = other.y - boid.y;
    const dist = Math.hypot(dx, dy);

    if (dist < perceptionRadius && dist > 0) {
      // Cohesion
      avgX += other.x;
      avgY += other.y;

      // Separation
      if (dist < separationDistance) {
        separationX -= dx / dist; // repel normalized
        separationY -= dy / dist;
      }

      total++;
    }
  }

  if (total > 0) {
    // Cohesion target point
    avgX /= total;
    avgY /= total;

    const cohesionDx = avgX - boid.x;
    const cohesionDy = avgY - boid.y;

    // Combine weighted vectors
    const steerX = cohesionDx * cohesionWeight + separationX * separationWeight;
    const steerY = cohesionDy * cohesionWeight + separationY * separationWeight;

    // Check for zero vector
    if (steerX !== 0 || steerY !== 0) {
      const desiredAngle = Math.atan2(steerY, steerX);
      // Blend direction smoothly
      boid.direction = (1 - steerStrength) * boid.direction + steerStrength * desiredAngle;
    }
  }
}



    }

    // Optionally stop the loop when component is destroyed
    import { onDestroy } from 'svelte';
    onDestroy(() => running = false);

    onMount(() => {

        const updateSize = () => {
            const rect = mainEl.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
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


    function loop() {
        if (!running) return;
        
        updatePosition()
        updateDirection()


        requestAnimationFrame(loop);
    }

    loop(); // start the loop
</script>


<main bind:this={mainEl}>

    {#each boids as boid, i}
        <Boid bind:this={boidRefs[i]} x={boid.x} y={boid.y} radius={boid.radius} speed={boid.speed} direction={boid.direction} />
    {/each}
</main>

<style>
    main{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
</style>

