<template>
    <form :class="getClasses">

    </form>
</template>

<script>
    export const props = {
        inline: {
            type: Boolean,
            default: false
        }
    }

    export default {
        name: 'form',
        props,
        computed: {
            getClasses() {
                return {
                    [`form-inline`]: this.inline
                }
            }
        }
    }
</script>