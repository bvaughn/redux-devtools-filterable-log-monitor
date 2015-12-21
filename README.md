Redux DevTools Filterable Log Monitor
=========================

Filterable tree view monitor for [Redux DevTools](https://github.com/gaearon/redux-devtools).

### Installation

```
npm install --save-dev redux-devtools-filterable-log-monitor
```

### Usage

The `FilterableLogMonitor` is intended for use within the [`DockMonitor`](https://github.com/gaearon/redux-devtools-dock-monitor). You can configure your app to use these monitors like so:

##### `containers/DevTools.js`

```js
import React from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import FilterableLogMonitor from '../src'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <FilterableLogMonitor/>
  </DockMonitor>
)

export default DevTools

```

Then you can render `<DevTools>` to any place inside app or even into a separate popup window.

[Read how to start using Redux DevTools.](https://github.com/gaearon/redux-devtools)

### Features

Every action is displayed in the log. You can search actions using regular expressions or simple strings. Actions can be searched by keys, values, or both.

### License

MIT
