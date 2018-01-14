import CardBody, {props as BodyProps} from './card-body';
import CardImage, {props as ImageProps} from './card-image';
import CardHeader, {props as HeaderProps} from './card-header';
import CardFooter, {props as FooterProps} from './card-footer';

export const props = Object.assign({}, BodyProps, ImageProps, HeaderProps, FooterProps);

export default {
    name: 'card',
    functional: true,
    props,
    render(h, {props, slots}) {
        let components = [];

        if (props.header != '') {
            components.push(h(CardHeader, { props: props }, slots().header));
        }

        if (props.imgSrc != '' && !props.bottom) {
            components.push(h(CardImage, { props: props }));
        }

        if (props.noBody) {
            components.push(slots().default);
        } else {
            components.push(h(CardBody, { props: props }, slots().default));
        }

        if (props.footer != '') {
            components.push(h(CardFooter, { props: props }, slots().footer));
        }

        if (props.imgSrc != '' && props.bottom) {
            components.push(h(CardImage, { props: props }));
        }

        return h('div', {
            staticClass: 'card',
        }, components);
    }
}