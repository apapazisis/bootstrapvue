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
    render(h) {
        return h('div', {
            'class': {
                'is-red': true
            }
        }, [
            h('p', 'Example Text')
        ])
    }
}
