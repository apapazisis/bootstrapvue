import CardBody, {props as bodyProps} from './card-body';

export default {
    name: 'card',
    props: bodyProps,
    render(h, props) {
        console.log(props);
        let components = [];

        return h(CardBody, {

        })
    }
}