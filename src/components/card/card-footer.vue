<template>
    <div class="card-footer" :class="footerClass">
        {{ footerText }}
        <slot></slot>
    </div>
</template>

<script>
    export const props = {
        footerText: {
            type: String,
            default: ''
        },
        footerClass: {
            type: [String, Object, Array],
            default: null
        }
    }

    export default {
        name: 'card-footer',
        props
    }
</script>