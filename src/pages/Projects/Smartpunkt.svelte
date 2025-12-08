<script>
    import Nav from "../../components/Nav.svelte";
    import Clingy from "../../assets/clingy.png"
</script>

<div class="page">
    <Nav></Nav>
    <div class="card">
        <img class="preview" src={Clingy} alt="Clingy" />
        <h1>SMÄRTPUNKT</h1>
        <h2>A</h2>
        <p>Weather forecast using API</p>
    </div>
</div>

<style lang="scss">
    .page {
        min-height: 100vh;
        padding: 2rem;
        display: grid;
        place-items: center;
    }

    .card {
        width: 100%;
        max-width: 650px;
        background: #fff;
        border-radius: 1.25rem;
        padding: 1.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-top: 1rem;
        }

        h2 {
            font-size: 1.25rem;
            color: #666;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            color: #444;
        }
    }

    .preview {
        width: 100%;
        border-radius: 1rem;
    }
</style>
