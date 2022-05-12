<p align="center">
  <img src="rtstar.png" alt="react-rtstar logo" width="400px" height="auto">
</p>

# react-rtstar

<p align="center">
  <a href="https://npmjs.org/package/react-rtstar" target="_blank">
    <img src="https://nodei.co/npm/react-rtstar.png?compact=true">
  </a>
</p>

## Usage

```javascript
import RtStar from 'react-rtstar'

<RtStar />
```

## Props

```typescript
type RtStarProps = {
  stars?: number // number of stars
  size?: number // size of stars in pixel
  activeColor?: string
  inactiveColor?: string
  value?: number
  onChange?: (value: number) => void
}
```
