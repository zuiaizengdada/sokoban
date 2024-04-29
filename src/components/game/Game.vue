<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue'
import { useCargoStore } from '../../store/cargo'

const { cargos, addCargo, createCargo } = useCargoStore()
const cargo = createCargo({ x: 2, y: 3 })
addCargo(cargo)
</script>

<template>
  <div class="game">
    <Map />
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y" />
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
