import CardBody, {props as BodyProps} from './card-body';
import ImageBody, {props as ImageProps} from './card-image';

export const props = Object.assign({}, BodyProps, ImageProps);

export default {
    name: 'card',
    functional: true,
    props,
    render(h, {props, slots}) {
        let components = [];

        if (props.imgSrc != '') {
            components.push(h(ImageBody, { props: props }, slots().default));
        }

        if (props.noBody) {
            components.push(slots().default);
        } else {
            components.push(h(CardBody, { props: props }, slots().default));
        }

        return h('div', {
            staticClass: 'card',
        }, components);
    }
}