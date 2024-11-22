<script setup>
import Topbar from './Topbar.vue';
import home from '@/views/Home.vue';

</script>

<template>
    
    <div>
        <Topbar/>
        <home/>
    <router-view/>
    </div>
</template>

<style scoped>

</style>