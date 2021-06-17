# paint-bucket-simulator

<h4 align="center">A simple typescript program to solve the flood fill algorithm!</h4>

<p align="center">
  <a href="#-challenge">Challenge</a> •
  <a href="#-technologies-used">Technologies Used</a> •
  <a href="#-how-to-use">How To Use</a> •
  <a href="#-license">License</a>
</p>

<p align="center">Made with ❤️ by Alvaro Israel 👏🏻 <a href="https://www.linkedin.com/in/alvaroisraeldesenvolvedor/">Get in Touch!</a></p>

## 💡 Challenge

Implementar a funcionalidade semelhante ao “balde de tinta” do MS-Paint. O programa representa imagens utilizando
matrizes de caracteres, sendo que cada valor da matriz representa um pixel e letras e símbolos representam as diferentes
cores. Por exemplo, a seguinte matriz 4x6 representa a letra P na cor '#', com cor de fundo '.'.

```bash
.###..
.#..#.
.###..
.#....
```

Sua subrotina deve receber um pixel e uma nova cor e pintar a região desse pixel com a nova cor, como a ferramenta
“balde de tinta” do MS-Paint.

Exemplos:<br>
Pixel (0,1) e nova cor 'o':

```bash
# Antes:
.###..
.#..#.
.###..
.#....

# Depois:
.ooo..
.o..#.
.ooo..
.o....
```

Pixel (1,3) e nova cor 'o':

```bash
# Antes:
.###.
.#..#.
.###.
.#....

# Depois:
.###..
.#oo#.
.###..
.#....
```

Pixel (1,3) e nova cor '#':

```bash
# Antes:
.###..
.#..#.
.###..
.#....

# Depois:
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

## 🧾 License

This software is under GNU General Public License v3.0. See [LICENSE](LICENSE.md) for more details.
