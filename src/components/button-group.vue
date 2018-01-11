<template>
    <div v-if="role == 'group'" class="btn-group" role="group" :aria-label="label">
        <button v-for="(item, index) in items" :key="index" type="button" class="btn" :class="getClass(item.variant)">{{ item.text }}</button>
    </div>
    <div v-else-if="role == 'toolbar'" class="btn-toolbar" role="toolbar" :aria-label="label">
        <div v-for="(item, index) in items" class="btn-group" :class="getSpace(item.space)" role="group" :aria-label="item.label">
            <button v-for="(itm, idx) in item" :key="idx" type="button" class="btn" :class="getClass(itm.variant)">{{ itm.text }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'button-group',
        props: {
            role: {
                type: String,
                default: 'group'
            },
            label: {
                type: String,
                default: 'basic'
            },
            variant: {
                type: String,
                default: 'primary'
            },
            items: {
                type: Array,
                default: []
            },
            space: {
                type: Number,
                default: 0
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
                    'btn-link': variant == 'link'
                }
            },
            getSpace(space) {
                return {
                    'mr-1': space == 1,
                    'mr-2': space == 2,
                    'mr-3': space == 3,
                    'mr-4': space == 4,
                    'mr-5': space == 5,
                    'mr-6': space == 6
                }
            }
        }
    }
</script>