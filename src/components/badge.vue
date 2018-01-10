<template>
    <div>
        <template v-if="type == 'badge'">
            <span class="babge" :class="getClass(variant)">
                <slot></slot>
            </span>
        </template>
        <template v-else-if="type == 'contextual'">
            <span class="badge" :class="getClass(variant)"><slot></slot></span>
        </template>
        <template v-else-if="type == 'pill'">
            <span class="badge badge-pill" :class="getClass(variant)"><slot></slot></span>
        </template>
        <template v-else-if="type == 'link'">
            <a :href="href" class="badge" :class="getClass(variant)"><slot></slot></a>
        </template>
    </div>
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