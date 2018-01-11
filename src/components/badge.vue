<template>
    <span v-if="type == 'badge'" class="babge" :class="getClass(variant)">
        <slot></slot>
    </span>
    <span v-else-if="type == 'contextual'" class="badge" :class="getClass(variant)"><slot></slot></span>
    <span v-else-if="type == 'pill'" class="badge badge-pill" :class="getClass(variant)"><slot></slot></span>
    <a v-else-if="type == 'link'" :href="href" class="badge" :class="getClass(variant)"><slot></slot></a>
</template>

<script>
    export default {
        name: 'badge',
        props: {
            variant: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            },
            href: {
                type: String,
                default: '#'
            }
        },
        methods: {
            getClass(variant) {
                return {
                    'badge-primary': variant == 'primary',
                    'badge-secondary': variant == 'secondary',
                    'badge-success': variant == 'success',
                    'badge-danger': variant == 'danger',
                    'badge-warning': variant == 'warning',
                    'badge-info': variant == 'info',
                    'badge-light': variant == 'light',
                    'badge-dark': variant == 'dark'
                }
            }
        }
    }
</script>