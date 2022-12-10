<template>
  <v-card color="grey lighten-4" flat>
    <v-list-item>
      <v-list-item-content class="text-left">
        <v-layout row wrap>
          <v-icon size="48" :color="colorIcon"> mdi-table-furniture </v-icon>
          <v-spacer></v-spacer>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-layout>

        <v-list-item-title class="mt-2 mb-2" :class="colorTitle">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-layout warp>
            <span>จำนวน</span>
            <v-spacer></v-spacer>
            <b>{{ numbertable }} {{ tableOrMoney }}</b>
          </v-layout>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
  
  <script>
export default {
  props: {
    title: { type: String, default: 'title' },
    numbertable: { type: Number, default: 0 },
    colorIcon: { type: String, default: 'blue' },
    colorTitle: { type: String, default: 'blue--text' },
    tableOrMoney: { type: String, default: '' },
    isActive: { type: Boolean, default: false },
    
  },
}
</script>
  
  <style>
</style>