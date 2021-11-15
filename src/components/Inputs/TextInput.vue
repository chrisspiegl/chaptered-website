<template lang='pug'>
.TextInput(:class="{ 'has-error': !!errorMessage, success: meta.valid }")
  //- label(:for='name') {{ label }}

  label.block.uppercase.text-blueGray-600.text-xs.font-bold.mb-2(v-if='label' :for='name') {{ label }}
  //- input(:name='name', :id='name', :type='type', :value='inputValue', @input='handleChange', @blur='handleBlur')
  .inputWithIcon.relative.flex.w-full.flex-wrap.items-stretch.mb-3
    span.z-10.h-full.leading-normal.font-normal.absolute.text-center.text-blueGray-300.absolute.bg-transparent.rounded.text-lg.items-center.justify-center.w-8.pl-3.py-4
      i.fas.fa-lock
    input(:name='name', :id='name', :type='type', :value='inputValue', :placeholder='placeholder' @input='handleChange' @blur='handleBlur')

  div.block.text-center.help-message(v-show='errorMessage || meta.valid')
    | {{ errorMessage || successMessage }}
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: "",
    },
    successMessage: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>

<style scoped>
.TextInput.has-error input {
  @apply bg-red-400
}

.TextInput.has-error input:focus {
  @apply bg-red-400
}

.TextInput.has-error .help-message {
  @apply text-red-500
}

.TextInput.success input {
  /*@apply bg-emerald-400*/
}

.TextInput.success input:focus {
  /*@apply bg-emerald-400*/
}

.TextInput.success .help-message {
  @apply text-green-500
}
</style>
