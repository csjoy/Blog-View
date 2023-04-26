<script setup lang="ts">
import { ref, defineEmits } from 'vue';
const title = ref("")
const author = ref("")
const content = ref("")
const id = ref("")

const emits = defineEmits(["addNewItem"])
const save = () => {
  emits("addNewItem", ({
    title: title.value,
    author: author.value,
    content: content.value,
    id: id.value
  }))
  title.value = ""
  author.value = ""
  content.value = ""
  id.value = ""
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold">Blog Editor</h1>
    <div>
      <label>Blog id <input class="p-2 bg-gray-50 rounded border border-gray-500" type="text" v-model="id" /></label>
    </div>
    <div>
      <label>Title <input class="p-2 bg-gray-50 rounded border border-gray-500" type="text" v-model="title" /></label>
    </div>
    <div>
      <label>Author <input class="p-2 bg-gray-50 rounded border border-gray-500" type="text" v-model="author" /></label>
    </div>
    <div>
      <label>Content <textarea class="p-2 bg-gray-50 rounded border border-gray-500" type="text" v-model="content" /></label>
    </div>
    <button class="bg-gray-400 text-white rounded px-5 py-2.5" @click="save">Save</button>
  </div>
</template>