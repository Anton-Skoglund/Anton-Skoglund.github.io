<script>
    import Nav from "@components/Nav.svelte";
    import Clingy from "@assets/clingy.png";
</script>

<main>
    <Nav></Nav>
    <div class="card">
        <img class="preview" src={Clingy} alt="Clingy" />
        <div class="title">
            <h1>ChaboStats</h1>
        </div>

        <section>
            <h2>Project</h2>
            <p>
                This was one of my one week project where I built a simple 
                game in C.
            </p>
        </section>

        <section>
            <h2>Learnings</h2>
            <p>
                I utilized a lot of user test to find mechanics that was fun.
            </p>
        </section>

        <section>
            <h2>See more</h2>
            <a
                href="https://github.com/Anton-Skoglund/Clingy"
                target="_blank"
                rel="noopener noreferrer"
                >https://github.com/Anton-Skoglund/Clingy</a
            >
            
        </section>
    </div>
</main>

<style lang="scss">
    main {
        display: grid;
        place-items: center;
      
        min-height: 100vh;
        padding: 2rem;
    }

    .card {
        width: 100%;
        max-width: 650px;
        padding: 1.5rem;
      
        border-radius: 1.25rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        .title {
            h1 {
                margin-top: 1rem;
      
                font-size: 2rem;
                font-weight: 700;
            }

            h2 {
                margin-bottom: 1rem;
      
                font-size: 1.25rem;
            }
        }

        section {
            text-align: left;

            p {
                font-size: 1rem;
            }
        }
    }

    .preview {
        width: 100%;
      
        border-radius: 1rem;
    }
</style>
