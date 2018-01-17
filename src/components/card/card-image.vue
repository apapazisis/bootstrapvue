<template>
    <img :class="getClass()" :src="imgSrc" :alt="imgAlt">
</template>

<script>
    export const props = {
        imgSrc: {
            type: String,
            default: ''
        },
        imgAlt: {
            type: String,
            default: ''
        },
        imgBottom: {
            type: Boolean,
            default: false
        }
    }

    export default {
        name: 'card-image',
        props,
        methods: {
            getClass() {
                return  {
                    'card-img-top': this.imgBottom == false,
                    'card-img-bottom': this.imgBottom == true
                }
            }
        }
    }
</script>