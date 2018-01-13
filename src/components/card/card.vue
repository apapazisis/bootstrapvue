<template>
    <div class="card">

    </div>
</template>

<script>
    import CardBody, {props as bodyProps} from './card-body.vue';

    export default {
        name: 'card',
        props: bodyProps,
        render(h) {
            return h(CardBody, {})
        }
    }
</script>