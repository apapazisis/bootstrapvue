<template>
    <transition name="fade" mode="out-in">
        <div class="carousel-item" :class="getActiveSlide" v-show="this.index == this.$parent.currentSlide">
            <img class="d-block w-100" :src="imgSrc" :alt="imgAlt">
            <div class="carousel-caption d-none d-md-block" v-if="caption != '' || text != ''">
                <h5 v-if="caption != ''">{{ caption }}</h5>
                <p v-if="text != ''">{{ text }}</p>
            </div>
        </div>
    </transition>
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
        data: () => ({
            index: null
        }),
        props,
        computed: {
            getActiveSlide() {
                return {
                    'active': this.index == this.$parent.currentSlide
                }
            }
        }
    }
</script>

<style>

    .fade-enter-active {
        animation: slideIn .5s;
    }

    .fade-leave-active {
        animation: slideOut .5s;
    }

    .fade-leave-to {
        position: absolute;
        top: 0;
    }

    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }

    @keyframes slideOut {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }

</style>