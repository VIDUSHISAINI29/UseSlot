<script setup>
import heading from '@/components/Heading.vue';
import { useGlobalStore } from "@/stores/global";

const global = useGlobalStore()

</script>

<template>
  <div class="tw-flex tw-flex-col tw-justify-center tw-items-center"   >

    <div :class="
      global.colorChange
        ? 'tw-bg-purple-700 tw-text-white'
        : 'tw-bg-transparent tw-text-black'
    " >i am</div>
    <heading value="I am Home Heading 2 & my existence is due to props.">
    <template  v-slot:homeHead>
        I am Home Heading 1 & my existence is due to slot.
    </template>
 
   
    </heading>
   
  </div>
</template>

<style scoped>

</style>