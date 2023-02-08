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
                    <h3>Technos</h3>
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
    width: 1000px;
    height: 400px;
    border-radius: 30px;
    background-color: var(--lemon-yellow-crayola);
    opacity: 0.8;
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-top: 80px;
}

.infos {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 830px;
}

.top {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;

}

.bottom {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 20px;
    font-family: 'Press Start 2P';
}

.list {
    display: flex;
    flex-flow: column nowrap;
    align-items: left;
    justify-content: space-between;
    padding: 0;
    margin: 0 30px
}

.company {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: start;
    height: 100%;
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
    width: 130px;
    height: 130px;
    margin: 20px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
    top: -50px;
}

.company-logo img {
    max-width: 100px;
    max-height: 100px;
}



.job-title {
    height: 100px;
    font-family: MuseoModerno;
    font-size: 36px;
    font-weight: 400;
    text-align: right;
    display: flex;
    align-items: center;
}

.fromto {
    height: 100px;
    font-family: MuseoModerno;
    font-size: 24px;
    font-weight: 400;
    display: flex;
    align-items: center;
}
</style>
