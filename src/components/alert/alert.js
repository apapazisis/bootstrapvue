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
            components.push(h('button', {}, slots().default));
        }

        return h('div', {
            staticClass: 'alert',
            class: {
                [`alert-${props.variant}`]: true
            },
            attrs: {
                role: 'alert'
            }
        }, components);
    }
}
