import BtnClose from '../button/button-close';

export const props = {
    show: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: 'primary'
    },
    dismiss: {
        type: Boolean,
        default: false
    },
    dismissLabel: {
        type: String,
        default: 'Close'
    },
    timeout: {
        type: Number,
        default: 0
    }
}

export default {
    name: 'alert',
    components: {
        BtnClose
    },
    props,
    render(h) {
        let components = [];

        if (this.dismiss) {
            components.push(h(BtnClose, {
                attrs: {
                    'aria-label': this.dismissLabel
                },
                on: {
                    click: this.close
                }
            }));
        }

        return h('div', {
            staticClass: 'alert',
            class: {
                [`alert-${this.variant}`]: true
            },
            attrs: {
                role: 'alert'
            }
        }, [components, this.$slots.default]);
    },
    methods: {
        close() {
            console.log('close it');
        }
    }
}
