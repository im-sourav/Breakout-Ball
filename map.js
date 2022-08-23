const _ = {
  type: "_",
  color: ["#ffaa00"],
  stroke: ["#ffff00"],
  helth: 1
};
const G = {
  type: "_",
  color: ["#008000"],
  stroke: ["#003f00"],
  helth: 1
};
const E = {
  type: "_",
  color: ["#00ff00", "#008000"],
  stroke: ["#00a900", "#003f00"],
  helth: 2
};

const B = {
  type: "$",
  color: ["#5b340c"],
  stroke: ["#301a04"],
  helth: 1
};
const D = {
  type: "_",
  color: ["#a600ff", "#ffaa00"],
  stroke: ["#4e0077", "#ffff00"],
  helth: 2
};
const $ = {
  type: "$",
  color: ["#ffffff"],
  stroke: ["#c0c0c0"],
  helth: 1
};

const gameMaps = [
  {
    life: 3,
    row: 7,
    col: 18,
    height: 60,
    width: 90,
    padSpeed: 5,
    ballSize: 8,
    ballSpeed: 0.7,
    powerRet: 0.5,
    map: [
      [$, 0, 0, 0, 0, 0, $],
      [0, _, _, _, _, _, 0],
      [0, _, _, _, _, _, 0],
      [0, _, _, _, _, _, 0],
      [0, _, _, _, _, _, 0],
      [$, 0, 0, 0, 0, 0, $],
    ] 
  },
  { 
    life: 3,
    row: 9,
    col: 18, 
    height: 70,
    width: 70,
    padSpeed: 5,
    ballSize: 7,
    ballSpeed: 0.7,
    powerRet: 0.7,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, _, _, $, _, _, 0, 0],
      [0, _, _, _, $, _, _, _, 0],
      [0, _, _, _, $, _, _, _, 0],
      [0, $, $, $, $, $, $, $, 0],
      [0, _, _, _, $, _, _, _, 0],
      [0, _, _, _, $, _, _, _, 0],
      [0, 0, _, _, $, _, _, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]  
  },
  { 
    life: 3,
    row: 14,
    col: 30, 
    height: 80,
    width: 80,
    padSpeed: 5,
    ballSize: 7,
    ballSpeed: 0.8,
    powerRet: 0.8,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, _, _, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, _, _, _, _, _, _, 0, 0, 0, 0],
      [0, 0, _, _, _, _, _, _, _, _, _, _, 0, 0],
      [0, 0, _, _, _, _, _, _, _, _, _, _, 0, 0],
      [0, 0, $, $, $, $, $, $, $, $, $, $, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [_, _, _, 0, 0, 0, _, _, 0, 0, 0, _, _, _],
      [_, _, _, 0, 0, 0, _, _, 0, 0, 0, _, _, _],
      [_, _, _, 0, 0, 0, _, _, 0, 0, 0, _, _, _],
      [$, $, $, 0, 0, 0, $, $, 0, 0, 0, $, $, $],
    ]  
  },
  { 
    life: 3,
    row: 25,
    col: 60, 
    height: 80,
    width: 80,
    padSpeed: 5,
    ballSize: 6,
    ballSpeed: 0.8,
    powerRet: 0.8,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, E, 0, 0, 0, 0, 0, 0, 0, 0, 0, E, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, E, E, E, 0, 0, 0, 0, 0, 0, 0, E, E, E, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, E, E, E, E, E, 0, 0, 0, 0, 0, E, E, E, E, E, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, $, $, $, 0, 0, 0, 0, 0, 0, 0, $, $, $, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, E, 0, 0, 0, 0, 0, 0, 0, 0, 0, E, 0, 0, 0, 0, 0, 0, 0, 0, 0, E, 0, 0],
      [0, E, E, E, 0, 0, 0, 0, 0, 0, 0, E, E, E, 0, 0, 0, 0, 0, 0, 0, E, E, E, 0],
      [E, E, E, E, E, 0, 0, 0, 0, 0, E, E, E, E, E, 0, 0, 0, 0, 0, E, E, E, E, E],
      [0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0],
      [0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0],
      [0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0],
      [0, $, $, $, 0, 0, 0, 0, 0, 0, 0, $, $, $, 0, 0, 0, 0, 0, 0, 0, $, $, $, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, E, 0, 0, 0, 0, 0, 0, 0, 0, 0, E, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, E, E, E, 0, 0, 0, 0, 0, 0, 0, E, E, E, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, E, E, E, E, E, 0, 0, 0, 0, 0, E, E, E, E, E, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, $, $, $, 0, 0, 0, 0, 0, 0, 0, $, $, $, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]  
  },
  { 
    life: 3,
    row: 25,
    col: 60, 
    height: 80,
    width: 80,
    padSpeed: 5,
    ballSize: 6,
    ballSpeed: 0.9,
    powerRet: 0.8,
    map: [
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, $],
      [$, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $, $],
    ]  
  }
]