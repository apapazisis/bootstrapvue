<<template>
    <div class="alert alert-primary" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <slot></slot>
    </div>
</template>

<<script>
    export default {
        name: 'alert',
        props: {
            show: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
            }
        }
    }
</script>

