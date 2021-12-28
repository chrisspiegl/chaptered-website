<template lang="pug">
footer.block.py-4(:class="[absolute ? 'absolute w-full bottom-0' : 'relative']")
  .mx-auto
    //- hr.mb-4.border-b-1.border-blueGray-200
    .flex.flex-wrap.items-center.justify-center(class='md:justify-between')
      .w-full.px-4(class='md:w-4/12')
        .text-sm.text-blueGray-300.font-semibold.py-1.text-center(class='md:text-left')
          | Copyright &copy; {{ date }} Foxi.Link
      .w-full.px-4(class='md:w-8/12')
        ul.flex.flex-wrap.list-none.justify-center(class='md:justify-end')
          li
            a.text-blueGray-300.text-sm.font-semibold.block.py-1.px-3(href='/' class='hover:text-blueGray-800')
              | Home
          li
            a.text-blueGray-300.text-sm.font-semibold.block.py-1.px-3(href='/about' class='hover:text-blueGray-800')
              | About Us
          li
            a.text-blueGray-300.text-sm.font-semibold.block.py-1.px-3(href='/support' class='hover:text-blueGray-800')
              | Support

</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
