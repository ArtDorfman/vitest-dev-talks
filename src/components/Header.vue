<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <!-- Break snapshot test -->
        <RouterLink id="link" to="/">Home</RouterLink>
        <!-- <RouterLink type="button" to="/about">About</RouterLink> -->
        <RouterLink data-testid="push-to-about" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
</script>
