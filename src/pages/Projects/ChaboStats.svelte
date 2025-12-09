<script>
    import Nav from "@components/Nav.svelte";
    import ChaboStats from "@assets/chabo-stats.png";
</script>

<main>
    <Nav></Nav>
    <div class="card">
        <img class="preview" src={ChaboStats} alt="Clingy" />
        <div class="title">
            <h1>ChaboStats</h1>
        </div>

        <section>
            <h2>Project</h2>
            <p>
                This was a project I made over a few weeks around the time I
                moved out. I realized that there were no good information stored
                about different apartment that were posted on Chalmers student
                living. So I created a simple website to store and analyze
                previous apartments.
            </p>
        </section>

        <section>
            <h2>Learnings</h2>
            <p>
                I used service worker to utilize service workers to be able to
                use almost identical code for backend as if i used real a
                backend. I learnt about styling chart.js which is a nightmare
                (hehe). I created a web scraper for the project and also tried
                to write have verification in multiple steps of the process. I
                also really enjoyed the design process. Another goal of the
                project was to publish it, so to creat something and be done
                with it.
            </p>
        </section>

        <section>
            <h2>See more</h2>
            <a
                href="https://anton-skoglund.github.io/ChaboStats/#/"
                target="_blank"
                rel="noopener noreferrer"
                >https://anton-skoglund.github.io/ChaboStats/#/</a
            >
            <a
                href="https://github.com/Anton-Skoglund/ChaboStats"
                target="_blank"
                rel="noopener noreferrer"
                >https://github.com/Anton-Skoglund/ChaboStats</a
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
