import CardBody, {props as bodyProps} from './card-body';

export const props = bodyProps;

export default {
    functional: true,
    name: 'card',
    props,
    render(h, {props}) {
        console.log(props);
        let components = [];

        return h(CardBody, {
            props: props
        })
    }
}