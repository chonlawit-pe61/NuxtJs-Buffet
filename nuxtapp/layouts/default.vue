<template>
  <v-app>
    <v-navigation-drawer app permanent floating width="120">
      <v-layout column justify-center justify-space-between fill-height>
        <div>
          <v-list-item class="text-center">
            <v-list-item-title> Buffet </v-list-item-title>
          </v-list-item>
        </div>
        <v-list nav>
          <template v-for="(item, index) in items">
            <v-list-item
              :to="`/${item.link}`"
              :key="index"
              :title="item.title"
              justify-center
            >
              <v-list-item-content>
                <v-avatar size="36" width="64" class="text-center">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-avatar>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <div>
          <v-list-item>
            <v-list-item-content class="text-center">
              <div>
                <v-avatar size="40" color="blue">
                  <img src="@/static/v.png" alt="alt" />
                </v-avatar>
                <p class="pa-2">Chonlawit</p>
              </div>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar flat app fixed color="white">
      <v-toolbar-title v-text="'Dashboard'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-text-field
          placeholder="Search"
          filled
          small
          solo-inverted
          hide-details
          flat
          dense
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { link: '', icon: 'mdi-apps', title: 'DashBord' },
        { link: 'table', icon: 'mdi-table-chair', title: 'DashBord' },
      ],
    }
  },
}
</script>
