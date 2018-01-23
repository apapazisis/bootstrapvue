<template>
    <div :id="id" class="carousel slide" data-ride="carousel">
        <ol v-if="indicators" class="carousel-indicators">
            <li data-target="#" @click="setSlide(index)" v-for="(id, index) in slidesLen" :key="index" :class="{ 'active': index == currentSlide }"></li>
        </ol>
        <div class="carousel-inner" ref="inner">
            <slot></slot>
        </div>
        <a v-if="controls" class="carousel-control-prev" href="#" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a v-if="controls" class="carousel-control-next" href="#" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export const props = {
        id: {
            type: String,
            default: ''
        },
        interval: {
            type: Number,
            default: 5000
        },
        controls: {
            type: Boolean,
            default: false
        },
        indicators: {
            type: Boolean,
            default: false
        },
        background: {
            type: String,
            default: '#fff'
        }
    }

    export default {
        name: 'carousel',
        props,
        data: () => ({
            slides: [],
            slidesLen: 0,
            currentSlide: 0,
            intervalId: null
        }),
        mounted() {
            this.slides = this.$refs.inner.children;
            this.slidesLen = this.slides.length;
            this.assignSlidesIndexes();
            this.start();
        },
        methods: {
            start() {
                this.intervalId = setInterval(() => {
                    this.currentSlide += 1;

                    if (this.currentSlide > this.slidesLen - 1) {
                        this.currentSlide = 0;
                    }
                }, this.interval);
            },
            stop() {
                clearInterval(this.intervalId);
            },
            pause() {

            },
            setSlide(index) {
                this.stop();
                this.clearActiveClass();
                this.currentSlide = index;
                this.start();
            },
            clearActiveClass() {
                Array.from(this.slides).forEach((el, index) => {
                    this.slides[index].classList.remove('active');
                });
            },
            assignSlidesIndexes() {
                this.$children.forEach((slide, idx) => {
                    slide.index = idx;
                });
            }
        }

    }
</script>

