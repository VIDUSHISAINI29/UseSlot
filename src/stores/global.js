import {ref, computed} from 'vue';
import{ defineStore} from 'pinia';
export const useGlobalStore = defineStore('global', () =>{
    const colorChange = ref(false)
    return {colorChange}
})