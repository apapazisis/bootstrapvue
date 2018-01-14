export const props = {
    footer: {
        type: String,
        default: ''
    },
    footerClass: {
        type: [String, Object, Array],
        default: null
    }
}

export default {
    name: 'card-footer',
    functional: true,
    props,
    render(h, {props}) {
        return h('div', {
            staticClass: 'card-footer',
            class: [
                props.footerClass
            ]
        }, [
            h('div', {domProps: { innerHTML: props.footer } })
        ])
    }
}