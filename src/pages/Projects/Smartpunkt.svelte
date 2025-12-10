<script>
    import Nav from "@components/Nav.svelte";
    import Smartpunkt from "@assets/smartpunkt.png";
</script>

<main>
    <Nav></Nav>
    <div class="card">
        <img class="preview" src={Smartpunkt} alt="Clingy" />
        <div class="title">
            <h1>SMÄRTPUNKT</h1>
            <h2>Chalmers x IKEA</h2>
        </div>

        <section>
            <h2>Project</h2>
            <p>
                This was a project for the course TEK830 at Chalmers where we
                made a product for IKEA. Our idea was to improve there existing
                RCA(Root Cause Analysis) to help them produce better results. We
                want to do this by levering LLMs to categorize and run some
                analysis on.
            </p>
        </section>

        <section>
            <h2>Learnings</h2>
            <p>
                The most important thing I learnt is how hard and important user
                feedback is to gather. One of our greats hurdles was that of
                communicating what our idea was and what was real and not, I
                learnt the difficulties of technical communication.
            </p>
        </section>

        <section>
            <h2>See more</h2>
            <a href="https://smartpunkt-team18.vercel.app/" target="_blank" rel="noopener noreferrer">https://smartpunkt-team18.vercel.app/</a>
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
