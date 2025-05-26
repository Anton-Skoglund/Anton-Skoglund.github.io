<script lang="ts">
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

        & > div{
            padding: 1rem;                    
        }
        
        .experience-card-sidebar{

            width: 20%;
            min-width: 10rem;
        }

        .experience-card-expanded{

            width: 80%;
            min-width: 20rem;

            border-left: 1px solid #fff;
        }

        .mark-ball{
            width: 16px;
            height: 16px;
            position: absolute;
            transform: translateX(-24px) translateY(24px);
            color: #fff;
        }
    }
</style>