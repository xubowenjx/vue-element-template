<template>
  <div class="timepick">
    {{text}}getToken:{{gettt}}
    <el-time-select
    :placeholder="text"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      startTime: '',
      endTime: '',
      text: this.$t('message.hellow')
    }
  },
  computed: {
    ...mapGetters({gettt: 'getToken'})// 将store中的getToken映射在computed里面的gettt
  },
  mounted () {
    this.$store.commit('login', '12345')
  }
}
</script>