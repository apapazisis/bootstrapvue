<template>
    <div :class="getClass(overlay)">
        <slot></slot>
    </div>
</template>

<script>

    export const props = {
        noBody: {
            type: Boolean,
            default: false
        },
        overlay: {
            type: Boolean,
            default: false
        }
    }

    export default {
        name: 'card-body',
        props,
        methods: {
            getClass(overlay) {
                return {
                    'card-body': overlay == false,
                    'card-img-overlay': overlay == true
                }
            }
        }
    }
</script>