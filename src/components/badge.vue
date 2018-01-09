<template>
    <div>
        <template v-if="badge == 'heading1'">
            <h1>
                <slot name="text"></slot>
                <span class="babge" :class="getTypeClass(type)">
                    <slot name="badge_text"></slot>
                </span>
            </h1>
        </template>
        <template v-if="badge == 'button'">
            <button type="button" class="btn btn-primary">
                <slot></slot> <span class="badge" :class="getTypeClass(type)">4</span>
            </button>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'badge',
        props: {
            badge: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
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
            }
        }

    }
</script>