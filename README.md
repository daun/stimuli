# Stimuli ⚡️

[![NPM version](https://img.shields.io/npm/v/stimuli?color=97aab4)](https://www.npmjs.com/package/stimuli)
[![GitHub license](https://img.shields.io/github/license/daun/stimuli?color=97aab4)](./LICENSE)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/stimuli?color=97aab4&label=size)](https://bundlephobia.com/result?p=stimuli)
<!-- [![GitHub (pre-)release date](https://img.shields.io/github/release-date-pre/daun/stimuli?label=updated)](https://github.com/daun/stimuli/releases) -->

Collection of useful single-responsibility Stimulus controllers.

**Work in progress**. Needs proper tests.

## Installation

```bash
npm install stimuli
```

## Usage

Import and register the desired controllers with your application.

```js
import { Controller } from 'stimulus'
import { MeasureController } from 'stimuli'

const application = Application.start()
application.register('measure', MeasureController)
```

## Controllers

### Autoplay

Autoplay video or audio files. Retries with a muted version of the video if it
failes on first try.

### Measure

Measure the deimensions of an element and stores the value in a CSS custom
property.

## License

[MIT](https://opensource.org/licenses/MIT)
