<template>
    <transition name="fade">
        <div class="alert" :class="[getVariant()]" v-if="mutateShow" role="alert">
            <bv-close-button :dismiss="dismiss" @closeAlert="closeAlert($event)"></bv-close-button>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    import bvCloseButton, {props as CloseButtonProps} from '../button/button-close.vue';

    export const props = Object.assign({}, CloseButtonProps, {
        show: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: 'primary'
        },
        timeout: {
            type: Number,
            default: 0
        }
    });

    export default {
        name: 'alert',
        props,
        components: {
            bvCloseButton
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
                    }, this.timeout * 1000);
                }
            }
        },
        methods: {
            getVariant() {
                return {
                    [`alert-${this.variant}`]: Boolean(this.variant),
                }
            },
            closeAlert(eventValue) {
                this.mutateShow = eventValue;
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
