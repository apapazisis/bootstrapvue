export const props = {
    ariaLabel: {
        type: String,
        default: ''
    }
}

export default {
    name: 'button-close',
    functional: true,
    props,
    render(h, {props}) {
        return h('button', {
            staticClass: 'close',
            attrs: {
                type: 'button',
                'data-dismiss': 'alert',
                'aria-label': props.ariaLabel
            }
        }, [
            h('span', {
                attrs: {
                    'aria-hidden': 'true'
                },
                domProps: {
                    innerHTML: '&times;'
                }
            })
        ]);
    }
}