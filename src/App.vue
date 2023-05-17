<template>
  <h1 class="mx-30 font-semi-bold">Muscode App</h1>
  <div class="grid gap-15 mb-20">
    <to-do-list class="col-4" />
    <data-table class="col-8" />
  </div>

  <div class="grid gap-15">
    <products-cards class="col-4" />
  </div>
</template>

<script setup lang="ts">
import ProductsCards from "@/views/ProductsCards.vue";
import DataTable from "@/views/DataTable.vue";
import ToDoList from "@/views/ToDoList.vue";
</script>
