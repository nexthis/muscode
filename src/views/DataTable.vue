<template>
  <v-card >
    <div class="title text-left mb-10">Lista Produktów</div>
    <v-table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nazwa</th>
          <th>Promocyjna cena</th>
          <th>Cena</th>
          <th>Waluta</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of products">
          <td>{{ index }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.specialOffer ? item.specialOffer : " " }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.currency }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import VCard from "@/components/VCard.vue";
import VTable from "@/components/VTable.vue";

import { useProductStore } from "@/store/product";

const { products } = useProductStore();
</script>
