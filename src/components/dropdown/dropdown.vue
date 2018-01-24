<template>
    <div v-click-outside="closeMenu" class="dropdown btn-group" :class="getClasses">
        <bv-button :size="size" v-if="split" :variant="variant" v-text="text"></bv-button>
        <bv-button
            :size="size"
            :id="id"
            class="dropdown-toggle"
            :class="{ 'dropdown-toggle-split': split }"
            data-toggle="dropdown"
            :variant="variant"
            aria-haspopup="true"
            v-bind="bindAriaExpanded"
            @click="expandMenu">
                <span v-if="split" class="sr-only">Toggle Dropdown</span>
                <template v-else>{{ text }}</template>
        </bv-button>
        <div class="dropdown-menu" :class="{ 'show': show }" :aria-labelledby="id">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import bvButton, { props as bvButtonProps } from '../button/button.vue';
    import { ClickOutside } from '../../directives/click-outside/click-outside';

    export const props = Object.assign({}, bvButtonProps, {
        text: {
            type: String,
            default: ''
        },
        split: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: null
        }
    });

    export default {
        name: 'dropdown',
        data: () => ({
            show: false
        }),
        props,
        components: {
            bvButton
        },
        directives: {
            ClickOutside
        },
        computed: {
            bindAriaExpanded() {
                if (this.show) {
                    return { 'aria-expanded': 'true' }
                }
                return { 'aria-expanded': 'false' }
            },
            getClasses() {
                return {
                     [`show`]: this.show,
                     [`drop${this.direction}`]: Boolean(this.direction)
                }
            }
        },
        methods: {
            expandMenu() {
                this.show = !this.show;
            },
            closeMenu() {
                this.show = false;
            }
        }
    }
</script>