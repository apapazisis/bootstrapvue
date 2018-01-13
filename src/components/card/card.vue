<template>
    <div class="card">
        <card-body no-body overlay></card-body>
    </div>
</template>

<script>
    import CardBody, {props as bodyProps} from './card-body.vue';

    export default {
        name: 'card',
        props: bodyProps,
        components: {
            cardBody
        }
    }
</script>