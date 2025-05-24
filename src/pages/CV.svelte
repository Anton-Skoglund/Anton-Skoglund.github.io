<script lang="ts">
    import Nav from "../components/Nav.svelte";
    import { onMount } from 'svelte';
    import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGripLines } from 'svelte-icons/fa';


    let mainEl: Element;
    let width = 0;
    let height = 0;

    let isMouseDown = false;

    let contentWidth = 80;
    let slideBar = 1;
    let sidebarWidth = 100 - contentWidth - slideBar;

    function handleMouseDown() {
        isMouseDown = true;
    } 

    function handleMouseUp() {
        isMouseDown = false;
    }

    function handleMouseMove(event: MouseEvent) {
        if(isMouseDown){
            slideBar = 4
            contentWidth = 100 - ((event.clientX +5) / width) * 100;
            sidebarWidth = 99 - contentWidth;

        }else{
            console.log('test')
            isMouseDown = false;
            slideBar = 1
        }
    }
    

    onMount(() => {
        const rect = mainEl.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
    });
</script>



<main bind:this={mainEl}>
    <Nav></Nav>

    <div class="cv">
        <div class="sidebar" style="width: {sidebarWidth}%;">
            
            <div class="hello">
                <img src="" alt="">
                <h1>Anton Skoglund</h1>
            </div>
            <div class="about-me">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum quam pariatur et culpa doloremque accusamus accusantium sequi, ratione aliquam ipsa quisquam corrupti corporis necessitatibus repellat exercitationem quia mollitia deserunt quae adipisci debitis, unde est. Doloremque dicta saepe omnis dolores.</p>
            </div>

            <div class="contact">
                <h3>Contact</h3>
                <div class="contact-list">
                    <div class="contact-list-item"><div><FaEnvelope /></div> contact@example.com</div>
                    <div class="contact-list-item"><div><FaPhone /></div> +1 234 567 890</div>
                    <div class="contact-list-item"><div><FaMapMarkerAlt /></div> 123 Main St</div>
                </div>
            </div>
        </div>

        <div 
            class="slider"
            style="width: {slideBar}%;"
            role="button"
            tabindex=0
            onmousemove={handleMouseMove}
            >
            <div class="grab-lines">
                <FaGripLines />
            </div>
        </div>

        <div class="content" style="width: {contentWidth}%;">
            <image>IMAGE</image>
            <p>About me</p>
        </div>
    </div>
</main>    



<style lang="scss">
    main{
        height: 100vh;
        margin: 0;
    }

    
    .cv {
        display: flex;
        height: 100%;

        .sidebar{
            display: flex;
            flex-direction: column;
            align-items: center;
        
            overflow: hidden;

            h3{
                text-align: left;

            }

            div{
                width: 100%;
            }

            .hello{
                img{
                    width: 128px;
                    height: 128px;
                }
            }

            .about-me{

                border-top: solid 1px black;
                
                p {
                    font-size: 0.75rem;
                    text-align: left;
                    margin: 1rem;
                }
            }

            .contact{
                border-top: solid 1px black;

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
                    line-height: 0;
                    
                    & > div {
                        width: 1rem;
                        height: 1rem;
                    }

                }
            }

        }

        .content{

        }

        .slider{
            display: flex;
            align-items: center;
            border: 1px solid white;            
            &:hover{
                cursor: pointer;
            }

            .grab-lines{
                transform: rotate(90deg) scaleX(3);
            }
        }
    }
</style>