<script setup>
import PhotoSlider3 from '../components/PhotoSlider3.vue';
import Title from '../components/Title.vue';

</script>

<template>
    <div class="main-body">
        
        <Title title='About Me' />
        <div class="pres">
            <p>Hey there!</p>
            <p>My name is Pablo and I'm a web developer who's all about having a good time. When I'm not coding away, you can usually find me gaming, playing board games, or hanging with my friends. Cooking and movies are also a big part of my life, but I try to steer clear of horses (idk why they hate me) and working out. If you're a cat person, we already have something in common.</p>
            <p>My background is a little unconventional. I started out studying chemistry in hopes of making all the candies I could ever want, but eventually realized that water management was a more ethical and environmentally-friendly path. I've had a variety of jobs, including working in restaurants, construction, and even childcare. But my hobby of writing novels and articles led me to coding, and I fell in love with it.</p>
            <p>I honed my skills at Human Booster and the Wild Code School, and got my feet wet with a traineeship at 360Medics. My most recent gig was as an Industry 4.0 Analyst, but now I'm on the hunt for a new challenge that's both fun and fulfilling.</p>
        </div>
        <PhotoSlider3 />
    </div>
    
</template>

<style scoped>
.pres {
    font-family: 'Press Start 2P';
    max-width: 1000px;
}

</style>
