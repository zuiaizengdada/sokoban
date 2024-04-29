<script setup lang="ts">
import CargoImg from '../../assets/cargo.png'
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
    <img :src="CargoImg" />
  </div>
</template>

<style lang="scss" scoped></style>
