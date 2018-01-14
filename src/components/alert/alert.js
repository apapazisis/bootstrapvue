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
console.log(this.getClass('success'));
        return h('div', {
            staticClass: 'alert',
            attrs: {
                role: 'alert'
            }
        })
    },
    methods: {
        getClass(variant) {
            return {
                'alert-primary': variant == 'primary',
                'alert-secondary': variant == 'secondary',
                'alert-success': variant == 'success',
                'alert-danger': variant == 'danger',
                'alert-warning': variant == 'warning',
                'alert-info': variant == 'info',
                'alert-light': variant == 'light',
                'alert-dark': variant == 'dark'
            }
        }
    }
}
