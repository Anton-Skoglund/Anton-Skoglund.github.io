<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import Nav from "@components/Nav.svelte";
  import smartpunkt from "../assets/smartpunkt.png";
  import SIMPLE from "../assets/simple.png";
  import ChaboStats from "../assets/chabo-stats.png";
  import QuickLearn from "../assets/quick-learn.png";
  import Clingy from "../assets/clingy.png";


  onMount(() => {
    const grid = document.querySelector(".grid");
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(grid, { "--track": "2fr", duration: 0.0 });
        gsap.to(item, { "--innerTrack": "1fr", duration: 0.3 });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(grid, { "--track": "1fr", duration: 0.0 });
        gsap.to(item, { "--innerTrack": "0fr", duration: 0.3 });
      });
    });
  });
  let projects = [
    {
      title: "SMÄRTPUNKT",
      subTitle: "IKEA x Chalmers University of Technology",
      desc: "A project we made in collaboration with IKEA and Chalmers, where we tried to solve a real world problem using design thinking and user centered design.",
      img: smartpunkt,
      link: "smartpunkt"
    },
    {
      title: "SIMPLE",
      subTitle: "A clean design system for simple browser extensions",
      desc: "Weather forecast using API",
      img: SIMPLE,
      link: "simple"
    },
    {
      title: "ChaboStats",
      subTitle: "Help students with their living situation",
      desc: "A help web site for chalmers students living",
      img: ChaboStats,
      link: "chabostats"
    },
    {
      title: "Simple reminder app",
      subTitle: "Made in a published in a week",
      desc: "A project we made in collaboration with IKEA and Chalmers, where we tried to solve a real world problem using design thinking and user centered design.",
      img: QuickLearn,
      link: "clingy"
    },
    {
      title: "Clingy",
      subTitle: "A simple game made in C in a week",
      desc: "Weather forecast using API",
      img: Clingy,
      link: "clingy"
    },
  ];

  let selected = null;
  function toggle(i) {
    selected = selected === i ? null : i;
  }
</script>

