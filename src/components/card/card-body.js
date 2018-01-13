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
    props,
    render(h) {
        return h('div', {
            'class': {
                'is-red': this.noBody
            }
        }, [
            h('p', 'Example Text')
        ])
    }
}
