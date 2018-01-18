<template>
    <div class="btn-toolbar" role="toolbar" :aria-label="label">
        <slot></slot>
    </div>
</template>

<script>

    export const props = Object.assign({}, {
        label: {
            type: String,
            default: 'toolbar'
        }
    });

    export default {
        name: 'button-toolbar',
        props
    }
</script>