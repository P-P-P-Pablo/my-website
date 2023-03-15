<script setup>
defineProps({
    jobTitle: String,
    companyName: String,
    fromTo: String,
    missions: Array,
    technos: Array,
    companyLogo: String

})
</script>

<template>
    <div class="job-card">
        <div class="company">
            <div class="company-logo">
                <img :src="companyLogo" />
            </div>
            <h4 class="company-name">{{ companyName }}</h4>
        </div>
        <div class="infos">
            <div class="top">
                <div class="job-title">{{ jobTitle }}</div>
                <div class="fromto">{{ fromTo }}</div>
            </div>
            <div class="bottom">
                <div class="missions">
                    <h3>Missions</h3>
                    <ul class="missions list">
                        <li v-for="(mission, i) in missions" :key="i">
                            {{ mission }}
                        </li>
                    </ul>
                </div>
                <div class="technos">
                    <h3>Techs</h3>
                    <ul class="technos list">
                        <li v-for="(techno, j) in technos" :key="j">
                            {{ techno }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.job-card {
    width: 100%;
    max-width: 600px;
    border-radius: 30px;
    background-color: var(--lemon-yellow-crayola);
    opacity: 0.8;
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 30px;
}

.infos {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
}

.top {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

}

.bottom {
    display: flex;
    width: 90%;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-bottom: 20px;
    font-family: 'Press Start 2P';
    font-size: 10px;
    line-height: 12px;
}

.missions {
    margin-left: 30px;
}

.list {
    display: flex;
    flex-flow: column nowrap;
    align-items: left;
    justify-content: space-between;
    padding: 0;
    margin: 0 30px;
    line-height: 18px;
}

.company {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: start;
}

.company-name {
    transition: all 1s ease-in-out 0.1s;
    color: var(--lemon-yellow-crayola);
    font-family: MuseoModerno;
}

.company:hover .company-name {
    display: block;
    color: black;
    text-shadow: 2px 1px 2px rgba(100, 100, 100, 0.5);
}

.company-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
}

.company-logo img {
    width: 100px;
    height: 100px;
    border-radius: 30px;
}



.job-title {
    font-family: MuseoModerno;
    font-size: 14px;
    font-weight: 400;
    text-align: right;
    display: flex;
    align-items: center;
}

.fromto {
    height: 100px;
    font-family: MuseoModerno;
    font-size: 10px;
    font-weight: 400;
    display: flex;
    align-items: center;
}
</style>
