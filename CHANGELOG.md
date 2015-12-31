# Changelog

## 0.5.0
Added visual highlighting for substring matches within keys/values.
Collapse headers by default so that new actions load more efficiently.
Moved styles from CSS files to inline to better support out-of-the-box Browserify usage.
Removed dependency on `Object.values` to simplify external dependencies.

## 0.4.0
Added created-at time to action-type header to assist with debugging.
Also added media queries to help with smaller browser sizes.

## 0.3.0
Added top-level filter for actions, allowing them to be filtered by type.

## 0.2.0
Added action-type to header to each monitor entry.
Filter input is hidden unless at least one filter-by property is selected.
Actions are no longer reverse-sorted in order to be more like the other monitors.

## 0.1.0
Initial release.
