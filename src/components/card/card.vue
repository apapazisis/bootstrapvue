<template>
    <div class="card">
        <card-body v-if="noBody == false"><slot></slot></card-body>
        <slot></slot>
    </div>
</template>

<script>
    import CardBody, {props as bodyProps} from './card-body.vue';

    export default {
        name: 'card',
        props: bodyProps,
        components: {
            CardBody
        }
    }
</script>