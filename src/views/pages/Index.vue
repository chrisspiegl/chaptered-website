<template lang="pug">
div
  main.profile-page.bg-blueGray-200
    section.relative.py-16
      .container.mx-auto.px-4
        .text-center.mt-12
          h3.text-4xl.font-semibold.leading-normal.mb-2.text-blueGray-700.mb-2
            | Chaptered.app
          .text-xl.leading-normal.mt-0.mb-2.text-blueGray-400.font-bold
            | Easily convert Markers to Show Notes for your Podcast or YouTube Video.

      .container.mx-auto.px-4.mt-10.py-10.border-t.border-blueGray-200.text-center.flex.flex-wrap.justify-center
        .flex.flex-row.flex-wrap.justify-between
          .w-full.px-2.py-4(class='lg:w-6/12')
            h6.text-xl.text-blueGray-700.font-semibold Sort Order

            .flex.flex-row.justify-between
              select(v-model="formatter.sortMarkers", id="sortMarkers", @change="inputUpdated")
                option(value="none", selected) Sorting Disabled
                option(value="timecode.in") Sort by IN Timecode
                option(value="type") Sort by Marker Type

              select(v-model="formatter.sortMarkersOrder", id="sortMarkersOrder", @change="inputUpdated")
                option(value="asc", selected) Ascending (A-Z)
                option(value="desc") Descending (Z-A)

          .w-full.px-2.py-4(class='lg:w-6/12')
            h6.text-xl.text-blueGray-700.font-semibold Time Template
            .flex.flex-row.justify-between
              select(v-model="formatter.timeTemplate", id="timeTemplate", @change="inputUpdated")
                option(value="FullStamp") 00:31:08 | Full Timestamp
                option(value="HoursOptionalAndLeadingZeroOnAll") 00:05:08 | Hours Optional &amp; Leading Zeros (on Hours)
                option(disabled) ============
                option(value="Minimal") 3:8 | Minimal
                option(value="WithHours") 0:5:8 | Leading Hours
                option(disabled) ============
                option(value="Zeros") 03:08 | Minimal with Leading Zeros
                option(value="WithHoursAndZeros") 00:05:08 | Leading Hours &amp; Leading Zeros
                option(value="HoursOptionalAndLeadingZero") 0:05:08 | Hours Optional &amp; Leading Zeros (not Hours)

              select(v-model="formatter.includeMilliseconds", id="includeMilliseconds", @change="inputUpdated")
                option(value="false", selected) without ms/frames
                option(value="true") with ms/frames

          .w-full.px-2.py-4(class='lg:w-6/12')
            h6.text-xl.text-blueGray-700.font-semibold Sections
            .flex.flex-row.justify-between
              select(v-model="formatter.sectionMarkers", id="sectionMarkers", @change="inputUpdated")
                option(value="false") Don't Section
                option(value="type", selected) Section by Marker Type

              select(v-model="formatter.sectionMarkersOrder", id="sectionMarkersOrder", @change="inputUpdated")
                option(value="asc", selected) Ascending (A-Z)
                option(value="desc") Descending (Z-A)

          .w-full.px-2.py-4(class='lg:w-6/12')
            h6.text-xl.text-blueGray-700.font-semibold Line Template
            input(type='text', v-model='formatter.lineTemplate', id='lineTemplate', placeholder='',@keyup="inputUpdated")

      .container.mx-auto.px-4.justify-center.w-full.flex.flex-wrap.flex-row.text-center
          .relative.w-full.h-full.flex.flex-col.px-2.py-4.h-500-px(class='lg:w-6/12')
            h6.text-xl.text-blueGray-700.font-semibold Input Markers
            textarea.font-mono.text-left.textarea.h-full.whitespace-pre(v-model="input", :noNL="false", :noHTML="true", placeholder='A short paragraph maybe?', @keyup="inputUpdated")

          .relative.w-full.h-full.flex.flex-col.px-2.py-4.h-500-px(class='lg:w-6/12')
            h6.text-xl.text-blueGray-700.font-semibold Output Markers
            textarea.font-mono.text-left.textarea.h-full.whitespace-pre(v-model="output", :noNL="false", :noHTML="true", placeholder='A short paragraph maybe?')

      .mx-auto.px-4.py-10.text-center
        h6.text-xl.text-blueGray-700.font-semibold Debug Information
        .text-blueGray-700.markerFileType() {{markerFileType}}
        pre: code.text-blueGray-700.debugInfo() {{debugInfo}}

      .container.mx-auto.px-4
        .prose.prose-red.text-black.max-w-full
          h6.text-4xl.font-semibold.text-center FAQ

          h6.text-xl.text-blueGray-700.font-semibold What is this for?

          p Chaptered.App is for converting markers into show notes so that you can easily use the Chapter, CD, or Color Markers in programs like Adobe Audition, Premiere Pro, or DaVinci Resolve to create your YouTube Chapters or Podcast Shownotes from those without having to type any timestamps yourself.

          h6.text-xl.text-blueGray-700.font-semibold How does this thing work?

          p Documentation and tutorials will follow and will be published on my #[a(href="https://youtube.com/ChrisSpiegl") YouTube Channel] and more specifically collected #[a(href="https://crsp.li/PlaylistChaptered") in a playlist].

          h6.text-xl.text-blueGray-700.font-semibold Where are the Markers being sent?

          p The markers you enter are converted directly in the browser, they are not sent to the server at this time. This may change in the future depending on the future development and features that may make this necessary.

          h6.text-xl.text-blueGray-700.font-semibold What does Chapterd.app cost?

          p At this time Chaptered.app is completely free to use. If this tool was helpful for you and helps you save some time, you can buy me a #[a(href="https://ChrisSpiegl.com/support") Tea &amp; Cookie] or become a member on my #[a(href="https://youtube.com/ChrisSpiegl/membership") YouTube Channel].

          h6.text-xl.text-blueGray-700.font-semibold I have improvement ideas…

          p If you'd like to send me some feedback or tell me about an issue you ran into, please feel free to do so. I am @ChrisSpiegl on #[a(href="https://twitter.com/ChrisSpiegl") Twitter], #[a(href="https://instagram.com/ChrisSpiegl") Instagram], and #[a(href="https://telegram.me/ChrisSpiegl") Telegram].

          h6.text-xl.text-blueGray-700.font-semibold Development Status

          p This website is under development. It is very possible that there are things not working and the interface, documentation, feature set, as well as everything else is subject to change.


  footer-component
