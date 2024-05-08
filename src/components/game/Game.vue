<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue'
import Target from './Target.vue'
import { useCargoStore } from '../../store/cargo'
import { useTargetStore } from '../../store/target'
import { useGameStore } from '../../store/game'

const { game } = useGameStore()

const { cargos, addCargo, createCargo } = useCargoStore()
const cargo1 = createCargo({ x: 2, y: 3 })
const cargo2 = createCargo({ x: 2, y: 2 })
addCargo(cargo1)
addCargo(cargo2)

const { targets, addTarget, createTartge } = useTargetStore()
const target1 = createTartge({ x: 2, y: 4 })
const target2 = createTartge({ x: 3, y: 4 })
addTarget(target1)
addTarget(target2)
</script>

<template>
  <div class="game">
    <Map />
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :cargo="cargo" />
    </template>
    <div v-if="game.isGameCompleted" class="bg-red-500">
      <button>下一关</button>
    </div>
  </div>
</template>
