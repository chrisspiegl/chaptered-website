import { onUnmounted } from 'vue'

export const Escapable = {
  created() {
    const escapeHandler = (event) => {
      if (event.key === 'Escape') {
        this.$emit('onClose')
      }
    }

    document.addEventListener('keydown', escapeHandler)
    onUnmounted(() => {
      document.removeEventListener('keydown', escapeHandler)
    })
  },
}
