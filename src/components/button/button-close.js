export const props = {

}

export default {
    name: 'button-close',
    functional: true,
    props,
    render(h) {
        return h('button', {
            staticClass: 'close',
            attrs: {
                'data-dismiss': 'alert',
                'aria-label': 'asd'
            }
        }, [
            h('span', {
                attrs: {
                    'aria-hidden': 'true'
                },
                innerHTML: '&times;'
            })
        ]);
    }
}
