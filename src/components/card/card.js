import CardBody, {props as BodyProps} from './card-body';
import ImageBody, {props as ImageProps} from './card-image';
import Header, {props as HeaderProps} from './card-header';

export const props = Object.assign({}, BodyProps, ImageProps, HeaderProps);

export default {
    name: 'card',
    functional: true,
    props,
    render(h, {props, slots}) {
        let components = [];

        if (props.imgSrc != '' && !props.bottom) {
            components.push(h(ImageBody, { props: props }));
        }

        if (props.header != '') {
            components.push(h(Header, { props: props }));
        }

        if (props.noBody) {
            components.push(slots().default);
        } else {
            components.push(h(CardBody, { props: props }, slots().default));
        }

        if (props.imgSrc != '' && props.bottom) {
            components.push(h(ImageBody, { props: props }));
        }

        return h('div', {
            staticClass: 'card',
        }, components);
    }
}