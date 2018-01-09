<template>
    <transition name="fade" :duration="timeout">
        <div class="alert" :class="getTypeClass(type)" v-if="mutateShow" role="alert">
            <button v-if="dismiss" @click="mutateShow = false" type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="alert-heading">
                <slot name="head"></slot>
            </h4>
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
            type: {
                type: String,
                default: 'primary'
            },
            dismiss: {
                type: Boolean,
                default: false
            },
            timeout: {
                type: Number,
                default: 100
            }
        },
        data: () => ({
            mutateShow: false
        }),
        mounted() {
            this.mutateShow = this.show;
        },
        methods: {
            getTypeClass(type) {
                return {
                    'alert-primary': type == 'primary',
                    'alert-secondary': type == 'secondary',
                    'alert-success': type == 'success',
                    'alert-danger': type == 'danger',
                    'alert-warning': type == 'warning',
                    'alert-info': type == 'info',
                    'alert-light': type == 'light',
                    'alert-dark': type == 'dark'
                }
            }
        }
    }
</script>


