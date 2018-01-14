export const props = {
    header: {
        type: String,
        default: ''
    },
    headerTag: {
        type: String,
        default: 'div'
    }
}

export default {
    name: 'card-header',
    functional: true,
    props,
    render(h, {props, slots}) {

        return h(props.headerTag, {
            staticClass: 'card-header'
        }, [
            h('div', { domProps: { innerHTML: props.header } })
        ])
    }

}