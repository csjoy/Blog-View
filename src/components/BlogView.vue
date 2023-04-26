<script setup lang="ts">
import { ref } from 'vue';
import { useBlogs } from '../composables/useBlogs';
import BlogEditor from './BlogEditor.vue';
import Blog from './Blog.vue';
const showEditor = ref(false)
const { blogs, isLoading, error, addItem, deleteItem } = useBlogs()
</script>

<template>
  <div>
    <button class="px-5 py-2.5 rounded bg-gray-400 text-white" v-if="!showEditor" @click="showEditor = !showEditor">Add new blog</button>
    <BlogEditor v-else @addNewItem="addItem" />
    <Blog :blogs="blogs" :isLoading="isLoading" :error="error" @deleteBlog="deleteItem" />
  </div>
</template>