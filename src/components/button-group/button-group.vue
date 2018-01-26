<template>
    <div class="btn-group" :class="getClasses" role="group" :aria-label="label">
        <slot></slot>
    </div>
</template>

<script>

    export const props = Object.assign({}, {
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
    });

    export default {
        name: 'button-group',
        props,
        computed: {
            getClasses() {
                return {
                    [`btn-group-${this.size}`]: Boolean(this.size),
                    [`btn-group-vertical`]: Boolean(this.vertical),
                    [`mr-${this.space}`]: Boolean(this.space),

                }
            }
        }
    }
</script>