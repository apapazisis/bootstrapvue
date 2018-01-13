<template>
    <div class="card">
        <card-body :no-body="noBody" :overlay="overlay">
            <slot></slot>
        </card-body>
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