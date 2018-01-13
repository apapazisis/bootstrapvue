<template>
    <div class="card">
        <card-body></card-body>
    </div>
</template>

<script>
    import cardBody, {props as bodyProps} from './card-body.vue';

    export default {
        name: 'card',
        props: bodyProps,
        components: {
            cardBody
        }
    }
</script>