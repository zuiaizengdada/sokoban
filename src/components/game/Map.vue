<script setup lang="ts">
import floorImg from '../../assets/floor.png'
import wallImg from '../../assets/wall.png'
import { useMapStore, MapTile } from '../../store/map'

const { map } = useMapStore()
</script>

<template>
  <div class="map w-screen">
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in map[i]">
        <template v-if="map[i][j] === MapTile.WALL">
          <img :src="wallImg" />
        </template>

        <template v-if="map[i][j] === MapTile.FLOOR">
          <img :src="floorImg" />
        </template>
      </div>
    </div>
  </div>
</template>
