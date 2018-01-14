export const props = {
    footer: {
        type: String,
        default: ''
    }
}

export default {
    name: 'card-footer',
    functional: true,
    props,
    render(h, {props}) {

        return h('div', {
            staticClass: 'card-footer'
        }, [
            h('div', {domProps: { innerHTML: props.header } })
        ])
    }
}