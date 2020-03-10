<template>
  <div>
    <Navbar />
    <b-container>
      <Nuxt />
    </b-container>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';

export default {
    components: {
        Navbar
    }
};
</script>
