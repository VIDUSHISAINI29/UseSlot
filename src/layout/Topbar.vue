<script setup>
    import { useGlobalStore } from "@/stores/global";

    const global = useGlobalStore()
</script>

<template>
    <div class="navbar tw-bg-purple-200 tw-w-full tw-p-2 tw-flex tw-justify-around tw-items-center">
        <button  @click="global.colorChange = !global.colorChange">Change Main Color</button>
        <div class="nav_inn w-3/5 tw-bg-purple-900 tw-p-2 tw-flex tw-rounded-md">
            <div  class="logo  tw-text-4xl tw-text-white tw-text-center tw-font-bold tw-flex-col">Testing</div>
           
        </div>
        <div class=" tw-text-purple-950 tw-text-lg tw-font-bold tw-flex tw-items-center tw-justify-end tw-gap-10">
                <router-link to="home">Home </router-link>
                <RouterLink to="/about">About Us </RouterLink>
                <RouterLink to="/contact-us">Contact Us </RouterLink>
            </div>
    </div>
</template>

<style scoped>

</style>