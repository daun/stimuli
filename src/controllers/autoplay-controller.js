import { Controller } from 'stimulus'

/**
 * Autoplay controller
 *
 * Play and pause video and audio elements on (dis)connect
 *
 */

export default class extends Controller {
  connect() {
    super.connect()
    this.autoplay()
  }

  disconnect() {
    super.disconnect()
    this.pause()
  }

  get doesAutoplay() {
    return this.element.hasAttribute('autoplay')
  }

  get shallAutoplay() {
    return this.element.hasAttribute('data-autoplay')
  }

  autoplay() {
    if (this.shallAutoplay) {
      try {
        const promise = this.element.play()
        if (promise !== undefined) {
          promise
            .then(() => {
              // this.publish(events.AUTOPLAY, { element: this.element })
            })
            .catch(() => {
              this.element.muted = true
              this.element.play()
            })
        }
      } catch (error) {
        /* */
      }
    }
  }

  pause() {
    if (this.shallAutoplay || this.doesAutoplay) {
      try {
        this.element.pause()
      } catch (error) {
        /* */
      }
    }
  }
}
