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
    methods: {
        close() {
            console.log('close it');
        }
    },
    render(h) {
        let components = [];

        let dismissBtn = h(false)
        if (this.dismiss) {
            dismissBtn = h('btn-close', {
                attrs: {
                    'aria-label': this.dismissLabel
                },
                on: {
                    click: this.close
                }
            });
        }

        return h('div', {
            staticClass: 'alert',
            class: {
                [`alert-${this.variant}`]: true
            },
            attrs: {
                role: 'alert'
            }
        }, [dismissBtn, this.$slots.default]);
    }
}
