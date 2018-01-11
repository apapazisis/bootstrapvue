<template>
    <div class="btn-group" :class="[getSize(size), getVertical(vertical)]" role="group" :aria-label="label">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'button-group',
        props: {
            label: {
                type: String,
                default: 'basic'
            },
            size: {
                type: String,
                default: 'sm'
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            getSize(size) {
                return {
                    'btn-group-sm': size == 'sm',
                    'btn-group-lg': size == 'lg'
                }
            },
            getVertical(vertical) {
                return {
                    'btn-group-vertical': vertical
                }
            }
        }
    }
</script>