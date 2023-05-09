<script setup>
import Box from './Box.vue';
import FlyingBox from './FlyingBox.vue';
import Button3D from './3DButton.vue';


const getY = (position) => {
    // check if the window is too small to display all the buttons
    if (window.innerHeight < (position + 1) * 130) return (0 - (window.innerHeight / 2));
    else return ((position * 130) - (window.innerHeight / 2));
}

const getX = (position) => {
    // check if the window is too small to display all the buttons
    if (window.innerHeight < (position + 1) * 130) return 110 - (window.innerWidth / 2);
    else return 0 - (window.innerWidth / 2);
}
</script>

<template>
    <div class="copitest">
        <Box class="box">
            <FlyingBox :targetX="getX(0)" :targetY="getY(0)">
                <Button3D alt="About me">
                    <img src="../assets/003-user.png" alt="About me" />
                </Button3D>
            </FlyingBox>
            <FlyingBox :targetX="getX(1)" :targetY="getY(1)">
                <Button3D alt="My previous positions">
                    <img src="../assets/002-cv.png" alt="My previous positions" />
                </Button3D>
            </FlyingBox>
            <FlyingBox :targetX="getX(2)" :targetY="getY(2)">
                <Button3D alt="My previous projects">
                    <img src="../assets/001-project.png" alt="My previous projects" />
                </Button3D>
            </FlyingBox>
            <FlyingBox :targetX="getX(3)" :targetY="getY(3)">
                <Button3D alt="Cats">
                    <img src="../assets/cat.png" alt="Cat" />
                </Button3D>
            </FlyingBox>
            <FlyingBox :targetX="getX(4)" :targetY="getY(4)">
                <Button3D alt="P-P-P-Pong">
                    <img src="../assets/console.png" alt="P-P-P-Pong" />
                </Button3D>
            </FlyingBox>
        </Box>
    </div>
</template>

<style scoped>
.copitest {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>