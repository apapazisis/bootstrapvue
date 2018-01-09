<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" :class="{ 'active': item.active }" v-for="(item, index) in items" :key="index">
                <a href="item.href">{{ item.text }}</a>
            </li>
        </ol>
    </nav>
</template>

<script>
    export default {
        name: 'breadcrumb',
        props: {
            items: Array,
            default: []
        }
    }

</script>