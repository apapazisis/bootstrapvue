<template>
    <button @click="clicked"
        class="btn dropdown-toggle"
        :class="getClasses"
        :id="id"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        :aria-expanded="show">
        {{ text }}
    </button>
</template>

<script>
    export const props = {
        id: {
            type: String,
            default: 'dropdownMenuButton'
        },
        text: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: 'primary'
        }
    }

    export default {
        name: 'dropdown-button',
        data: () => ({
            show: false
        }),
        props,
        computed: {
            getClasses() {
                 return {
                    [`btn-${this.variant}`]: Boolean(this.variant)
                }
            }
        },
        methods: {
            clicked() {
                this.show = !this.show;
                this.$emit('click');
            }
        }
    }
</script>