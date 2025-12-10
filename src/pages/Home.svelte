<script>
  import Nav from "@components/Nav.svelte";
</script>

<Nav></Nav>
<main>
  <div class="title">
    <h1 class="indie-flower-regular">Anton Skoglund</h1>
    <svg
      width="452"
      height="94"
      viewBox="0 0 452 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="curve"
        fill="transparent"
        d="M0.305908 10.3581C110.808 95.8581 352.806 95.8581 450.806 0.358093"
      />
      <text
        width="181"
        fill="white"
        font-size="36"
        font-family="Indie Flower"
        ,
        cursive
      >
        <textPath xlink:href="#curve"> Programer - Designer - Baker </textPath>
      </text>
    </svg>
  </div>

  <div class="line"></div>

  <div class="intro">
    I study Computer Science at Chalmers university, with a passion UI/UX design,
    and creating delightful user experiences while still really enjoying
    low level programming as well. 
    Welcome to my personal portfolio where I showcase my projects and skills.
  </div>

  <div>
    <a href="#/projects" role="button" tabindex="0"> Projects </a>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;

    width: min(100%, 70rem);

    font-family: "PT Serif", serif;
  }

  main .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: min(100%, 30rem);
  }

  main a {
    margin-bottom: 2rem;
    padding: 1rem;

    font-size: clamp(2rem, 6vmin, 4rem);
    border-radius: 1rem;

    &:hover {
      font-style: italic;
    }
  }

  .line {
    margin: 2rem 0;

    width: 100%;
    height: 0.1rem;

    background-color: var(--onbg);
  }

  .intro {
    font-size: clamp(0.75rem, 2vmin, 1.5rem);
    text-align: start;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;

    font-size: 14rem;
    line-height: 0.9;
  }
  h2 {
    margin: 2rem;

    font-size: 3rem;
  }
  svg {
    width: 100%;
  }




  @media (max-width: 1100px) {
    h1 {
      margin-bottom: 1rem;

      font-size: 10rem;
    }
    h2 {
      margin: 1rem;

      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      margin-bottom: -1rem;

      font-size: 6rem;
    }
    h2 {
      margin: 1rem;

      font-size: 1rem;
    }
  }

  @media (max-width: 390px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      margin: 1rem;

      font-size: 1rem;
    }

    svg {
      width: 90%;
    }
  }
</style>
