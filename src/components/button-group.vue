<template>
    <div class="btn-group" :class="[getSize(size), getVertical(vertical), getSpace(space)]" role="group" :aria-label="label">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'button-group',
        props: {
            label: {
                type: String,
                default: 'group'
            },
            size: {
                type: String,
                default: 'sm'
            },
            vertical: {
                type: Boolean,
                default: false
            },
            space: {
                type: Number,
                default: 0
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
            },
            getSpace(space) {
                return {
                    'mr-1': space == 1,
                    'mr-2': space == 2,
                    'mr-3': space == 3,
                    'mr-4': space == 4,
                    'mr-5': space == 5
                }
            }
        }
    }
</script>