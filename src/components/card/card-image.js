export const props = {
    imgSrc: {
        type: String,
        default: ''
    },
    imgAlt: {
        type: String,
        default: ''
    },
    bottom: {
        type: Boolean,
        default: false
    }
}

export default {
    name: 'card-image',
    functional: true,
    props,
    render(h, {props}) {
        let staticClass = 'card-img-top';

        if (props.bottom) {
            staticClass = 'card-img-bottom';
        }

        return h('img', {
            staticClass,
            attrs: {
                src: props.imgSrc,
                alt: props.imgAlt
            }
        })
    }

}