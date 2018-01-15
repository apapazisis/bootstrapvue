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
            },
            on: {
                click(e) {
                    console.log('close');
                }
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