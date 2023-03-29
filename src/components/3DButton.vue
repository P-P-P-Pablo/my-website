<script setup>
defineProps({
    alt: {
        type: String,
        default: "Button"
    }
})
</script>

<template>
    <div class="button-container">
        <div class="button">
            <a href="#">
                <slot></slot>
            </a>
        </div>
        <p class="name">{{ alt }}</p>
    </div>
</template>


<style scoped>
.button {
    position: relative;
    display: inline-block;
    margin: 20px;
}

.button a {
    color: white;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: #ffa12b;
    display: block;
    position: relative;
    padding: 10px 20px;

    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);
    box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
    border-radius: 5px;
}

.button a:active {
    top: 10px;
    background-color: #F78900;

    box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
}

.button:after {
    content: "";
    height: 100%;
    width: 100%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    z-index: -1;
    background-color: #2B1800;
    border-radius: 5px;
}

.name {
    color: black;
    transition: all 1s ease-in-out 0.1s;
    font-family: Lobster;
    font-size: 12px;
    text-align: center;
    opacity: 0;
}

.button-container:hover .name {
    display: block;
    opacity: 1;
    text-shadow: 2px 1px 2px rgba(100, 100, 100, 0.5);
}
</style>