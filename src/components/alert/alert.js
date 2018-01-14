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
    props,
    render(h, {props, slots}) {
        let components = [];

        if (props.dismiss) {
            components.push(h('button', {
                staticClass: 'close',
                attrs: {
                    type: 'button',
                    'data-dismiss': 'alert',
                    'aria-label': props.dismissLabel
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
    }
}
