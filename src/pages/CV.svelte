<script lang="ts">
    import { onMount } from "svelte";
    import {
        FaEnvelope,
        FaPhone,
        FaMapMarkerAlt,
        FaGripLines,
        FaCircle,
    } from "svelte-icons/fa";

    import Nav from "../components/Nav.svelte";
    import CardInfo from "../components/CV/ExperienceCardContent.svelte";
    import Sidebar from "../components/CV/Sidebar.svelte";

    
    let navElement: HTMLElement | null = null;

    function setNavRef(el: HTMLElement) {
        navElement = el;
    }
    let navHeight = 0;

    let mainEl: Element;
    let width = 0;
    let height = 0;

    let isGrabbedSidebarSlider = false;

    let contentWidth = 80;
    let slideBar = 1;
    let sidebarWidth = 100 - contentWidth - slideBar;

    let isTopContentSliderGrabbed = false;
    let isBottomContentSliderGrabbed = false;
    let experienceCardHeight1 = 33;
    let experienceCardHeight2 = 33;
    let experienceCardHeight3 = 33;

    let experienceBarTop = 33;
    let experienceBarBottom = 66;

    let verticalSlideBar = 1;

    function handleSideBarStart() {
        isGrabbedSidebarSlider = true;
    }

    function handleExperienceStart() {
        isTopContentSliderGrabbed = true;
    }

    function handleExperienceLowerStart() {
        isBottomContentSliderGrabbed = true;
    }

    function handleEnd() {
        isTopContentSliderGrabbed = false;
        isGrabbedSidebarSlider = false;
        isBottomContentSliderGrabbed = false;
    }

    function handleMove(event: MouseEvent | TouchEvent) {
        let client: MouseEvent | Touch
        
        if (event instanceof TouchEvent) {
            client = event.touches[0];
        } else {
            client = event;
        }
        
        let clientY: number = client.clientY;
        let clientX: number = client.clientX;


        if (isGrabbedSidebarSlider) {
            contentWidth = 100 - ((clientX + 5) / width) * 100;
            sidebarWidth = 99 - contentWidth;
        } 
        
        else if (isTopContentSliderGrabbed) {
            experienceBarTop = (clientY / height) * 100;
 
            if ((experienceBarBottom  < experienceBarTop + 2) && ((clientY / height) * 100 >= experienceBarTop)) {
                experienceBarBottom = experienceBarTop + 2;
            }
            
            experienceCardHeight1 = experienceBarTop - 1;
            experienceCardHeight2 = experienceBarBottom - experienceBarTop;
            experienceCardHeight3 = 100 - experienceBarBottom;

        } 
        
        else if (isBottomContentSliderGrabbed) {
            experienceBarBottom = (clientY / height) * 100;

            if(experienceBarBottom < 0 && (clientY / height)*100 < experienceBarBottom){
                experienceBarBottom = 0
            }

            if ((experienceBarBottom < experienceBarTop + 2) && ((clientY / height) * 100 <= experienceBarBottom)) {
                experienceBarBottom = (clientY / height) * 100;
                experienceBarTop = experienceBarBottom - 2;
            }

            experienceCardHeight1 = experienceBarTop - 1
            experienceCardHeight2 = experienceBarBottom - experienceBarTop;
            experienceCardHeight3 = 100 - experienceBarBottom;
        } 
        
        else {
            isGrabbedSidebarSlider = false;
            isTopContentSliderGrabbed = false;
            isBottomContentSliderGrabbed = false;
        }
    }

    onMount(() => {
        if (navElement) {
            const rect = navElement.getBoundingClientRect();
        }

        const updateSize = () => {
            const rect = mainEl.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
        };

        updateSize(); // Initial set
        const resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(mainEl);

        const rect = mainEl.getBoundingClientRect();
        width = rect.width;
        height = rect.height;

        const remInPx = parseFloat(
            getComputedStyle(document.documentElement).fontSize,
        );
        const rem17_5 = 17.5 * remInPx;

        if (width * 0.2 < rem17_5) {
            contentWidth = 100 - (rem17_5 / width) * 100;
            sidebarWidth = 99 - contentWidth;
        }

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleEnd);

        window.addEventListener("touchmove", handleMove, { passive: false });
        window.addEventListener("touchend", handleEnd);

        return () => {
            resizeObserver.disconnect();

            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleEnd);

            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleEnd);
        };
    });
</script>



