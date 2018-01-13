<script>
    import CardBody, {props as BodyProps} from './card-body.vue';

    export default {
        name: 'card',
        props: BodyProps,
        render(h) {
            return h(CardBody, {
                props: this.props
            })
        }
    }
</script>