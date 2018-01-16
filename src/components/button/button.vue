<template>
    <button v-if="type == 'button'" type="button" class="btn" v-bind="[{disabled}, bindActive()]" :class="[getVariant(), getSize(), getBlock(), getActive()]"><slot></slot></button>
    <a v-else-if="type == 'link'" class="btn" :class="[getVariant(), getSize(), getBlock(), getDisabled(), getActive()]" v-bind="[bindDisabled(), bindActive()]" :href="href" role="button"><slot></slot></a>
    <input v-else-if="type == 'reset'" class="btn" :class="[getVariant(), getSize(), getBlock(), getDisabled(), getActive()]" type="reset" v-bind="[{value}, bindActive()]">
    <input v-else-if="type == 'submit'" class="btn" :class="[getVariant(), getSize(), getBlock(), getDisabled(), getActive()]" type="submit" v-bind="[{value}, bindActive()]">
    <input v-else-if="type == 'ibutton'" class="btn" :class="[getVariant(), getSize(), getBlock(), getDisabled(), getActive()]" type="button" v-bind="[{value}, bindActive()]">
</template>

<script>
    export const props = {
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
    }

    export default {
        name: 'btn',
        props,
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
            getActive() {
                return {
                    ['active']: this.active
                }
            },
            bindDisabled() {
                if (this.disabled) {
                    return {
                        'aria-disabled': 'true'
                    }
                }
            },
            bindActive() {
                if (this.active) {
                    return {
                        'aria-pressed': 'true'
                    }
                }
            }
        }
    }
</script>