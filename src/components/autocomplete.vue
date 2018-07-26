<template>
    <div>
        <input class="form-control" type="text" v-model="input"  @keydown.tab.prevent="complete(0)">
    </div>
</template>

<script>
export default {
  name: 'autocomplete',
  data () {
    return {
      input: ''
    }
  },
  props: {
    value: { type: String, required: false },
    data: { type: Array, required: true },
    field: { type: String, required: true }
  },
  created () {
    this.input = this.value || ''
  },
  updated () {
    this.$emit('input', this.input)
  }
}
</script>
