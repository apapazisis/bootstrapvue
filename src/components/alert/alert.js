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
    render(h, asd) {
        return h('div', {
            staticClass: 'alert',
            class: {
                [`alert-${variant}`]: true
            },
            attrs: {
                role: 'alert'
            }
        })
    }
}
