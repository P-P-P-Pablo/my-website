import { defineStore } from "pinia";
import { computed, ref } from "vue";
import jobData from "../assets/CV.json";
import ResumeButton from "../components/ResumeButton.vue";
import FunkyTitle from "../components/FunkyTitle.vue";
import JobCard from "../components/JobCard.vue";

export const useCompStore = defineStore("availableComponents", () => {
  const availableComponents = ref(
    new Map([
      [
        'resume',
        {
          component: ResumeButton,
          name: "Download my resume",
          props: {},
        },
      ],
      [
        'title',
        {
          component: FunkyTitle,
          name: "Funky Title",
          props: {
            title: "Funky Title",
          },
        },
      ],
    ])
  );

  /*  {
    resume:{
        component: ResumeButton,
        name: "Download my resume",
        props: {}
    },
    title:{
        component: FunkyTitle,
        name: "Funky Title",
        props: {
            title: "Funky Title"
        }
    }
  }); */

  const generateAvailableComponentsFromJobData = () => {
    jobData.forEach((job, index) => {
        availableComponents.value.set(`jobcard_${index}`, {
            component: JobCard,
            name: `jobcard_${index}`,
            props: job,
          });});
  };

  /* const generateAvailableComponentsFromJobData = () => {
    jobData.forEach((job, index) => {
      availableComponents[`jobcard_${index}`] = {
        component: JobCard,
        name: `jobcard_${index}`,
        props: job,
      };
    });
  }; */

  /* componentObj = {
        component: a vue component,
        name: a string which represents the name of the windows,
        props: an object which contains the props to be passed to the component
    } */

  const addToAvailableComponents = (componentObj) => {
    componentObj.forEach((comp) => {
      availableComponents.value.set(`${comp.name}`, {
        component: comp.component,
        name: `${comp.name}`,
        props: comp.props,
      })
    });
  };

  const getComponentData = computed(() => {
    return (componentKey) => availableComponents.value.get(componentKey);
  });

  return {
    availableComponents,
    generateAvailableComponentsFromJobData,
    addToAvailableComponents,
    getComponentData,
  };
});
