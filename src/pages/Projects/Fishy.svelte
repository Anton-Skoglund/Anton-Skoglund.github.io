<script>
    import Nav from "@components/Nav.svelte";
    import Fishy from "@assets/fishy.png";
</script>

<main>
    <Nav></Nav>
    <div class="card">
        <img class="preview" src={Fishy} alt="Clingy" />
        <div class="title">
            <h1>ChaboStats</h1>
        </div>

        <section>
            <h2>Project</h2>
            <p>
                Project to show case a overlap of procedural bodies 
                boides.
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