<main>
  <Nav></Nav>
  <h1>My Projects</h1>
  <div class="grid">
    {#each projects as p}
      <a href="#/projects/{p.link}" class="item">
        <div class="text">
          <h1>{p.title}</h1>
          <h2>{p.subTitle}</h2>
        </div>
        <div class="img-wrapper">
          <img src={p.img} alt={p.desc} />
        </div>
      </a>
    {/each}
  </div>
</main>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  main {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
  }

  main h1 {
    color: white;
    font-size: clamp(2rem, 6vmin, 4rem);
    margin-bottom: 2rem;
    font-family: "PT Serif", serif;
  }


  .grid {
    --track: 1;
    display: grid;
    max-width: 85rem;
    width: 100%;
    gap: 1rem;
    transition: grid-template 300ms;
  }

  .img-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    opacity: 0;
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
  }

  .item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    aspect-ratio: 8 / 3;
    border: 4px solid #fdfdfd52;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .item:hover img {
    opacity: 1;
  }

  .item .text {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    transition:
      0.3s ease,
      opacity 0.3s ease;
  }

  .item:hover .text {
    opacity: 0;
  }

  .item .text h1 {
    color: white;
    margin: 0.5rem 0;
    font-size: clamp(1.2rem, 5vmin, 2.5rem);
    font-family: "PT Serif", serif;
  }

  .item .text h2 {
    color: white;
    margin: 0.5rem 0;
    font-size: clamp(0.7rem, 2.5vmin, 1.3rem);
    font-family: "PT Serif", serif;
  }

  .item .text p {
    color: white;
    font-size: clamp(0.7rem, 2.5vmin, 1.3rem);
  }

  /*
  .grid:has(.item:first-child:hover) .item:not(:first-child),
  .grid:has(.item:nth-child(2):hover) .item:not(:nth-child(2)),
  .grid:has(.item:nth-child(3):hover) .item:not(:nth-child(3)),
  .grid:has(.item:nth-child(4):hover) .item:not(:nth-child(4)) {
    filter: grayscale(10%) brightness(250%) contrast(30%);
  }

  .grid:has(.item:first-child:hover) .item:not(:first-child) p,
  .grid:has(.item:nth-child(2):hover) .item:not(:nth-child(2)) p,
  .grid:has(.item:nth-child(3):hover) .item:not(:nth-child(3)) p,
  .grid:has(.item:nth-child(4):hover) .item:not(:nth-child(4)) p {
    opacity: 0;
  }

  */
  @media (min-width: 60em) {
    .grid {
      grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
      aspect-ratio: 3 / 3;
      transition: grid-template 0.4s ease;
    }

    .item {
      aspect-ratio: auto;
    }

    .grid:has(.item:first-child:hover) .item:not(:first-child),
    .grid:has(.item:nth-child(2):hover) .item:not(:nth-child(2)),
    .grid:has(.item:nth-child(3):hover) .item:not(:nth-child(3)),
    .grid:has(.item:nth-child(4):hover) .item:not(:nth-child(4)),
    .grid:has(.item:nth-child(5):hover) .item:not(:nth-child(5)),
    .grid:has(.item:nth-child(6):hover) .item:not(:nth-child(6)),
    .grid:has(.item:nth-child(7):hover) .item:not(:nth-child(7)),
    .grid:has(.item:nth-child(8):hover) .item:not(:nth-child(8)),
    .grid:has(.item:nth-child(9):hover) .item:not(:nth-child(9)) {
      opacity: 0.4;
      transition: all 0.5s ease;
    }

    .grid:has(.item:first-child:hover) .item:not(:first-child) p,
    .grid:has(.item:nth-child(2):hover) .item:not(:nth-child(2)) p,
    .grid:has(.item:nth-child(3):hover) .item:not(:nth-child(3)) p,
    .grid:has(.item:nth-child(4):hover) .item:not(:nth-child(4)) p,
    .grid:has(.item:nth-child(5):hover) .item:not(:nth-child(5)) p,
    .grid:has(.item:nth-child(6):hover) .item:not(:nth-child(6)) p,
    .grid:has(.item:nth-child(7):hover) .item:not(:nth-child(7)) p,
    .grid:has(.item:nth-child(8):hover) .item:not(:nth-child(8)) p,
    .grid:has(.item:nth-child(9):hover) .item:not(:nth-child(9)) p {
      display: none;
    }

    /* Row 1, Col 1 */
    .grid:has(.item:nth-child(1):hover) {
      grid-template: var(--track) 1fr 1fr / var(--track) 1fr 1fr;
    }

    /* Row 1, Col 2 */
    .grid:has(.item:nth-child(2):hover) {
      grid-template: var(--track) 1fr 1fr / 1fr var(--track) 1fr;
    }

    /* Row 2, Col 1 */
    .grid:has(.item:nth-child(3):hover) {
      grid-template: var(--track) 1fr 1fr / 1fr 1fr var(--track);
    }

    /* Row 2, Col 2 */
    .grid:has(.item:nth-child(4):hover) {
      grid-template: 1fr var(--track) 1fr / var(--track) 1fr 1fr;
    }

    /* Row 3, Col 1 */
    .grid:has(.item:nth-child(5):hover) {
      grid-template: 1fr var(--track) 1fr / 1fr var(--track) 1fr;
    }

    /* Row 3, Col 2 */
    .grid:has(.item:nth-child(6):hover) {
      grid-template: 1fr var(--track) 1fr / 1fr 1fr var(--track);
    }

    /* Row 2, Col 2 */
    .grid:has(.item:nth-child(7):hover) {
      grid-template: 1fr 1fr var(--track) / var(--track) 1fr 1fr;
    }

    /* Row 3, Col 1 */
    .grid:has(.item:nth-child(8):hover) {
      grid-template: 1fr 1fr var(--track) / 1fr var(--track) 1fr;
    }

    /* Row 3, Col 2 */
    .grid:has(.item:nth-child(9):hover) {
      grid-template: 1fr 1fr var(--track) / 1fr 1fr var(--track);
    }
  }
</style>
