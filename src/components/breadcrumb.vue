<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" :class="{'active': item.active}" v-for="(item, index) in items" :key="index">
                <a :href="item.href" v-if="!item.active">{{ item.text }}</a>
                <template v-else>{{ item.text }}</template>
            </li>
        </ol>
    </nav>
</template>

<script>
    export default {
        name: 'breadcrumb',
        props: {
            items: {
                type: Array,
                default: []
            }
        }
    }
</script>