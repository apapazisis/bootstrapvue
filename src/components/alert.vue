<template>
    <transition name="fade">
        <div class="alert" :class="getClass(variant)" v-if="mutateShow" role="alert">
            <button v-if="dismiss" @click="mutateShow = false" type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'alert',
        props: {
            show: {
                type: Boolean,
                default: false
            },
            variant: {
                type: String,
                default: 'primary'
            },
            dismiss: {
                type: Boolean,
                default: false
            },
            timeout: {
                type: Number,
                default: 0
            }
        },
        data: () => ({
            mutateShow: false
        }),
        mounted() {
            this.mutateShow = this.show;
        },
        watch: {
            mutateShow(val) {
                if (val && this.timeout) {
                    setTimeout(() => {
                        this.mutateShow = false
                    }, this.timeout);
                }
            }
        },
        methods: {
            getClass(variant) {
                return {
                    'alert-primary': variant == 'primary',
                    'alert-secondary': variant == 'secondary',
                    'alert-success': variant == 'success',
                    'alert-danger': variant == 'danger',
                    'alert-warning': variant == 'warning',
                    'alert-info': variant == 'info',
                    'alert-light': variant == 'light',
                    'alert-dark': variant == 'dark'
                }
            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.25s ease-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
