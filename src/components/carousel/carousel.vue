<template>
    <div :id="id" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item" :class="{ 'active': item.active }" v-for="(item, index) in items" :key="index">
                <img class="d-block w-100" :src="item.src" :alt="item.alt">
            </div>
        </div>
    </div>
</template>

<script>
    export const props = {
        id: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: null
        }
    }

    export default {
        name: 'carousel',
        props
    }
</script>