<template>
    <div v-if="headerTag == 'div'" class="card-header" :class="headerClass">{{headerText}}<slot></slot></div>
    <h1 v-else-if="headerTag == 'h1'" class="card-header" :class="headerClass">{{headerText}}<slot></slot></h1>
    <h2 v-else-if="headerTag == 'h2'" class="card-header" :class="headerClass">{{headerText}}<slot></slot></h2>
    <h3 v-else-if="headerTag == 'h3'" class="card-header" :class="headerClass">{{headerText}}<slot></slot></h3>
    <h4 v-else-if="headerTag == 'h4'" class="card-header" :class="headerClass">{{headerText}}<slot></slot></h4>
    <h5 v-else-if="headerTag == 'h5'" class="card-header" :class="headerClass">{{headerText}}<slot></slot></h5>
    <h6 v-else-if="headerTag == 'h6'" class="card-header" :class="headerClass">{{headerText}}<slot></slot></h6>
</template>

<script>
    export const props = {
        headerTag: {
            type: String,
            default: 'div'
        },
        headerText: {
            type: String,
            default: ''
        },
        headerClass: {
            type: [String, Object, Array],
            default: null
        }
    }

    export default {
        name: 'card-header',
        props
    }
</script>