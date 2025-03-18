---
theme: seriph
title: Calculator
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

drawings:
  persist: false
transition: slide-left
---

# Calculator

Performs Calculation

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  <carbon:arrow-right />
</div>

---
transition: fade-out
---

# CALCULATOR

A calculator is a device or software used to perform mathematical calculations
## Types of Calculator

- **Basic Calculators** – Perform simple arithmetic
- **Scientific Calculators** – Include functions like trigonometry, logarithms, and exponents.
- **Graphing Calculators** – Can plot graphs, solve equations, and handle complex calculations.
- **Financial Calculators** – Used for interest rates, amortization, and financial modeling.
- **Online & Software Calculators** – Web-based or app-based tools, such as Google Calculator or built-in OS calculators.
<br>
<br>

Read more about [Calculator](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.lenovo.com/in/en/glossary/calculator/&ved=2ahUKEwj0goDru9GLAxXWzTgGHZQ4FywQFnoECBIQAw&usg=AOvVaw1UQPbxcQehuDSbtF0yVQ_C)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
layoutClass: gap-16
layout: image-right
image: https://cover.sli.dev
transition: slide-left
---

# Features

- Simple User Interface
- Basic Arithmetic Operations
- Number Input & Display
- Positive/Negative Toggle (±)


The Calculator Components allows basic Arithmetic Calculation with the operation such as Addition, Subtraction, Division and Multiplication.

---

# CALCULATOR COMPONENT   

<Calculator :result="100"/>

