<script>
    import Nav from "@components/Nav.svelte";
    import Simple from "@assets/simple.png";
</script>

<main>
    <Nav></Nav>
    <div class="card">
        <img class="preview" src={Simple} alt="Clingy" />
        <div class="title">
            <h1>SMÄRTPUNKT</h1>
            <h2>Chalmers x IKEA</h2>
        </div>

        <section>
            <h2>Project</h2>
            <p>
                This is a project where I explored a design theme in figma. I never got around to designing it for the web.
            </p>
        </section>

        <section>
            <iframe
                title="figma showcase"
                style="border: 1px solid rgba(0, 0, 0, 0.1);"
                width="800"
                height="450"
                src="https://embed.figma.com/design/oMO7su5cVHS6yrULegteF4/SIMPEL?node-id=0-1&embed-host=share"
                allowfullscreen
            ></iframe>
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
     
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        border-radius: 1.25rem;

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
