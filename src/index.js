import Alert from './components/alert/alert.vue';
import Badge from './components/badge/badge.vue';
import Breadcrumb from './components/breadcrumb/breadcrumb.vue';
import Button from './components/button/button.vue';
import ButtonGroup from './components/button-group/button-group.vue';
import ButtonToolbar from './components/button-toolbar/button-toolbar.vue';
import Card from './components/card/card.vue';
import CardBody from './components/card/card-body.vue';
import Carousel from './components/carousel/carousel.vue'
import CarouselSlide from './components/carousel/carousel-slide.vue'


const BootstrapVue = {
    'bvAlert': Alert,
    'bvBadge': Badge,
    'bvBreadcrumb': Breadcrumb,
    'bvButton': Button,
    'bvButtonGroup': ButtonGroup,
    'bvButtonToolbar': ButtonToolbar,
    'bvCard': Card,
    'bvCardBody': CardBody,
    'bvCarousel': Carousel,
    'bvCarouselSlide': CarouselSlide
}

module.exports = BootstrapVue