</template>
<script>
import FooterComponent from '@/components/Footers/Footer.vue'

import { Chaptered } from 'chaptered'
import ClipboardJS from 'clipboard'
import Swal from 'sweetalert2'
import { debounce } from 'throttle-debounce'
import merge from 'deepmerge'

import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      input: 'Marker Name\tDescription\tIn\tOut\tDuration\tMarker Type\t\nIntro\t\t00:00:00:00\t00:00:00:00\t00:00:00:00\tComment\t\nb-roll zoom f6 showcase\t\t00:00:12:04\t00:00:12:04\t00:00:00:00\tChapter\t\nWhy this Video?\t\t00:00:31:03\t00:00:31:03\t00:00:00:00\tComment\t\nshowcase 6 xlr ports zoom  f6\t\t00:23:06:15\t00:23:06:15\t00:00:00:00\tChapter\nConclusion\t\t00:25:45:20\t00:25:45:20\t00:00:00:00\tComment\t\nOutro\t\t01:26:29:12\t01:26:29:12\t00:00:00:00\tComment\t\n',
      output: 'Output Text',
      markerFileType: 'empty',
      debugInfo: 'empty',
      chaptered: new Chaptered(),
    }
  },
  computed: {
    ...mapState({
      formatter: (state) => {
        return merge({}, state.formatterOptions.formatterOptions)
      },
    }),
    compiledMarkdown() {
      // return DOMPurify.sanitize(marked(this.input, {}))
    },
  },
  components: {
    FooterComponent,
  },
  methods: {
    inputUpdated(e) {
      const debounceFunc = debounce(300, false, (self, e) => {
        // self.input = e.target.value
        this.triggerChapteredRender()
        this.$store.commit('formatterOptions/SET_FORMATTER_OPTIONS', merge({}, this.formatter))
        console.log(`UPDATED WITH NEW TEXT`)
      })
      debounceFunc(this, e)
    },
    triggerChapteredRender() {
      try {
        this.input = this.input.trim()
        if (this.input === '') return

        const tt = this.formatter.timeTemplate
        const includeLeadingHours = ['FullStamp', 'WithHours', 'WithHoursAndZeros'].includes(tt) ? 'always' : ['HourAndZeros', 'HoursOptionalAndLeadingZeroOnAll'].includes(tt) ? 'hasHour' : 'never'
        const includeLeadingZeros = ['FullStamp', 'Zeros', 'WithHoursAndZeros', 'HoursOptionalAndLeadingZeroOnAll'].includes(tt) ? 'always' : ['HoursOptionalAndLeadingZero'].includes(tt) ? 'notHour' : 'never'

        // FullStamp = 00:31:08 | Full Timestamp
        // HourAndZeors = 00:31:08 | With Hours &amp; Leading Zeros
        // Zeros = 31:08 | Minimal with Zeros
        // Minimal = 31:8 | Minimal

        const options = {
          format: {
            output: {
              section: {
                sections: ['type'].includes(this.formatter.sectionMarkers), // true | false
                sectionBy: 'type',
                order: this.formatter.sectionMarkersOrder,
              },
            },
            record: {
              time: {
                includeLeadingHours,
                includeLeadingZeros,
                includeMilliseconds: this.formatter.includeMilliseconds === 'true', // true | false
              },
              line: {
                template: this.formatter.lineTemplate,
              },
            },
            sort: {
              sort: this.formatter.sortMarkers !== 'none',
              sortBy: this.formatter.sortMarkers,
              order: this.formatter.sortMarkersOrder,
            },
          },
        }

        console.log('options: ', options)

        const chapteredOutput = this.chaptered.setOptions(options).parse(this.input).sortRecords().output()

        this.output = chapteredOutput
      } catch (e) {
        this.debugInfo = e
        console.error(e)
      }
    },
  },
  created() {
    this.triggerChapteredRender()
  },
}
</script>
