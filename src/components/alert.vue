<template>
    <div class="alert" :class="getTypeClass(type, dismiss)" role="alert">
        <button v-if="dismiss" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="alert-heading">
            <slot name="head"></slot>
        </h4>
        <slot></slot>
    </div>
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
            }
        },
        methods: {
            getTypeClass(type, dismiss) {
                return {
                    'alert-primary': type == 'primary',
                    'alert-secondary': type == 'secondary',
                    'alert-success': type == 'success',
                    'alert-danger': type == 'danger',
                    'alert-warning': type == 'warning',
                    'alert-info': type == 'info',
                    'alert-light': type == 'light',
                    'alert-dark': type == 'dark',
                    'alert-dismissible fade show': dismiss == true
                }
            }
        }
    }
</script>

