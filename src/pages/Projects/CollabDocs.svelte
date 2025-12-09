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
        min-height: 100vh;
        padding: 2rem;
        display: grid;
        place-items: center;
    }

    .card {
        width: 100%;
        max-width: 650px;
        border-radius: 1.25rem;
        padding: 1.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        .title {
            h1 {
                font-size: 2rem;
                font-weight: 700;
                margin-top: 1rem;
            }

            h2 {
                font-size: 1.25rem;
                margin-bottom: 1rem;
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
