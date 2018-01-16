<template>
    <span v-if="type == 'badge'" class="babge" :class="[getVariant()]">
        <slot></slot>
    </span>
    <span v-else-if="type == 'contextual'" class="badge" :class="[getVariant()]"><slot></slot></span>
    <span v-else-if="type == 'pill'" class="badge badge-pill" :class="[getVariant()]"><slot></slot></span>
    <a v-else-if="type == 'link'" :href="href" class="badge" :class="[getVariant()]"><slot></slot></a>
</template>

<script>
    export const props = {
        variant: {
            type: String,
            default: 'primary'
        },
        type: {
            type: String,
            default: 'badge'
        },
        href: {
            type: String,
            default: '#'
        }
    }

    export default {
        name: 'badge',
        props,
        methods: {
            getVariant() {
                return {
                    [`badge-${this.variant}`]: Boolean(this.variant)
                }
            }
        }
    }
</script>