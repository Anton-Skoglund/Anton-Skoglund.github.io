<script lang="ts">
    import {
        FaEnvelope,
        FaPhone,
        FaMapMarkerAlt,
        
    } from "svelte-icons/fa";

    import Boids from "./Boids.svelte";


    let { sidebarWidth }: {sidebarWidth: number} = $props() 
</script>



<div class="sidebar" style="width: {sidebarWidth}%;">
    <div class="hello">
        <img src="" alt="" />
        <h1>Anton Skoglund</h1>
    </div>
    <div class="about-me">
        <h3>About me</h3>
        <p>I like to code :)</p>
    </div>

    <div class="contact">
        <h3>Contact</h3>
        <div class="contact-list">
            <div class="contact-list-item">
                <div><FaEnvelope /></div>
                <a href="mailto:anton.r.skoglund@gmail.com"
                    >anton.r.skoglund@gmail.com</a
                >
            </div>
            <div class="contact-list-item">
                <div><FaPhone /></div>
                <a href="tel:+46737167118"> 073-716 71 18</a>
            </div>
            <div class="contact-list-item">
                <div><FaMapMarkerAlt /></div>
                <a
                    href="https://www.google.com/maps/place/G%C3%B6teborg/@57.7010685,11.7290334,11z/data=!3m1!4b1!4m6!3m5!1s0x464f8e67966c073f:0x4019078290e7c40!8m2!3d57.70887!4d11.97456!16zL20vMDM0M18?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer">Göteborg</a
                >
            </div>
        </div>
    </div>
    <div class="boids">
        <Boids/>
    </div>
</div>


<style>
.sidebar {
            display: flex;
            flex-direction: column;
            align-items: start;
            position: relative;

            overflow: hidden;

            h3 {
                text-align: left;
            }

            & > div:not(.boids) {
                width: 100%;
                min-width: 17.5rem;
                max-width: 20rem;
            }

            .boids{
                top:0;
                position: absolute;
                left: 20rem;
                height: 100vh;
                width: 65%;
            }

            .hello {
                img {
                    width: 128px;
                    height: 128px;
                }
            }

            .about-me {
                border-top: solid 1px #fff;

                p {
                    font-size: 0.75rem;
                    text-align: left;
                    margin: 1rem;
                }
            }

            .contact {
                border-top: solid 1px #fff;

                .contact-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    margin: 1rem;
                }
                .contact-list-item {
                    display: flex;
                    text-align: center;
                    justify-content: start;
                    gap: 1rem;
                    line-height: 1rem;

                    & > div {
                        width: 1rem;
                        height: 1rem;
                    }
                    a {
                        color: white;
                    }
                    a:hover {
                        font-weight: 700;
                    }
                }
            }
        }
</style>