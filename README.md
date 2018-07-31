<p align="center">
  <img src="rtstar.png" alt="react-rtstar logo" width="100%" height="auto">
</p>

# react-rtstar

[![NPM](https://nodei.co/npm/react-rtstar.png?compact=true)](https://npmjs.org/package/react-rtstar)

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

## Demo

1. Clone this repo
2. ```cd react-rtstar && npm install```
3. ```npm run dev```
4. Go to demo folder and open index.html with web browser
5. That's it ;)

## Props

| Name          | Type            | Description                | Default value | Required |
|---------------|-----------------|----------------------------|---------------|----------|
| values        | Array of number | Array of values            | []            | false    |
| max           | Number          | Number of stars to display | 5             | false    |
| inactiveColor | String          | Inactive star color        | "gray"        | false    |
| activeColor   | String          | Active star color          | "orange"      | false    |
| size          | String          | Size of stars              | "30px"        | false    |
