<template>
    <div>{{ formalName }}</div>
    <div>
        <input v-model="name" />
        <div>
            <span>{{ error }}</span>
        </div>
    </div>
    <div>
        post:
        <div>{{ fullName }}</div>
    </div>
    <div>entries : {{ totalEntries }}</div>
    <div>featuredEntries: {{ featuredEntries }}</div>
</template>


<script setup>
import { ref, computed } from "vue";
const name = ref(""); // name  это то, что мы вобьем в инпут

const error = computed(() => {
    return name.value ? "" : "Name is required";
});

const formalName = computed(() => {
    const title = 'Mr.';
    const surname = "Smith";
    return `${title} ${name.value} ${surname}`;
});
const post = {
    fields: {
        author: {
            firstName: "John",
            lastName: "Doe",
        },
        entries: [{
            title: "Entry 1",
            content: "Entry 1's content",
            featured: true
        },
        {
            title: "Entry 2",
            content: "Entry 2's content",
            featured: false
        }]
    }
}

const fullName = computed(() => {
    return `${post.fields.author.firstName} ${post.fields.author.lastName}`;
});
const totalEntries = computed(() => {
    return `${post.fields.entries.length}`;
});
const featuredEntries = computed(() => {
    const featured = post.fields.entries.filter((entry) => entry.featured);
    return featured.map(entry => entry);
})
</script>





<style>
h1 {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

;
</style>