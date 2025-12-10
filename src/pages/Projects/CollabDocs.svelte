<script>
    import Nav from "@components/Nav.svelte";
    import Collab from "@assets/collab.png";
</script>

<main>
    <Nav></Nav>
    <div class="card">
        <img class="preview" src={Collab} alt="Clingy" />
        <div class="title">
            <h1>ChaboStats</h1>
        </div>

        <section>
            <h2>Project</h2>
            <p>
                This is a project that I created for a interview.
                It is a collaborative document editor.
            </p>
        </section>

        <section>
            <h2>Learnings</h2>
            <p>
                Learnt alot about full stack development
                setting up database, tmux setup, redis and more.
            </p>
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
