<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';
import { useSearch } from '../composables/useSearch';

const props = defineProps({
  blogs: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
  error: {
    type: String,
    required: true,
  }
})

const emits = defineEmits(["deleteBlog"])
const blogs = ref(props.blogs)

watch(
  () => props.blogs,
  (newBlogs) => {
    blogs.value = newBlogs
  }
)

const { searchTerm, filteredItems, filters } = useSearch(blogs)
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-semibold text-center">Blogs</h1>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <section v-else>
      <div class="text-center my-4">
        <label class="text-2xl">Search: <input class="border border-gray-500 bg-gray-50 rounded p-2" type="text" v-model="searchTerm" /></label>
      </div>
      <fieldset class="flex gap-4 border border-gray-500 my-4 p-4">
        <div>Filter by: </div>
        <label>
          <input type="checkbox" value="title" v-model="filters">
          By Title
        </label>
        <label>
          <input type="checkbox" value="description" v-model="filters">
          By Content
        </label>
      </fieldset>
      <ul>
        <li>
          <article v-for="(blog, index) in filteredItems" :key="index" class="border border-gray-500 mb-4">
            <div class="flex gap-4">
              <img :src="`${blog.heroImage.fields.file.url}?fit=scale&w=350&h=196`" alt="image" v-if="blog.heroImage">
              <div>
                <div class="uppercase text-gray-600 my-2">
                  {{ new Date(blog.publishDate).toDateString() }}
                </div>
                <h4 class="mb-4 mt-2 font-bold">{{ blog.title }}</h4>
                <p>{{ blog.description }}</p>
              </div>
            </div>
            <div class="w-full flex justify-center">
              <button class="my-4 bg-gray-400 text-white rounded px-5 py-2.5" @click="emits('deleteBlog', blog.id)">Delete</button>
            </div>
          </article>
        </li>
      </ul>
    </section>
  </div>
</template>