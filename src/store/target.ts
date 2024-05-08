import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Position } from '../composables/usePosition'

interface Target {
  x: number
  y: number
}

export const useTargetStore = defineStore('target', () => {
  const targets = reactive<Target[]>([])

  function createTartge({ x, y }: { x: number; y: number }): Target {
    return {
      x,
      y
    }
  }

  function addTarget(target: Target) {
    targets.push(createTartge(target))
  }

  function findTarget(position: Position) {
    return targets.find((t) => t.x === position.x && t.y === position.y)
  }

  return {
    targets,
    createTartge,
    addTarget,
    findTarget
  }
})
