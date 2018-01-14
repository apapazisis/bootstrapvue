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

        console.log( slots().default );
        return h(props.headerTag, {
            staticClass: 'card-header'
            }, slots().default || [h('div', { domProps: { innerHTML: props.header } })]
        )
    }

}