<main bind:this={mainEl}>
    <Nav setElRef={setNavRef} />
    
    <div class="cv">
        <Sidebar sidebarWidth={sidebarWidth}/>

        <div
            class="slider"
            style="width: {slideBar}%;"
            role="button"
            tabindex="0"
            onmousedown={handleSideBarStart}
            ontouchstart={handleSideBarStart}
        >
            <div class="grab-lines">
                <FaGripLines />
            </div>
        </div>

        <div class="content" style="width: {contentWidth}%;">
            <div class="experience-card"
                style="height: {experienceCardHeight1}%;"
            >
                <h3>Education</h3>
                <CardInfo
                    cardInfo={{
                        title: "Chalmers",
                        place: "Göteborg",
                        date: "August 2023 - ",
                    }}
                    cardContent={{
                        title: "Informationsteknik, civilingenjör",
                        notes: [
                            "(Computer science)",
                            "Studying,  ",
                            'Also like to "study" (read) other random stuff like philosophy, economics, logistics, psychology, organization theory',
                        ],
                    }}
                />

                <CardInfo
                    cardInfo={{
                        title: "Lindholmen Tekniska Gymnasium",
                        place: "Göteborg",
                        date: "August 2020 - May 2023",
                    }}
                    cardContent={{
                        title: "Technical Gymnasium (High school)",
                        notes: [
                            "Got good enough grades for Chalmers",
                            "Tried to find out what I enjoy and what I want to do",
                        ],
                    }}
                />
            </div>

            <div
                class="vertical-slider"
                role="button"
                tabindex="0"
                onmousedown={handleExperienceStart}
                ontouchstart={handleExperienceStart}
            >
                <div class="grab-lines">
                    <FaGripLines />
                </div>
            </div>

            <div class="experience-card"
                style="height: {experienceCardHeight2}%;"
            >
                <h3>Work</h3>

                <CardInfo
                    cardInfo={{
                        title: "Adient",
                        place: "Göteborg",
                        date: "July 2024 - August 2024",
                    }}
                    cardContent={{
                        title: "Work",
                        notes: [
                            "I worked on the Line with putting in the same screw over and over",
                            "I was night shift which I exhausting",
                        ],
                    }}
                />

                <CardInfo
                    cardInfo={{
                        title: "Volvo Lastvagnar",
                        place: "Göteborg",
                        date: "July 2023 - August 2023",
                    }}
                    cardContent={{
                        title: "Work",
                        notes: [
                            "Worked on a fixing station so did various tasks where we worked in groups",
                            "The organizational structure was supposed to be agile I guess because we hade some kind of stand up everyday, so that was also interesting",
                            "Worked one week day-time and the other week night-time, very strange",
                        ],
                    }}
                />

                <CardInfo
                    cardInfo={{
                        title: "Närhälsan Stenungsund rehabmottagning",
                        place: "Stenungsund",
                        date: "July 2022 - August 2022",
                    }}
                    cardContent={{
                        title: "Work",
                        notes: [
                            "Worked as an assistance, help to clean, organize, help when visiting elders",
                        ],
                    }}
                />
            </div>

            <div
                class="vertical-slider"
                role="button"
                tabindex="0"
                onmousedown={handleExperienceLowerStart}
                ontouchstart={handleExperienceLowerStart}
            >
                <div class="grab-lines">
                    <FaGripLines />
                </div>
            </div>

            <div class="experience-card" style="height: {experienceCardHeight3}%;"
>               <h3>Skills</h3>
                
                <CardInfo
                    cardInfo={{
                        title: "Programming Languages",
                        place: "",
                        date: "",
                    }}
                    cardContent={{
                        title: "List",
                        notes: [
                            "Java",
                            "Python",
                        ],
                    }}
                />
                <CardInfo
                    cardInfo={{
                        title: "Natural Languages",
                        place: "",
                        date: "",
                    }}
                    cardContent={{
                        title: "List",
                        notes: [
                            "English, fluent",
                            "Swedish, fluent",
                            "German, basic"
                        ],
                    }}
                />

                <CardInfo
                    cardInfo={{
                        title: "License",
                        place: "",
                        date: "",
                    }}
                    cardContent={{
                        title: "List",
                        notes: [
                            "Car (B)",
                        ],
                    }}
                />
            </div>
        </div>
    </div>

    
</main>

<style lang="scss">
    main {
        height: 100vh;
        margin: 0;
    }



    .cv {
        display: flex;
        height: 90%;


        .experience-card {
            display: flex;
            flex-direction: column;
            align-items: start;

            text-align: start;
            overflow: hidden;
        }

        .vertical-slider {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 1%;
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);

            .grab-lines {
                width: 10px;
                transform: scaleX(3);
                display: flex;
                align-items: center;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        
        .slider {
            display: flex;
            align-items: center;
            border-left: 1px solid rgba(255, 255, 255, 0.5);
            border-right: 1px solid rgba(255, 255, 255, 0.5);

            &:hover {
                cursor: pointer;
            }

            .grab-lines {
                transform: rotate(90deg) scaleX(3);
                display: flex;
                align-items: center;
            }
        }
    }
</style>
