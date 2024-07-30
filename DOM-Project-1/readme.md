# DOM Manipulation Learning

This document provides an overview of how to dynamically manipulate various DOM (Document Object Model) properties using JavaScript. It includes examples of changing element styles such as color, height, width, font size, font weight, and margin.

## Table of Contents

1. [Introduction](#introduction)
2. [DOM Manipulation Basics](#dom-manipulation-basics)
3. [Changing Styles Dynamically](#changing-styles-dynamically)
   - [Color](#color)
   - [Height and Width](#height-and-width)
   - [Font Size and Font Weight](#font-size-and-font-weight)
   - [Margin](#margin)
   - [Padding](#padding)
4. [Conclusion](#conclusion)

## Introduction

DOM manipulation allows developers to interact with and modify the content and structure of web pages in real time. Using JavaScript, you can dynamically change the appearance and behavior of HTML elements to enhance user experiences.

## DOM Manipulation Basics

DOM manipulation involves selecting elements and then changing their properties or styles using JavaScript. This can be achieved through various methods, such as `getElementById`, `querySelector`, and `getElementsByClassName`, to select elements and then use properties like `style` to alter their appearance.

## Changing Styles Dynamically



### Color Example
You can change the color of an element using JavaScript by modifying the `style.color` property.
```javascript
    let container = document.getElementById('container');
    let childContainer = document.getElementById('child-container');
    container.style.background = "lightgreen";

    childContainer.style.background = "yellow";
    childContainer.style.margin = "20px";
    childContainer.style.padding = "10px";
    childContainer.style.fontSize = "18px";
    childContainer.style.fontWeight = "bold";
    childContainer.style.height = "200px";
    childContainer.style.width = "300px";
