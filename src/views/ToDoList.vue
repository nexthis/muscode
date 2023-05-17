<template>
  <v-card >
    <div class="flex space-between mb-10">
      <div class="title text-left">Lista todo</div>
      <div class="title text-left">
        Wykonane: {{ items.filter((item) => item.state).length }}
      </div>
    </div>
    <v-list v-model="items" />
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VCard from "@/components/VCard.vue";
import VList from "@/components/VList.vue";

const items = ref([
  { text: "Lorem ipsum dolor sit amet consectetur", state: false },
  { text: "Adipisicing elit.", state: false },
  { text: "Repellendus animi, quibusdam odit ratione,", state: false },
  { text: "consequatur saepe ducimus quos autem cum", state: false },
  { text: "consequatur saepe ducimus quos autem cum", state: false },
]);
</script>
