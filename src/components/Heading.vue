<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    value:String
})

</script>

<template>
   <div class=" tw-flex tw-flex-col tw-gap-2">
    <h1 class=" tw-rounded-lg tw-mt-10 tw-p-5 tw-text-white tw-bg-purple-500 tw-inline-block  tw-text-5xl">
        <slot name="homeHead"></slot>
    </h1>
    <h1 class=" tw-rounded-lg tw-mt-10 tw-p-5 tw-text-white tw-bg-red-300 tw-inline-block  tw-text-5xl">
       {{value}}
    </h1>
   </div>
</template>

<style scoped>

</style>