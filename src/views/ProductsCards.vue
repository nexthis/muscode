<template>
  <v-modal v-for="item of products">
    <template v-slot:activator="{ on }">
      <v-card v-on="on" v-bind="$attrs" @click="handleSelect(item)">
        <v-ribbon v-if="item.specialOffer !== 0">
          -{{ percentOf(item.price, item.specialOffer) }}%
        </v-ribbon>

        <div class="title text-left">{{ item.name }}</div>

        <div class="p-15">
          <img
            class="h-200 img-fluid contain"
            :src="item.image"
            :alt="item.name"
          />
        </div>
        <div class="title">
          {{ item.specialOffer ? item.specialOffer : item.price }}
          {{ item.currency }}
        </div>

        <div class="text-line-through" v-if="item.specialOffer !== 0">
          {{ item.price }}
          {{ item.currency }}
        </div>
      </v-card>
    </template>

    <template v-slot:default="{ close }">
      <div class="h-full flex flex-col space-between">
        <div>
          <div class="p-15">
            <div class="head text-left">
              Edycja produktu: {{ selected?.name }}
            </div>
          </div>

          <div class="line" />
          <div class="p-15">
            <img
              class="shadow-basic product-image mb-10"
              :src="selected?.image"
              :alt="selected?.name"
            />

            <v-input
              v-model="selected.name"
              label="Nazwa Produktu"
              class="mb-10"
            />

            <v-input
              v-model="selected.price"
              type="number"
              label="Cena"
              class="mb-10"
            />

            <v-input
              type="number"
              v-model="selected.specialOffer"
              label="Promocyjna Cena"
              class="mb-10"
            />

            <v-select
              :values="['$', 'EUR', 'PLN']"
              v-model="selected.currency"
              label="Waluta"
              class="mb-10"
            />
          </div>
        </div>

        <div class="flex p-10 separator">
          <v-button @click="handleSave">Zapisz</v-button>
          <v-button @click="close" class="ml-10">Anuluj</v-button>
        </div>
      </div>
    </template>
  </v-modal>
</template>

<script setup lang="ts">
import VRibbon from "@/components/VRibbon.vue";
import VCard from "@/components/VCard.vue";
import VModal from "@/components/VModal.vue";
import VInput from "@/components/VInput.vue";
import VSelect from "@/components/VSelect.vue";
import VButton from "@/components/VButton.vue";

import { ref } from "vue";
import { useProductStore } from "@/store/product";
import { percentOf } from "@/utils/math";
import type { Product } from "@/types/product";

const selected = ref<Product>({
  id: 0,
  currency: "$",
  image: "",
  name: "",
  price: 0,
  specialOffer: 0,
});

const { products, update } = useProductStore();

const handleSelect = (value: Product) => {
  selected.value = { ...value };
};

const handleSave = () => {
  update(selected.value);
};
</script>

<style scoped lang="scss">
@import "@/styles/variable";
.head {
  font-size: 1.4rem;
  font-weight: 500;
}
.separator {
  border-top: 1px solid $border;
}
.line {
  width: 100%;
  height: 4px;
  background-color: #40499c;
}

.product-image {
  $size: 200px;
  border-radius: 100%;
  height: $size;
  width: $size;
  object-fit: contain;
  margin: auto;
}
</style>
