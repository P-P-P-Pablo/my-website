<script setup>
import { ref } from 'vue'

const showFullContent = ref(false)

function toggleContent() {
    showFullContent.value = !showFullContent.value
}

</script>

<template>
    <div class="article">
        <a class="github" :class="showFullContent ? 'visible' : ''" href="https://github.com/P-P-P-Pablo/my-website"
            target="blank"> <img src="../assets/Github.svg" /></a>
        <div class="intro" @click="toggleContent">
            <h2>The 2nd version of my website is ready! </h2>
            <h3> Big change compared to version 1. </h3>
            <p>
                The 1st version of the site was really ugly, but the goal was more to push me to do things than to do
                something good. So, I decided to be a little more creative on this new version. I decided to change from the
                classic scheme of a website for example by basing myself more on an OS interface. I'm quite happy with the
                result, I must admit.
            </p>
            <p>This time, I propose you to take a look at the implementation of this window system. </p>
        </div>
        <div v-if="showFullContent">
            <div class="part">
                <p>The first thing you need to know is that it all revolves around 2 main components: the page that will
                    contain the windows (which we'll call Parent or WindowView) and the windows themselves (which we'll also
                    call Child).</p>
                <h3> Let's start with the children:</h3>
                <p>A classic window on an OS, as we know them, has 6 possible actions: </p>
                <ul>
                    <li>You can open it.</li>
                    <li>You can close it.</li>
                    <li>You can drag it around.</li>
                    <li>You can minimize it.</li>
                    <li>You can put it in full screen.</li>
                    <li>You can change the size manually. </li>
                </ul>
                <p>My windows are a little less capable for the moment, but it is planned to improve them with some
                    cooler animations: </p>
                <ul>
                    <li>They can be opened of course. </li>
                    <li>They can be closed too.</li>
                    <li>They can be dragged around. </li>
                    <li>They can be reduced but, as long as I haven't set up an equivalent to the taskbar, we end up
                        with a little thing that moves around. I put it in as a tribute to what is already being
                        done and to keep the possibility of doing something with it. I don't think it's a high
                        priority, for me it will become useful when we can have a lot of windows open
                        simultaneously.</li>
                    <li> You can put them in "full screen". It's pretty useful to make windows with text inside more
                        readable but I'd have to find a way to scale the others. </li>
                    <li>You can't change the size manually for the moment. It's not for lack of finding a way to do
                        it, but until I figure out how to "scale" the content of the windows correctly, I'd rather
                        wait to implement it to avoid creating difficulties. </li>
                </ul>
                <p>Another notable point of difference is that I couldn't get the last window clicked to be the frontmost
                    one. This is something that I had thought about and that actually created problems during development
                    because I hadn't yet understood some of the new features of vuejs. I think it should be simple now. </p>
                <p> This concern about the layout was the reason for my decision to use stores to centralize the control of
                    the windows. We'll get to that later since it's time to talk about the parent. </p>
            </div>
            <div class="part">
                <h3> The Parent:</h3>

                <p>Originally, WindowView was mostly the page where I put windows for testing during development. I quickly
                    realized that I needed to insert some logic into it. I couldn't continue with the original idea of
                    letting each window manage itself without creating conflicts between them. So, I started by storing the
                    list of windows nearby. I ended up with a lot of props floating around, it wasn't very pretty. The
                    solution of the store was self-evident: I needed to be able to access the states of my different windows
                    at any time so I could synchronize their operation and avoid stupid bugs like overlapping windows. </p>
            </div>
            <div class="part">
                <h3> The Logic: </h3>

                <p>I ended up with 2 stores: </p>
                <ul>
                    <li>
                        <p>the first one was used to maintain a list of all the components you could put in a window. It
                            allows me to do a semblance of lazy loading by loading components into the store before
                            injecting them into a window.</p>
                        <p>It allows me to prepare components that can themselves accept different contents (for example,
                            the cards that describe my previous experiences). </p>
                    </li>
                    <li>
                        <p>the second one is used to manage what WindowView managed before. It allows me to keep a list of
                            all the open windows (loaded from the components list) and, above all, it allows me to
                            centralize the logic of the windows by keeping all the functions that they could not assume
                            alone in a corner. It allows me to open and close windows, save their positions and a lot of
                            other things. </p>
                    </li>
                </ul>
            </div>
            <div class="part">
                <h3>Methodology?:</h3>
                <p>I enjoyed trying to get things organized in the first version. Let's face it, I'm still struggling. This
                    time, none of that: no wireframe or mockup. I had a clear idea of what I wanted technically and that was
                    enough for me. I decided to keep the previous "graphic chart", it was the most necessary and I hadn't
                    especially been inspired more than that. </p>
            </div>
            <div class="conclu">
                <h3 class="futur">The future: </h3>
                <p>For the future, I intend to make a lot of improvements: </p>
                <ul>
                    <li>First of all, I want to improve the window system a bit more with the possibility to put a window in
                        front and the possibility to clip windows together. </li>
                    <li>I would also like to find a way to make a taskbar equivalent. I don't really want to make a stupid
                        bar at the bottom of the screen. I might have some ideas, but it might be complicated to implement,
                        a lot of things I don't know yet. </li>
                    <li> The design clearly needs work. I don't know much about design and I'm not a great artist either,
                        but I have the motivation to learn. I'll take the time to learn a little more but it's still my
                        biggest priority. I like the cheap and somewhat retro feel I've gotten so far. Maybe I'll try to
                        stick with that, I'm looking forward to something with a screen overloaded with a lot of bad
                        elements, I want to get closer to the design of the old Japanese sites. </li>
                    <li>I tried to add an old Pong project I did to learn how to use canvas. I'm not sure what it does here
                        but I wanted to add some activities to the site. This thing isn't very technically advanced or even
                        fun to play either, but I like the idea of having a reason to spend some time on this site.
                        Something to think about! </li>
                </ul>
            </div>
        </div>
        <div class="seemore" @click="toggleContent">
            {{ showFullContent ? 'See less' : 'See more' }}
        </div>
    </div>
</template>
  
<style scoped>
.article {
    background: hsla(217, 100%, 81%, 0.5);
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
    padding: 20px;
    font-family: 'Press Start 2P';
}

h3,
h2 {
    text-decoration: underline;
    margin-top: 10px;
}

.part {
    padding-left: 30px;
}



.seemore {
    text-decoration: none;
    border-radius: 1px;
    text-align: center;
    padding: 7px;
    background: none;
    border: 2px solid #DD2826;
    color: #DD2826;
    text-transform: uppercase;
}

.seemore:hover {
    border-radius: 3px;
    cursor: pointer;
    background-color: #DD2826;
    color: #FFF;
    transition: all .2s;
}

.github {
    position: fixed;
    top: 150px;
    right: 15px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.visible {
    opacity: 1;
}
</style>

  