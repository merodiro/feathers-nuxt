<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      User
    </h1>
    <h2 class="info">
      {{ user.email }}
    </h2>
    <nuxt-link class="button" to="/">
      Users
    </nuxt-link>
  </section>
</template>

<script>
import api from "~/plugins/feathers";

export default {
  name: 'id',

  asyncData ({ params }) {
    return api.service("users").get(params.id).then(user => {
      return {user}
    });
  },
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  }
}
</script>