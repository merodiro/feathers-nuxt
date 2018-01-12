<template>
  <section class="container mt-5">
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="user.email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="user.password" placeholder="Enter Password">
      </div>
      <button class="btn btn-lg btn-primary" @click.prevent="register">Register</button>
      <button class="btn btn-lg btn-info ml-5" @click.prevent="login">Log in</button>
    </form>
  </section>
</template>

<script>
import api from "~/plugins/feathers";

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      api.service('users').create(this.user).then(user => {
        console.log(user);
      })
    },
    login () {
      api.authenticate({
        strategy: 'local',
        ...this.user
      }).then(res => console.log(res))
    }
  },
  head() {
    return {
      title: "Users"
    };
  }
};
</script>
