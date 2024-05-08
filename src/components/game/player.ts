import { onMounted, onUnmounted } from 'vue'
import { usePlayerStore } from '../../store/player'
import { useGameStore } from '../../store/game'

export function useMove() {
  const { detectionGameCompleted } = useGameStore()
  const { movePlayerToLeft, movePlayerToBottom, movePlayerToRight, movePlayerToTop } = usePlayerStore()

  function handleKeyup(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowLeft':
        movePlayerToLeft()
        break
      case 'ArrowRight':
        movePlayerToRight()
        break
      case 'ArrowUp':
        movePlayerToTop()
        break
      case 'ArrowDown':
        movePlayerToBottom()
        break
      default:
        break
    }

    detectionGameCompleted()
  }

  onMounted(() => {
    window.addEventListener('keyup', handleKeyup)
  })

  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyup)
  })
}
