import { Controller } from 'stimulus'

/**
 * Measure controller
 *
 * Measure and store element dimensions in CSS variables
 *
 */

export default class extends Controller {
  get name() {
    return this.data.get('name')
  }

  get dimensions() {
    const dimensions = (this.data.get('dimension') || '').split(' ')
    return dimensions.map((d) => d.trim().toLowerCase())
  }

  connect() {
    super.connect()
    this.measure()
    // this.registerEvents()
  }

  registerEvents() {
    const resizeHandler = this.measure.bind(this)
    this.onResize(resizeHandler)
    this.onResizeStop(resizeHandler)
  }

  measure() {
    const rect = this.element.getBoundingClientRect()
    this.dimensions.forEach((dimension) => {
      const value = rect[dimension]
      if (value === undefined) return
      document.documentElement.style.setProperty(
        `--${this.name}-${dimension}`,
        `${value}px`
      )
    })
  }
}
