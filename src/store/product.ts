import { computed, ref } from "vue"
import { defineStore } from "pinia"
import {list} from "@/mock/product"
import type { Product } from "@/types/product"

export const useProductStore = defineStore('product', () => {
    const productsState = ref<Array<Product>>(list())
    
    const products = computed(() => productsState.value)

    function update (value: Product ){
        const index = productsState.value.findIndex(item => item.id === value.id)
        products.value[index] = value
    }

    return {products, update}
})