import CardBody, {props as bodyProps} from './card-body';

export const props = bodyProps;
console.log(bodyProps);
export default {
    name: 'card',
    props,
    render(h, props) {
        console.log(props);
        let components = [];

        return h(CardBody, {

        })
    }
}