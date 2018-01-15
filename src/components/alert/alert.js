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
    functional: true,
    components: {
        BtnClose
    },
    props,
    render(h, {props, slots}) {
        let components = [];

        if (props.dismiss) {
            components.push(h(BtnClose, {
                attrs: {
                    'aria-label': props.dismissLabel
                },
                on: {
                    click: this.close
                }
            }));
        }

        return h('div', {
            staticClass: 'alert',
            class: {
                [`alert-${props.variant}`]: true
            },
            attrs: {
                role: 'alert'
            }
        }, [components, slots().default]);
    },
    methods: {
        close() {
            console.log('close it');
        }
    }
}
