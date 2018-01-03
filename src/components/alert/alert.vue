<template>
    <div class="alert" :class="{'alert-success': type == 'success'}" role="alert">
        <button v-if="dismissable" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
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
            dismissable: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

