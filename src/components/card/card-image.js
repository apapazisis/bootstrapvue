export const props = {
    imgSrc: {
        type: String,
        default: ''
    },
    imgAlt: {
        type: String,
        default: ''
    }
}

export default {
    name: 'card-image',
    functional: true,
    props,
    render(h, {props}) {
        let components = [];

        return h('img', {
            staticClass: 'card-img-top',
            attrs: {
                src: props.imgSrc,
                alt: props.imgAlt
            }
        })
    }

}