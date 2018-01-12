<template>
    <div class="card">
        <div class="card-header">
        </div>
        <img v-if="imgSrc != ''" :class="getImgTopClass(imgTop)" :src="imgSrc" :alt="imgAlt">
        <div class="card-body">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cards',
        props: {
            title: {
                type: String,
                default: ''
            },
            titleTag: {
                type: String,
                default: 'h5'
            },
            subtitle: {
                type: String,
                default: ''
            },
            subtitleTag: {
                type: String,
                default: 'h6'
            },
            imgSrc: {
                type: String,
                default: ''
            },
            imgAlt: {
                type: String,
                default: ''
            },
            imgTop: {
                type: Boolean,
                default: false
            },
            header: {
                type: String,
                default: ''
            },
            headerTag: {
                type: String,
                default: ''
            }
        },
        methods: {
            getImgTopClass(imgTop) {
                return {
                    'card-img-top': imgTop
                }
            },
            createTitleTag() {
                let h = document.createElement(this.titleTag);
                let t = document.createTextNode(this.title);
                h.appendChild(t);
                document.getElementsByClassName('card-body')[0].appendChild(h);
            },
            createSubTitleTag() {
                let h = document.createElement(this.subtitleTag);
                let t = document.createTextNode(this.subtitle);
                h.appendChild(t);
                document.getElementsByClassName('card-body')[0].appendChild(h);
            }
        },
        mounted() {
            if (this.title != '') {
                this.createTitleTag();
            }
            if (this.subtitleTag != '') {
                this.createSubTitleTag();
            }
        }
    }
</script>