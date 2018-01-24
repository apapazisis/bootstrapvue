<template>
    <transition
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @leave="onLeave"
        @after-leave="onAfterLeave"
        enter-active-class="collapsing"
        leave-active-class="collapsing">
        <div :id="id" :class="getClasses" v-show="show">
            <div class="card card-body">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export const props = {
        id: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: false
        }
    }

    export default {
        name: 'collapse',
        data: () => ({
            transition: false
        }),
        props,
        computed: {
            getClasses() {
                return {
                     'show': this.show && !this.transition,
                     'collapse': !this.transition
                }
            }
        },
        methods: {
            onEnter(el) {
                el.style.height = 0
                el.style.height = el.scrollHeight + 'px';
                this.transition = true;
            },
            onAfterEnter(el) {
                el.style.height = null;
                this.transition = false;
            },
            onLeave(el) {
                el.style.height = 'auto';
                el.style.display = 'block';
                el.style.height = el.getBoundingClientRect().height + 'px';
                this.transition = true;
                el.style.height = 0
            },
            onAfterLeave(el) {
                el.style.height = null
                this.transition = false;
            }
        }
    }

</script>