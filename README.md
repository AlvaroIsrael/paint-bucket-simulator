<h1 align='center'>Paint Bucket Simulator</h1>

<div align='center'>
  <img alt='Paint Bucket Simulator Logo' src='https://raw.githubusercontent.com/AlvaroIsrael/paint-bucket-simulator/main/src/assets/paint-bucket-simulator.gif'/>
</div>

<h4 align='center'>A simple typescript program to solve the flood fill algorithm!</h4>

<div align='center'>
  <a href='#-challenge'>Challenge</a> •
  <a href='#-technologies-used'>Technologies Used</a> •
  <a href='#-how-to-use'>How To Use</a> •
  <a href='#-how-to-test'>How To Test</a> •
  <a href='#-license'>License</a>
</div>

<h4 align='center'>Made with ❤️ by Alvaro Israel 👏🏻 <a href='https://www.linkedin.com/in/alvaroisraeldesenvolvedor/'>
Get in Touch!</a></h4>

## 💡 Challenge

This challenge consists of implementing the behavior similar to the 'paint bucket tool' of MS-Paint. The program should
hold an array of symbols and characters representing the shape of an image. With each array value representing a pixel
in that image. Each pixel should have a color and, identical characters or symbols would represent the same color. For
example: The following 4x6 matrix represents the image of the letter 'P', collered by '#', having the background color
of '.'.

```bash
.###..
.#..#.
.###..
.#....
```

The program should recieve one pixel (from that image), a new color, and then be able to paint the correct adjacent
region filled with that same pixel's color, exactly like the 'paint bucket tool' of MS-Paint does.

Examples:<br>
Pixel (0, 1) and new color 'o':

```bash
# Previously:
.###..
.#..#.
.###..
.#....

# Afterwards:
.ooo..
.o..#.
.ooo..
.o....
```

Pixel (1,3) and new color 'o':

```bash
# Previously:
.###.
.#..#.
.###.
.#....

# Afterwards:
.###..
.#oo#.
.###..
.#....
```

Pixel (1,3) and new color '#':

```bash
# Previously:
.###..
.#..#.
.###..
.#....

# Afterwards:
.###..
.####.
.###..
.#....
```

## 🏆 Technologies Used

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [JestJs](https://jestjs.io/)

## 💻 How to Use

To clone and run this application, you'll need [Git](https://git-scm.com)
and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/AlvaroIsrael/paint-bucket-simulator.git

# Go into the main app folder
$ cd paint-bucket-simulator

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```

## 🎯 How to Test

```bash
# Open up terminal and run
$ yarn test
```

Code coverage html report can be found at:

```
./paint-bucket-simulator/coverage/lcov-report/index.html
```

## 🧾 License

This software is under GNU General Public License v3.0. See [LICENSE](LICENSE.md) for more details.
