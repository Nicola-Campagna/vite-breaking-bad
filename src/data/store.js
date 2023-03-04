// reactive per rendere reattivo globalmente 
import { reactive } from "vue";
export const store = reactive({
    characters: [],
    isLoading: false,
    endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0",
    pages: {}

}) 
