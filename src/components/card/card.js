import CardBody, {props as bodyProps} from './card-body';

export const props = bodyProps;

export default {
    name: 'card',
    functional: true,
    props,
    render(h, {props, slots}) {
        let components = [];

        if (props.noBody) {
            components.push(slots().default)
        } else {
            components.push(h(CardBody, { props: props }, slots().default))
        }

        return h('div', {
            staticClass: 'card',
        }, components);
    }
}