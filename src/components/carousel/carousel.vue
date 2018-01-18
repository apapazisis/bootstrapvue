<template>
    <div :id="id" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export const props = {
        id: {
            type: String,
            default: ''
        },
        interval: {
            type: Number,
            default: 3000
        },
        controls: {
            type: Boolean,
            default: false
        },
        indicators: {
            type: Boolean,
            default: false
        },
        background: {
            type: String,
            default: '#fff'
        }
    }

    export default {
        name: 'carousel',
        props
    }
</script>