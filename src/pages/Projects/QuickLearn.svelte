<script>
    import Nav from "@components/Nav.svelte";
    import QuickLearn from "@assets/quick-learn.png";
</script>

<main>
    <Nav></Nav>
    <div class="card">
        <img class="preview" src={QuickLearn} alt="Clingy" />
        <div class="title">
            <h1>ChaboStats</h1>
        </div>

        <section>
            <h2>Project</h2>
            <p>
                This was one of my one week project where I built a simple app
                to have flash cards. The goal was to come up with and idea and
                create and publish it within one week.
            </p>
        </section>

        <section>
            <h2>Learnings</h2>
            <p>
                I learnt about creation of chrome extensions. Another thing is
                how short a week is.
            </p>
        </section>

        <section>
            <h2>See more</h2>
            <a
                href="https://chromewebstore.google.com/detail/quick-learn/fdnecbdnihhihhgpbcpljakimjjflllj"
                target="_blank"
                rel="noopener noreferrer"
                >https://chromewebstore.google.com/detail/quick-learn/fdnecbdnihhihhgpbcpljakimjjflllj</a
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
