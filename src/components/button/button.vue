<template>
    <button v-if="type == 'button'" type="button" class="btn" v-bind="[{disabled}, bindActive(active)]" :class="[getVariant, getSize, getBlock, getActive]"><slot></slot></button>
    <a v-else-if="type == 'link'" class="btn" :class="[getVariant, getSize, getBlock, getDisabled, getActive]" v-bind="[bindDisabled(disabled), bindActive(active)]" :href="href" role="button"><slot></slot></a>
    <input v-else-if="type == 'reset'" class="btn" :class="[getVariant, getSize, getBlock, getDisabled, getActive]" type="reset" v-bind="[{value}, bindActive(active)]">
    <input v-else-if="type == 'submit'" class="btn" :class="[getVariant, getSize, getBlock, getDisabled, getActive]" type="submit" v-bind="[{value}, bindActive(active)]">
    <input v-else-if="type == 'ibutton'" class="btn" :class="[getVariant, getSize, getBlock, getDisabled, getActive]" type="button" v-bind="[{value}, bindActive(active)]">
</template>

<script>
    export default {
        name: 'btn',
        props: {
            variant: {
                type: String,
                default: 'primary'
            },
            type: {
                type: String,
                default: 'button'
            },
            href: {
                type: String,
                default: '#'
            },
            size: {
                type: String,
                default: 'sm'
            },
            block: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: String,
                default: ''
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            getVariant() {
                return {
                    [`btn-${this.variant}`]: Boolean(this.variant)
                }
            },
            getSize() {
                return {
                    [`btn-${this.size}`]: Boolean(this.size)
                }
            },
            getBlock() {
                return {
                    ['btn-block']: this.block
                }
            },
            getDisabled() {
                return {
                    ['disabled']: this.disabled
                }
            },
            bindDisabled(disabled) {
                if (disabled) {
                    return {
                        'aria-disabled': 'true'
                    }
                }
            },
            getActive() {
                return {
                    ['active']: this.active
                }
            },
            bindActive(active) {
                if (active) {
                    return {
                        'aria-pressed': 'true'
                    }
                }
            }
        }
    }
</script>