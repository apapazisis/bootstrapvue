<template>
    <button v-if="type == 'button'" @click="clicked" type="button" class="btn" v-bind="[{disabled}, binds()]" :class="[getClasses()]"><slot></slot></button>
    <a v-else-if="type == 'link'" @click="clicked" class="btn" :class="[getClasses()]" v-bind="[binds()]" :href="href" role="button"><slot></slot></a>
    <input v-else-if="type == 'reset'" @click="clicked" class="btn" :class="[getClasses()]" type="reset" v-bind="[{value}, binds()]">
    <input v-else-if="type == 'submit'" @click="clicked" class="btn" :class="[getClasses()]" type="submit" v-bind="[{value}, binds()]">
    <input v-else-if="type == 'ibutton'" @click="clicked" class="btn" :class="[getClasses()]" type="button" v-bind="[{value}, binds()]">
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
            getClasses() {
                return {
                    [`btn-${this.variant}`]: Boolean(this.variant),
                    [`btn-${this.size}`]: Boolean(this.size),
                    ['btn-block']: this.block,
                    ['disabled']: this.disabled,
                    ['active']: this.active
                }
            },
            binds() {
                let binds = [];

                if (this.disabled) {
                    binds.push({'aria-disabled': 'true'});
                }
                if (this.active) {
                    binds.push({'aria-pressed': 'true'});
                }

                return {binds};
            },
            clicked() {
                this.$emit('click');
            }
        }
    }
</script>