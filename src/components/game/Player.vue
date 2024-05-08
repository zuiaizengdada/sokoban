<script setup lang="ts">
import keepImg from '../../assets/keeper.png'
import { usePosition } from '../../composables/usePosition'
import { usePlayerStore } from '../../store/player'
import { useMove } from './player'

useMove()
const { player } = usePlayerStore()
const { position } = usePosition(player)
</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keepImg" />
  </div>
</template>
