<template>
  <v-card
    flat
    v-on:click="
      getData(
        Table_id,
        numberUsertable,
        Price,
        Total_Price,
        isActive,
        Tableid,
        status
      )
    "
  >
    <v-list-item v-bind:class="isActive ? 'red' : 'green'">
      <v-list-item-content class="white--text">
        <div>
          <h3 class="text-center">{{ Table_id }}</h3>
        </div>
        <v-icon size="60" class="white--text">mdi-table-furniture</v-icon>
        <!-- <v-list-item-subtitle>
          <v-layout warp justify-center class="white--text">
            <span>จำนวน</span>
            <v-spacer class="text-center"> {{ numberUsertable }}</v-spacer>
            <b>คน</b>
          </v-layout>
        </v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    Table_id: { type: Number, default: 0 },
    numberUsertable: { type: Number, default: 0 },
    Price: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    Total_Price: { type: Number, default: 0 },
    Tableid: { type: String, default: '' },
    status: { type: Boolean, default: false },
    getData: Function,
  },
}
</script>

<style>
</style>