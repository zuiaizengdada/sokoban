<script setup lang="ts">
import CargoImg from '../../assets/cargo.png'
import CargoOnTargetImg from '../../assets/cargo_on_target.png'
import { usePosition } from '../../composables/usePosition'
import { type Cargo } from '../../store/cargo'

type Props = {
  cargo: Cargo
}
const props = defineProps<Props>()
const { position } = usePosition(props.cargo)
</script>

<template>
  <div class="absolute" :style="position">
    <img :src="cargo.onTarget ? CargoOnTargetImg : CargoImg" />
  </div>
</template>
