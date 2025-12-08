<script>
  import Nav from "../components/Nav.svelte";
  import SlidingWords from "../components/Home/SlidingWords.svelte";
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
  body {
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    width: min(100%, 70rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    font-family: "PT Serif", serif;
  }

  main .title {
    width: min(100%, 30rem);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main a {
    color: #efefef;
    font-size: clamp(2rem, 6vmin, 4rem);
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 1rem;

    &:hover {
      font-style: italic;
    }
  }

  .line {
    width: 100%;
    height: 0.1rem;
    background-color: #fff;
    margin: 2rem 0;
  }

  .intro {
    font-size: clamp(0.75rem, 2vmin, 1.5rem);
    text-align: start;
  }

  h1 {
    font-size: 14rem;
    line-height: 0.9;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 3rem;
    margin: 2rem;
  }
  svg {
    width: 100%;
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 10rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 2rem;
      margin: 1rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 6rem;
      margin-bottom: -1rem;
    }
    h2 {
      font-size: 1rem;
      margin: 1rem;
    }
  }

  @media (max-width: 390px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 1rem;
      margin: 1rem;
    }

    svg {
      width: 90%;
    }
  }
</style>
