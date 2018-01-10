<template>
    <div>
        <template v-if="type == 'button'">
            <button type="button" class="btn" v-bind="[disabled, bindActive(active)]" :class="[getClass(variant), getSize(size), getBlock(block), getActive(active)]"><slot></slot></button>
        </template>
        <template v-else-if="type == 'link'">
            <a class="btn" :class="[getClass(variant), getDisabled(disabled), getActive(active)]" v-bind="[bindDisabled(disabled), bindActive(active)]" :href="href" role="button"><slot></slot></a>
        </template>
        <template v-else-if="type == 'reset'">
            <input class="btn" :class="[getClass(variant), getDisabled(disabled), getActive(active)]" type="reset" v-bind="[value, bindActive(active)]">
        </template>
        <template v-else-if="type == 'submit'">
            <input class="btn" :class="[getClass(variant), getDisabled(disabled), getActive(active)]" type="submit" v-bind="[value, bindActive(active)]">
        </template>
        <template v-else-if="type == 'ibutton'">
            <input class="btn" :class="[getClass(variant), getDisabled(disabled), getActive(active)]" type="button" v-bind="[value, bindActive(active)]">
        </template>
    </div>
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
            getClass(variant) {
                return {
                    'btn-primary': variant == 'primary',
                    'btn-secondary': variant == 'secondary',
                    'btn-success': variant == 'success',
                    'btn-danger': variant == 'danger',
                    'btn-warning': variant == 'warning',
                    'btn-info': variant == 'info',
                    'btn-light': variant == 'light',
                    'btn-dark': variant == 'dark',
                    'btn-link': variant == 'link',
                    'btn-outline-primary': variant == 'outline-primary',
                    'btn-outline-secondary': variant == 'outline-secondary',
                    'btn-outline-success': variant == 'outline-success',
                    'btn-outline-danger': variant == 'outline-danger',
                    'btn-outline-warning': variant == 'outline-warning',
                    'btn-outline-info': variant == 'outline-info',
                    'btn-outline-light': variant == 'outline-light',
                    'btn-outline-dark': variant == 'outline-dark'
                }
            },
            getSize(size) {
                return {
                    'btn-lg': size == 'lg',
                    'btn-sm': size == 'sm'
                }
            },
            getBlock(block) {
                return {
                    'btn-clock': block
                }
            },
            getDisabled(disabled) {
                return {
                    'disabled': disabled
                }
            },
            bindDisabled(disabled) {
                if (disabled) {
                    return {
                        'aria-disabled': 'true'
                    }
                }
            },
            getActive(active) {
                return {
                    'active': active
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