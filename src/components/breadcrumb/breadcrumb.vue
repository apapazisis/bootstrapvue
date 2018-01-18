<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" :class="{'active': item.active}" v-bind="binds(item.active)" v-for="(item, index) in items" :key="index">
                <a :href="item.href" v-if="!item.active">{{ item.text }}</a>
                <template v-else>{{ item.text }}</template>
            </li>
        </ol>
    </nav>
</template>

<script>

    export const props = Object.assign({}, {
        items: {
            type: Array,
            default: null
        }
    });

    export default {
        name: 'breadcrumb',
        props,
        methods: {
            binds(isActive) {
                let binds = {};

                if (isActive) {
                    binds = Object.assign(binds, {'aria-current': 'page'});
                }

                return binds;
            }
        }
    }
</script>