# react-rtstar

[![NPM](https://nodei.co/npm/react-rtstar.png?compact=true)](https://npmjs.org/package/react-rtstar)

![Logo of RtStar](rtstar.png)

RtStar is a react component to help you create a good notation system, easily with full customization.

## Usage

### Import module

```javascript
import RtStar from 'react-rtstar'
```

### Add to your component

```javascript
<RtStar 
  values={your_values} 
  max={max_number_of_stars_to_show} 
  size={size_of_stars}
  activeColor={active_color_for_stars}
  inactiveColor={inactive_color_for_stars} />
```

# Launch demo

1. Fork, download or clone this repository.
2. `cd react-rtstar && npm install`
3. `npm start`
4. Open index.html inside dist folder

## Props

| Name          | Type            | Description                | Default value | Required |
|---------------|-----------------|----------------------------|---------------|----------|
| values        | Array of number | Array of values            | []            | false    |
| max           | Number          | Number of stars to display | 5             | false    |
| inactiveColor | String          | Inactive star color        | "gray"        | false    |
| activeColor   | String          | Active star color          | "orange"      | false    |
| size          | String          | Size of stars              | "30px"        | false    |
| star (WIP)    | Node            | Star form (SVG)            | Normal star   | false    |
