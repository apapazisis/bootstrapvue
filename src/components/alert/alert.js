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
            components.push(h(BtnClose));
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
    }
}
