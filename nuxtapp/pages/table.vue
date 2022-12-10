<template>
  <v-container grid-list-xs fluid>
    <v-row>
      <v-col>
        <v-layout wrap>
          <h3 class="title grey--text">My Table</h3>
        </v-layout>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col v-for="(item, index) in Datas" :key="index" sm="2">
            <Table
              :Table_id="index + 1"
              :Tableid="item.table_id"
              :numberUsertable="item.numberUsertable"
              :isActive="item.isActive"
              :Price="item.price"
              :Total_Price="item.totalPrice"
              :getData="GetDataTable"
              :status="status"
            >
            </Table>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-layout>
          <h1 class="title grey-darken-4--text">รายละเอียดสินค้า</h1>
        </v-layout>
        <v-row>
          <v-col>
            <v-layout wrap>
              <v-icon>mdi-menu</v-icon>
              <h2 class="pl-2">Table</h2>
              <v-spacer></v-spacer>
              <h2>{{ detelTable.idTable }}</h2>
            </v-layout>
          </v-col>
          <v-col>
            <v-layout wrap>
              <v-icon>mdi-timer</v-icon>
              <h2 class="pl-2">Customer</h2>
              <v-spacer></v-spacer>
              <h2>{{ detelTable.numberUserTable }}</h2>
            </v-layout>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-layout wrap>
              <v-icon>mdi-timer</v-icon>
              <h2 class="pl-2">Price</h2>
              <v-spacer></v-spacer>
              <h2>{{ detelTable.price }}</h2>
            </v-layout>
          </v-col>
          <v-col>
            <v-layout wrap>
              <v-icon>mdi-cash</v-icon>
              <h2 class="pl-2">Total price</h2>
              <v-spacer></v-spacer>
              <h2>{{ detelTable.totalPrice }}</h2>
            </v-layout>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="dialog = true" color="success">เเก้ไข</v-btn>
            <!-- <v-layout wrap @click="dialog = true">
              <v-icon>mdi-cash</v-icon>
              <h2>เเก้ไข</h2>
            </v-layout> -->
          </v-col>
          <v-col>
            <v-layout wrap>เพิ่มเติม</v-layout>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Dailog
      :dialog.sync="dialog"
      :idTable="detelTable.idTable"
      :isActive="detelTable.isActive"
      :Tableid="detelTable.Tableid"
      :UpdateTable="UpdateTable"
      :numberUserTable="detelTable.numberUserTable"
      :totalPrice="detelTable.totalPrice"
      :price="detelTable.price"
    ></Dailog>
  </v-container>
</template>
<script>
import Table from '~/components/Table.vue'
import Dailog from '~/components/Dailog.vue'
export default {
  components: {
    Table,
    Dailog,
  },
  async mounted() {
    await this.fetchData()
  },
  data() {
    return {
      Datas: [],
      dialog: false,
      status: false,
      detelTable: {
        idTable: null,
        numberUserTable: null,
        price: null,
        totalPrice: null,
        isActive: null,
        Tableid: null,
      },
    }
  },
  methods: {
    async fetchData() {
      await this.$axios.get('/buffet').then((response) => {
        this.Datas = response.data
      })
      console.log(this.Datas)
    },
    GetDataTable(id, number, price, Total_Price, isActive, Tableid) {
      console.log(id, number)
      this.detelTable.idTable = id
      this.detelTable.numberUserTable = number
      this.detelTable.price = price
      this.detelTable.totalPrice = Total_Price
      this.detelTable.isActive = isActive
      this.detelTable.Tableid = Tableid
    },
    async UpdateTable(idTable, isActive, numberUser, price, sumtotal, id) {
      if (isActive) {
        await this.$axios
          .put(`/buffet/updateTable/${id}`, {
            isActive: isActive,
            numberUsertable: Number(numberUser),
            price: Number(price),
            totalPrice: sumtotal,
          })
          .then((response) => {
            this.fetchData()
            console.log(response)
            const { isActive, numberUsertable, price, totalPrice } =
              response.data
            this.detelTable.idTable = idTable
            this.detelTable.numberUserTable = numberUsertable
            this.detelTable.price = price
            this.detelTable.totalPrice = totalPrice
          })
      } else {
        await this.$axios
          .put(`/buffet/updateTable/${id}`, {
            isActive: isActive,
            numberUsertable: 0,
            price: 0,
            totalPrice: 0,
          })
          .then((response) => {
            this.fetchData()
            console.log(response)
            const { isActive, numberUsertable, price, totalPrice } =
              response.data
            this.detelTable.idTable = idTable
            this.detelTable.numberUserTable = numberUsertable
            this.detelTable.price = price
            this.detelTable.totalPrice = totalPrice
          })
      }
    },
  },
}
</script>
<style lang=""></style>
