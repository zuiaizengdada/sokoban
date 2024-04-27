import { defineStore } from 'pinia'

export enum MapTile {
  WALL = 1,
  FLOOR = 2
}

export const useMapStore = defineStore('map', () => {
  let map = [
    [1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1]
  ]

  function setupMap(newMap: MapTile[][]) {
    map.splice(0, map.length, ...newMap)
  }

  return {
    map,
    setupMap
  }
})
