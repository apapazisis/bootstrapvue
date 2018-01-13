import CardBody, {props as bodyProps} from './card-body';

export const props = bodyProps;

export default {
    name: 'card',
    functional: true,
    props,
    render(h, {props, slots}) {
        let components = [];

        if (props.noBody) {
            console.log('aaa');
            components.push(slots().default)
        } else {
            console.log('bbb');
            components.push(h(CardBody, { props: props }, slots().default))
        }
        console.log(components);
        return h(components);
    }
}