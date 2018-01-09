<template>
    <div>
        <template v-if="variant == 'badge'">
            <span class="babge" :class="getTypeClass(type)">
                <slot></slot>
            </span>
        </template>
        <template v-else-if="variant == 'contextual'">
            <span class="badge" :class="getTypeClass(type)"><slot></slot></span>
        </template>
        <template v-else-if="variant == 'pill'">
            <span class="badge badge-pill" :class="getTypeClass(type)"><slot></slot></span>
        </template>
        <template v-else-if="variant == 'link'">
            <a :href="href" class="badge" :class="getTypeClass(type)"><slot></slot></a>
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
            getTypeClass(type) {
                return {
                    'badge-primary': type == 'primary',
                    'badge-secondary': type == 'secondary',
                    'badge-success': type == 'success',
                    'badge-danger': type == 'danger',
                    'badge-warning': type == 'warning',
                    'badge-info': type == 'info',
                    'badge-light': type == 'light',
                    'badge-dark': type == 'dark'
                }
            },
            getBtnClass(type) {
                return {
                    'btn-primary': type == 'primary',
                    'btn-secondary': type == 'secondary',
                    'btn-success': type == 'success',
                    'btn-danger': type == 'danger',
                    'btn-warning': type == 'warning',
                    'btn-info': type == 'info',
                    'btn-light': type == 'light',
                    'btn-dark': type == 'dark',
                    'btn-link': type == 'link'
                }
            }
        }
    }
</script>