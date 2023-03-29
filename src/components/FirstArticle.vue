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
            <h2>My website</h2>
            <p>The first version of my website is finished! YAY \o/</p>
            <p>
                The goal was mainly to get rid of some bad habits I got while working on other technologies. I have to admit
                that I was a bit less productive than expected, I had estimated the project to take about 20 hours, but in
                the end it took more like 30-35 hours, I would say, I didn't calculate exactly. I think it's mainly due to
                the way I was working, which was 2-3 hour periods, irregularly.
                I tried some new stuff on this project. Well, new... I had learned how to do it during my trainings but I
                hadn't really implemented it on my previous personal projects. So, among the things I'm trying, there is
                this little article that will serve as a feedback on this project, on the technical side but also my
                feeling. I had the impression that there were 3 distinct steps that I will now detail.
            </p>
        </div>
        <div v-if="showFullContent">
            <div class="part">
                <h3> 1.The preparation </h3>
                <div class="row">
                    <img src="../assets/wireframescreenshot.png" alt="wireframe screenshot" class="wireframe" />
                    <div>
                        <p>This is mainly where I made the biggest changes in my methods.</p>
                        <p>I decided to respect a little more the advices I had been given during my trainings about the
                            beginning
                            of a
                            project. It's a decision that certainly made me lose time at the beginning but that I
                            absolutely
                            do not
                            regret. It was a tremendous help throughout the project.</p>
                        <p>I started by producing a wireframe with <a href="https://balsamiq.com/">Balsamiq</a>. It
                            helped me to get a general idea of what I
                            wanted my
                            site
                            to do. When I started, I had a lot of ideas in my head, most of which were not achievable
                            for
                            me. I
                            finally
                            settled on the idea that it was a site that would help me find work in the first place. At
                            the
                            functional
                            level, it became clear that I had to limit myself to the minimum, i.e., 3 pages: one to
                            introduce
                            myself,
                            one to describe my professional experiences, and one to talk about my personal projects.
                        </p>
                    </div>
                </div>
                <div class="row">

                    <p>Next, I tried to produce a mockup, a little more advanced than the wireframe. I had to get a
                        little bit
                        interested in design because I don't know much about it. I spent some time watching videos and
                        reading
                        articles about design. It was interesting but I figured it was too broad a topic for me to
                        really master
                        before I got into it. I'll come back to it. I started, armed with my little knowledge but full
                        of
                        motivation, by familiarizing myself with some software I found to help me. The first one was
                        obviously
                        <a href="https://www.figma.com/">Figma</a>, but it was too complex for the time I wanted to
                        spend on it. I ended up finding a tool
                        that
                        seemed
                        more accessible at the time called <a href='https://icones8.fr/lunacy'>Lunacy</a>. That was
                        enough for what I wanted. I ended up
                        producing this
                        design based on what I found on the net.
                    </p>
                    <img src="../assets/MyWebsite.png" alt="mockup screenshot" />

                </div>
            </div>
            <div class="part">
                <h3> 2.The beginning of the project </h3>

                <div class="row">
                    <img src="..\assets\codescreenshot.png" alt="vscode screenshot" class="code" />
                    <p>Let's go for the code! During all the preparation time, I took some time to read the VueJS
                        documentation
                        again. The last time I had done so was getting old and I realized that a lot of standards had
                        changed.
                        It
                        took a lot less time than I thought to get used to it. Honestly, I'd go into technical details
                        but
                        the
                        project is very simple and I didn't have any difficulties that need to be mentioned. I had to go
                        back
                        and
                        forth a few times to get a nice animation on the cat slider but that was mostly because I was
                        rusty
                        on
                        CSS.
                    </p>
                </div>
                <p>I didn't want to put my real face on the site, so I thought I'd put a logo that looked like me
                    instead. I
                    suck at drawing so I asked DALL-E, I'm pretty happy with the result. I had to tweak it a little bit
                    to
                    make
                    it look more like me anyway. I've been playing with DALL-E and ChatGPT for a while now and I must
                    admit
                    that
                    I'm pretty proud of my talent to make nice prompts, I often manage to get what I want the first
                    time.
                </p>
                <p>The result took well shape and quickly too! I'm pretty happy with it, I was afraid of deviating too
                    much
                    from
                    the design I had planned. I'm usually a scatterbrained kind of guy. That's where I was happy to have
                    done
                    all that preparatory work, it helped me stay focused on the goal.</p>
            </div>
            <div class="part">
                <h3>The end of the beginning</h3>
                <p>I was really happy with what I was able to do and I started to show it to my friends to get feedback.
                    I
                    tried
                    to take a little bit of everything into account but it's not finished, I want this site to keep
                    evolving!
                </p>
                <p>The main change I would say is the addition of the button to upload my CV, which was not originally
                    planned.
                    It was pointed out to me that this site was a good showcase but, in France, we are very procedural
                    so I
                    needed a CV that could more easily fit into the boxes for recruiters.</p>
                <p>Another change was my vision of the 3rd page, the one about my projects. I decided that it wasn't
                    necessarily
                    relevant to talk about half-finished or just abandoned projects. So I decided to focus on this site
                    and
                    future projects. Instead of just putting a short presentation and some pictures, I wanted to try to
                    make
                    something like a blog post. The idea was more to take a step back on this project rather than just a
                    short
                    description and some screenshots.</p>
            </div>
            <div class="conclu">
                <p>To finish, I would say that I have succeeded in what I wanted to do when I started this. I have a clean
                    site
                    that is presentable to professionals. For sure it could be nicer but I intend to keep working on it. I
                    already have many ideas for the 2nd version ;) Before that, I'm going to do the mobile version first
                    since
                    the display is DISGUSTING on phones.</p>
                <p>There is a link to the github of the project at the top. Feel free to take a look or comment on it, even
                    if it's not really documented it should be easily readable.</p>
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

p {
    font-size: 14px;
    line-height: 16px;
    text-align: justify;
}

img {
    margin: 10px;
    max-height: 250px;
}

.part {
    padding-left: 30px;
}


.row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

.code {
    max-width: 200px;
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

  