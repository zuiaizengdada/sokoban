import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { MapTile, useMapStore } from './map'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1
  })

  function movePlayerToLeft() {
    const { map } = useMapStore()

    const isWall = map[player.x - 1][player.y] === MapTile.WALL

    if (!isWall) {
      player.x -= 1
    }
  }

  function movePlayerToRight() {
    player.x += 1
  }
  function movePlayerToTop() {
    player.y -= 1
  }

  function movePlayerToBottom() {
    player.y += 1
  }

  function reset() {
    player.x = 1
    player.y = 1
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
    movePlayerToBottom,
    reset
  }
})
