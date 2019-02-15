<template>
    <transition name="fade-transform" mode="out-in">
        <div class="request-loading-component" v-if="requestLoading">
            <svg-icon icon-class="loading"/>
        </div>
    </transition>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'RequestLoading',
    computed:{
        ...mapGetters([
            'requestLoading'
        ])
    }
}
</script>

