<template>
  <v-dialog v-model="dialog" width="500" persistent>
    <v-card>
      <v-card-title>
        <v-card-text>
          <div class="text-center">
            <h1 class="pb-2">รายละเอียดสินค้า</h1>
            <v-row class="pt-5">
              <v-col class="text-left">
                <h2>Table</h2>
              </v-col>
              <v-col class="text-left">
                <h2>{{ idTable }}</h2>
              </v-col>
            </v-row>
            <v-row class="pt-2">
              <v-col class="text-left">
                <h2>Customer</h2>
              </v-col>
              <v-col class="pa-0" v-if="isActive === false">
                <v-text-field
                  width="50px"
                  class="pa-0"
                  v-model="numberUser"
                  label="จำนวนลูกค้า"
                  clearable
                  required
                  v-on:input="checkExist"
                ></v-text-field>
              </v-col>
              <v-col class="pa-0 text-left" v-else>
                <v-layout class="mt-3">
                  <h2 v-if="swapTag == false">{{ numberUserTable }}</h2>
                  <v-text-field
                    v-else
                    width="50px"
                    class="pa-0"
                    v-model="numberUser"
                    label="จำนวนลูกค้า"
                    clearable
                    required
                    v-on:input="checkExist"
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <v-icon @click="AddUserInTable()">
                    mdi-account-multiple-plus
                  </v-icon>
                </v-layout>
              </v-col>
            </v-row>
            <v-row class="pt-2">
              <v-col class="text-left">
                <h2>Price</h2>
              </v-col>
              <v-col class="pa-0" v-if="isActive === false">
                <v-text-field
                  width="50px"
                  class="pa-0"
                  v-model="Setprice"
                  label="ราคาบุฟเฟ่"
                  clearable
                  required
                  v-on:input="checkExist"
                ></v-text-field>
              </v-col>
              <v-col class="pa-0 text-left" v-else>
                <v-layout class="mt-3">
                  <h2>{{ price }}</h2>
                </v-layout>
              </v-col>
            </v-row>
            <v-row class="pt-2">
              <v-col class="text-left">
                <h2>Total price</h2>
              </v-col>
              <v-col class="text-left pa-0" v-if="isActive === false">
                <v-layout class="mt-3">
                  <h2>{{ sumtotal }}</h2>
                </v-layout>
              </v-col>
              <v-col class="text-left" v-else>
                <h2>
                  {{ numberUserTable * price }}
                </h2>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <v-card-text class="text-center">
          <v-btn
            @click="
              UpdateTable(
                idTable,
                isActive ? (setSatatus = false) : (setIsActive = true),
                numberUser,
                price ? price : Setprice,
                sumtotal,
                Tableid
              ),
                close(),
                clearInput()
            "
            color="primary"
          >
            ตกลง
          </v-btn>
          <v-btn @click="close" color="error"> ยกเลิก </v-btn>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean },
    idTable: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    Tableid: { type: String, default: '' },
    numberUserTable: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    UpdateTable: Function,
  },
  data() {
    return {
      numberUser: null,
      sumtotal: null,
      Setprice: null,
      setSatatus: false,
      swapTag: false,
    }
  },

  methods: {
    close() {
      this.$emit('update:dialog', false)
    },
    checkExist() {
      const result = Number(this.numberUser) * Number(this.Setprice)
      this.sumtotal = result
    },
    clearInput() {
      this.numberUser = null
      this.Setprice = null
      this.sumtotal = null
    },
    AddUserInTable() {
      this.isActive = false
    },
  },
}
</script>

<style>
</style>