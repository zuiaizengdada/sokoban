import { it, expect, describe, beforeEach } from 'vitest'
import { useTargetStore } from '../target'
import { createPinia, setActivePinia } from 'pinia'

describe('target', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add a target', () => {
    const { targets, createTartge, addTarget } = useTargetStore()

    const target = createTartge({
      x: 4,
      y: 3
    })
    addTarget(target)

    expect(targets.length).toBe(1)
  })
})
