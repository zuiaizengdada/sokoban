import { onMounted, onUnmounted } from 'vue'
import { usePlayerStore } from '../../store/player'

export function useMove() {
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
  }

  onMounted(() => {
    window.addEventListener('keyup', handleKeyup)
  })

  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyup)
  })
}
