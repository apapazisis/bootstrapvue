export const props = {
    noBody: {
        type: Boolean,
        default: false
    },
    overlay: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    titleTag: {
        type: String,
        default: 'h5'
    },
    subTitle: {
        type: String,
        default: ''
    },
    subTitleTag: {
        type: String,
        default: 'h6'
    }
}

export default {
    name: 'card-body',
    functional: true,
    props,
    render(h, {props}) {
        let components = [];

        if (props.title != '') {
            components.push(h(props.titleTag, {
                staticClass: 'card-title',
                domProps: {innerHTML: props.title}
            }))
        }

        if (props.subTitle != '') {
            components.push(h(props.subTitleTag, {
                staticClass: 'card-subtitle',
                domProps: {innerHTML: props.subTitle}
            }))
        }

        return h('div', {
            staticClass: 'card-body'
        }, components)
    }
}
