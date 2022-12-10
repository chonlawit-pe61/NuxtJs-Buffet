<template>
  <v-container grid-list-xs fluid>
    <v-row>
      <v-col>
        <v-layout wrap>
          <h3 class="title grey--text">My Buffet</h3>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-layout>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Cardbox
          title="โต๊ะที่ว่าง"
          :numbertable="CheckTableActive"
          colorIcon="green"
          colorTitle="green--text"
          tableOrMoney="โต๊ะ"
          flat
        >
        </Cardbox>
      </v-col>
      <v-col>
        <Cardbox
          title="โต๊ะที่ใช้งานอยู่"
          :numbertable="CheckTableNoActive"
          colorIcon="red"
          colorTitle="red--text"
          tableOrMoney="โต๊ะ"
          flat
        >
        </Cardbox>
      </v-col>
      <v-col>
        <Cardbox
          title="รายรับทั้งหมด"
          :numbertable="SumtotalPrice"
          colorIcon="deep-purple"
          colorTitle="deep-purple--text"
          tableOrMoney="เงิน"
          flat
        >
        </Cardbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-layout row wrap>
          <h3>Week Chart</h3>
        </v-layout>
      </v-col>
      <v-col>
        <h3>Month Chart</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cardbox from '~/components/CardBox.vue'
export default {
  async mounted() {
    await this.fetchData()
  },
  data() {
    return {
      Data: [],
      CheckTableActive: 0,
      CheckTableNoActive: 0,
      SumtotalPrice: 0,
    }
  },
  name: 'IndexPage',
  components: {
    Cardbox,
  },
  methods: {
    async fetchData() {
      await this.$axios.get('/buffet').then((response) => {
        this.data = response.data
      })
      console.log(this.data)
      this.CheckData(this.data)
    },
    CheckData(data) {
      let sumTableActive = 0
      let sumTableNoActive = 0
      let sumtotal = 0
      for (let index = 0; index < data.length; index++) {
        if (data[index].isActive == false) {
          sumTableActive++
        } else {
          sumTableNoActive++
        }
        sumtotal += data[index].totalPrice
      }
      this.CheckTableActive = sumTableActive
      this.CheckTableNoActive = sumTableNoActive
      this.SumtotalPrice = sumtotal
      console.log(this.CheckTableActive)
      console.log(this.CheckTableNoActive)
      console.log(this.SumtotalPrice)
    },
  },
}
</script>
<style>
</style>
