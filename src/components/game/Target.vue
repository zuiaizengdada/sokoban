<script setup lang="ts">
import TargetImg from '../../assets/target.png'
import { usePosition } from '../../composables/usePosition'

type Props = {
  x: number
  y: number
}
const props = defineProps<Props>()
const { position } = usePosition(props)
</script>

<template>
  <div class="absolute" :style="position">
    <img :src="TargetImg" />
  </div>
</template>
