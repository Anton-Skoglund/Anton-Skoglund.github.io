<script lang="ts">

    import { onMount } from "svelte";

    import { FaCircle } from 'svelte-icons/fa';

    type CardInfo = {
        title: string;
        place: string;
        date: string;
    };

    type CardContent = {
        title: string;
        notes: string[];
    };

    let { cardInfo, cardContent }: {cardInfo: CardInfo, cardContent: CardContent} = $props();

    /* <div class="mark-ball">
            <FaCircle />
        </div>
      */  



    let isMobile = $state(false);

    onMount(() => {
        isMobile = window.innerWidth < 0;

        // Optional: Update on resize
        const handleResize = () => {
            isMobile = window.innerWidth < 768;
        };

        handleResize()
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });
</script>

<div class="experience-card-content">
    <div class="experience-card-sidebar">
        <div>
            <h4>{cardInfo.title}</h4>
            <p>{cardInfo.place}</p>
            <p>{cardInfo.date}</p>
        </div>
    </div>
    <div class="experience-card-expanded">
        <h4>{cardContent.title}</h4>
        {#each cardContent.notes as note}
            <p>{note}</p>
        {/each}
    </div>
</div>





<style lang="scss">
    .experience-card-content{
        display: flex;
        width: 100%;
        
        @media (max-width: 768px) {
            display: block;

 
            h4{
                margin-bottom: 0;
            }

            p{
                padding: 0 1rem;        
                margin-top: 0;            
            }
        }



        & > div{
            padding: 0 1rem;     
                           
        }
        
        .experience-card-sidebar{
            width: 20%;
            min-width: 10rem;
            
            @media (max-width: 768px) {
                width: 100%;
                min-width: 100%;

            }
        }

        .experience-card-expanded{
            width: 80%;
            min-width: 20rem;

            border-left: 1px solid #fff;
            
            @media (max-width: 768px) {
                width: 100%;
                min-width: 100%;

                border-left: none;
                border-bottom: 1px solid #fff;

            }
        }
    }
</style>