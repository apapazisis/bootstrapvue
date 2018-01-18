<template>
    <div class="carousel-item" :class="{active}">
        <img class="d-block w-100" :src="imgSrc" :alt="imgAlt">
        <div class="carousel-caption d-none d-md-block" v-if="caption != '' || text != ''">
            <h5 v-if="caption != ''">{{ caption }}</h5>
            <p v-if="text != ''">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export const props = {
        active: {
            type: Boolean,
            default: false
        },
        imgSrc: {
            type: String,
            default: ''
        },
        imgAlt: {
            type: String,
            default: ''
        },
        caption: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
    }

    export default {
        name: 'carousel-slide',
        props
    }
</script>