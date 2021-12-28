<script>
import Error404Cat from '@/components/Error404Cat/Error404Cat.vue'

export default {
  data() {
    return {}
  },
  components: {
    Error404Cat,
  },
}
</script>

<template lang="pug">
.h-screen.w-screen.bg-gray-100.flex.items-center
  .container.flex.flex-col.items-center.justify-center.px-5.text-gray-700(class='md:flex-row')
    .max-w-md
      .text-5xl.font-dark.font-bold 404
      p.text-2xl.font-light.leading-normal(class='md:text-3xl') Sorry we couldn&apos;t find this page.
      p.mb-8 But dont worry, you can find plenty of other things on our homepage.
      router-link.px-4.inline.py-2.text-sm.font-medium.leading-5.shadow.text-white.transition-colors.duration-150.border.border-transparent.rounded-lg.bg-blue-600(to='/', class='focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700') back to homepage
    .max-w-lg
      Error404Cat
</template>
