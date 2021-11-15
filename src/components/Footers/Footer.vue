<template lang='pug'>
footer.relative.bg-blueGray-200.pt-8.pb-6
  .bottom-auto.top-0.left-0.right-0.w-full.absolute.pointer-events-none.overflow-hidden.-mt-20.h-20(style='transform: translateZ(0);')
    svg.absolute.bottom-0.overflow-hidden(xmlns='http://www.w3.org/2000/svg' preserveaspectratio='none' version='1.1' viewbox='0 0 2560 100' x='0' y='0')
      polygon.text-blueGray-200.fill-current(points='2560 0 2560 100 0 100')
  .container.mx-auto.px-4
    //- .flex.flex-wrap.text-center(class='lg:text-left')
      .w-full.px-4(class='lg:w-6/12')
        h4.text-3xl.font-semibold Let&apos;s keep in touch!
        h5.text-lg.mt-0.mb-2.text-blueGray-600
          | Find us on any of these platforms, we respond 1-2 business days.
        .mt-6.mb-6(class='lg:mb-0')
          button.bg-white.text-sky-400.shadow-lg.font-normal.h-10.w-10.items-center.justify-center.align-center.rounded-full.outline-none.mr-2(class='focus:outline-none' type='button')
            i.fab.fa-twitter
          button.bg-white.text-sky-600.shadow-lg.font-normal.h-10.w-10.items-center.justify-center.align-center.rounded-full.outline-none.mr-2(class='focus:outline-none' type='button')
            i.fab.fa-facebook-square
          button.bg-white.text-pink-400.shadow-lg.font-normal.h-10.w-10.items-center.justify-center.align-center.rounded-full.outline-none.mr-2(class='focus:outline-none' type='button')
            i.fab.fa-dribbble
          button.bg-white.text-blueGray-800.shadow-lg.font-normal.h-10.w-10.items-center.justify-center.align-center.rounded-full.outline-none.mr-2(class='focus:outline-none' type='button')
            i.fab.fa-github
      .w-full.px-4(class='lg:w-6/12')
        .flex.flex-wrap.items-top.mb-6
          .w-full.px-4.ml-auto(class='lg:w-4/12')
            span.block.uppercase.text-blueGray-500.text-sm.font-semibold.mb-2
              | Useful Links
            ul.list-unstyled
              li
                a.text-blueGray-600.font-semibold.block.pb-2.text-sm(class='hover:text-blueGray-800' href='https://www.creative-tim.com/presentation?ref=vn-footer')
                  | About Us
              li
                a.text-blueGray-600.font-semibold.block.pb-2.text-sm(class='hover:text-blueGray-800' href='https://blog.creative-tim.com?ref=vn-footer')
                  | Blog
              li
                a.text-blueGray-600.font-semibold.block.pb-2.text-sm(class='hover:text-blueGray-800' href='https://www.github.com/creativetimofficial?ref=vn-footer')
                  | Github
              li
                a.text-blueGray-600.font-semibold.block.pb-2.text-sm(class='hover:text-blueGray-800' href='https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer')
                  | Free Products
          .w-full.px-4(class='lg:w-4/12')
            span.block.uppercase.text-blueGray-500.text-sm.font-semibold.mb-2
              | Other Resources
            ul.list-unstyled
              li
                a.text-blueGray-600.font-semibold.block.pb-2.text-sm(class='hover:text-blueGray-800' href='https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer')
                  | MIT License
              li
                a.text-blueGray-600.font-semibold.block.pb-2.text-sm(class='hover:text-blueGray-800' href='https://creative-tim.com/terms?ref=vn-footer')
                  | Terms &amp; Conditions
              li
                a.text-blueGray-600.font-semibold.block.pb-2.text-sm(class='hover:text-blueGray-800' href='https://creative-tim.com/privacy?ref=vn-footer')
                  | Privacy Policy
              li
                a.text-blueGray-600.font-semibold.block.pb-2.text-sm(class='hover:text-blueGray-800' href='https://creative-tim.com/contact-us?ref=vn-footer')
                  | Contact Us
    //- hr.my-6.border-blueGray-300
    .flex.flex-wrap.items-center.justify-center(class='md:justify-between')
      .w-full.px-4.mx-auto.text-center(class='md:w-4/12')
        .text-sm.text-blueGray-500.font-semibold.py-1
          | Chaptered.app is not associated with any of the programs or companies mentioned on this page.
        .text-sm.text-blueGray-500.font-semibold.py-1
          | Made by #[a(href="https://ChrisSpiegl.com") Chris Spiegl] | #[a(href="https://chrisspiegl.com/legal-disclosure/") Legal Disclosure]


</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
