<template>
    <div class="alert" :class="getType" role="alert">
        <button v-if="dismissable" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <slot></slot>
    </div>
</template>

<<script>
    export default {
        name: 'alert',
        data: () => ({
            types: {
                primary: 'alert-primary',
                success: 'alert-success',
                secondary: 'alert-secondary',
                danger: 'alert-danger',
                warning: 'alert-warning'
            }
        }),
        props: {
            show: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'primary'
            },
            dismissable: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            getType() {
                return {
                    this.types[this.type]: true
                }
            }
        }
    }
</script>

