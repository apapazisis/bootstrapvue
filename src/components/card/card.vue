<template>
    <div class="card">
        <card-header v-if="headerText || this.$slots.header" :headerClass="headerClass" :headerTag="headerTag" :headerText="headerText"><slot name="header"></slot></card-header>
        <card-image v-if="imgBottom == false  && imgSrc != ''" :imgSrc="imgSrc" :imgAlt="imgAlt" :imgBottom="imgBottom"></card-image>
        <card-body v-if="noBody == false" :title-tag="titleTag" :title="title" :subtitle="subtitle" :subtitleTag="subtitleTag" :no-body="noBody"><slot></slot></card-body>
        <slot v-else></slot>
        <card-image v-if="imgBottom == true  && imgSrc != ''" :imgSrc="imgSrc" :imgAlt="imgAlt" :imgBottom="imgBottom"></card-image>
        <card-footer v-if="footerText || this.$slots.footer" :footerText="footerText" :footerClass="footerClass"><slot name="footer"></slot></card-footer>
    </div>
</template>

<script>
    import CardBody, {props as CardBodyProps} from './card-body.vue';
    import CardImage, {props as CardImageProps} from './card-image.vue';
    import CardHeader, {props as CardHeaderProps} from './card-header.vue';
    import CardFooter, {props as CardFooterProps} from './card-footer.vue';

    export const props = Object.assign({}, CardBodyProps, CardImageProps, CardHeaderProps, CardFooterProps);

    export default {
        name: 'card',
        props,
        components: {
            CardBody,
            CardImage,
            CardHeader,
            CardFooter
        }
    }
</script>