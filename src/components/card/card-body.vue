<template>
    <div v-if="noBody == false" class="card-body">
        <h1 v-if="titleTag == 'h1' && title != ''" class="card-title">{{ title }}</h1>
        <h2 v-else-if="titleTag == 'h2' && title != ''" class="card-title">{{ title }}</h2>
        <h3 v-else-if="titleTag == 'h3' && title != ''" class="card-title">{{ title }}</h3>
        <h4 v-else-if="titleTag == 'h4' && title != ''" class="card-title">{{ title }}</h4>
        <h5 v-else-if="titleTag == 'h5' && title != ''" class="card-title">{{ title }}</h5>
        <h6 v-else-if="titleTag == 'h6' && title != ''" class="card-title">{{ title }}</h6>
        <h1 v-if="subtitleTag == 'h1' && subtitle != ''" class="card-subtitle">{{ subtitle }}</h1>
        <h2 v-else-if="subtitleTag == 'h2' && subtitle != ''" class="card-tisubtitletle">{{ subtitle }}</h2>
        <h3 v-else-if="subtitleTag == 'h3' && subtitle != ''" class="card-subtitle">{{ subtitle }}</h3>
        <h4 v-else-if="subtitleTag == 'h4' && subtitle != ''" class="card-subtitle">{{ subtitle }}</h4>
        <h5 v-else-if="subtitleTag == 'h5' && subtitle != ''" class="card-subtitle">{{ subtitle }}</h5>
        <h6 v-else-if="subtitleTag == 'h6' && subtitle != ''" class="card-subtitle">{{ subtitle }}</h6>
        <slot></slot>
    </div>
</template>

<script>
    export const props = {
        noBody: {
            type: Boolean,
            default: false
        },
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
        }
    }

    export default {
        name: 'card-body',
        props
    }
</script>