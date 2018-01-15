<template>
    <button v-if="dismiss" type="button" class="close" data-dismiss="alert" :aria-label="ariaLabel">
        <span aria-hidden="true">&times;</span>
    </button>
</template>

<script>
    export const props = {
        ariaLabel: {
            type: String,
            default: 'Close'
        },
        // Can alert be dismissed ?
        dismiss: {
            type: Boolean,
            default: false
        },
    }

    export default {
        name: 'button-close',
        props
    }
</script>