<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template lang='pug'>
footer.pb-6(:class="[absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative']")
  .container.mx-auto.px-4
    //- hr.mb-6.border-b-1.border-blueGray-600
    .flex.flex-wrap.items-center.justify-center(class='md:justify-between')
      //- .w-full.px-4(class='md:w-8/12')
        ul.flex.flex-wrap.list-none.justify-center(class='md:justify-end')
          li
            a.text-white.text-sm.font-semibold.block.py-1.px-3(href='https://www.creative-tim.com?ref=vn-footer-small' class='hover:text-blueGray-300')
              | Creative Tim
          li
            a.text-white.text-sm.font-semibold.block.py-1.px-3(href='https://www.creative-tim.com/presentation?ref=vn-footer-small' class='hover:text-blueGray-300')
              | About Us
          li
            a.text-white.text-sm.font-semibold.block.py-1.px-3(href='http://blog.creative-tim.com?ref=vn-footer-small' class='hover:text-blueGray-300')
              | Blog
          li
            a.text-white.text-sm.font-semibold.block.py-1.px-3(href='https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer-small' class='hover:text-blueGray-300')
              | MIT License
      .w-full.px-4(class='md:w-4/12')
        .text-sm.text-blueGray-500.font-semibold.py-1.text-center(class='md:text-left')
          | Copyright &copy; {{ date }} Foxi.Link
</template>

