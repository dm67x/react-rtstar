<p align="center">
  <img src="rtstar.png" alt="react-rtstar logo" width="400px" height="auto">
</p>

# react-rtstar

<p align="center">
  <a href="https://npmjs.org/package/react-rtstar" target="_blank">
    <img src="https://nodei.co/npm/react-rtstar.png?compact=true">
  </a>
</p>

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

#### Callback function "onStateChanged" usage

```javascript
// onStateChanged have only one parameter and it contains the array of values
// onStateChanged is called when user click on star (so when he rates)
<RtStar onStateChanged={(values) => console.log(values)}>
```

## Demo

1. Clone this repo
2. ```cd react-rtstar && npm install```
3. ```npm run dev```
4. Go to demo folder and open index.html with web browser
5. That's it ;)

## Props

| Name           | Type             | Description                | Default value   | Required |
|----------------|------------------|----------------------------|-----------------|----------|
| values         | Array of numbers | Array of values            | []              | false    |
| max            | Number           | Number of stars to display | 5               | false    |
| inactiveColor  | String           | Inactive star color        | "gray"          | false    |
| activeColor    | String           | Active star color          | "orange"        | false    |
| size           | String           | Size of stars                                | "30px"        | false    |
| onStateChanged | Function        | Callback when state changed (values changed) | Empty function | false
