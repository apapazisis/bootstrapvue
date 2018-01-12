<template>
    <div class="btn-toolbar" role="toolbar" :aria-label="label">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'button-toolbar',
        props: {
            label: {
                type: String,
                default: 'toolbar'
            }
        }
    }
</script>