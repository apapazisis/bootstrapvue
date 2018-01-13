import CardBody, {props as bodyProps} from './card-body';

export const props = bodyProps;

export default {
    functional: true,
    name: 'card',
    props,
    render(h, {props, slots}) {
        let components = [];

        if (props.noBody) {
            components.push(slots().default)
        } else {
            components.push(h(CardBody, { props: props }, slots().default))
        }
        console.log(slots);
    }
}