export const props = {
    header: {
        type: String,
        default: ''
    },
    headerTag: {
        type: String,
        default: 'div'
    },
    headerClass: {
        type: [String, Object, Array],
        default: null
    }
}

export default {
    name: 'card-header',
    functional: true,
    props,
    render(h, {props, slots}) {
        return h(props.headerTag, {
            staticClass: 'card-header',
            class: [
                props.headerClass
            ]
        }, [
            h('div', { domProps: { innerHTML: props.header } })
        ])
    }

}