export const props = {
    noBody: {
        type: Boolean,
        default: false
    },
    overlay: {
        type: Boolean,
        default: false
    }
}

export default {
    name: 'card-body',
    functional: true,
    props,
    render(h, {props}) {
        let components = [];

        return h('div', {
            staticClass: 'card-body'
        })
    }
}
