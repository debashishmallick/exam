import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Hyperlinks Text Mark Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    answer: "<a>",
  },
  {
    id: 3,
    question: "Which tag is used for inserting an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>",
  },
  {
    id: 4,
    question: "Which tag is used to create a paragraph?",
    options: ["<p>", "<para>", "<text>", "<pg>"],
    answer: "<p>",
  },
  {
    id: 5,
    question: "Which tag is used for headings?",
    options: ["<h1> to <h6>", "<head>", "<heading>", "<title>"],
    answer: "<h1> to <h6>",
  },
  {
    id: 6,
    question: "Which tag is used to create a line break?",
    options: ["<br>", "<break>", "<lb>", "<line>"],
    answer: "<br>",
  },
  {
    id: 7,
    question: "Which tag is used to create a table?",
    options: ["<table>", "<tbl>", "<tab>", "<t>"],
    answer: "<table>",
  },
  {
    id: 8,
    question: "Which tag is used for table rows?",
    options: ["<tr>", "<td>", "<th>", "<row>"],
    answer: "<tr>",
  },
  {
    id: 9,
    question: "Which tag is used for table data?",
    options: ["<td>", "<tr>", "<th>", "<data>"],
    answer: "<td>",
  },
  {
    id: 10,
    question: "Which tag is used for table header?",
    options: ["<th>", "<td>", "<tr>", "<head>"],
    answer: "<th>",
  },
  {
    id: 11,
    question: "Which tag is used to create a form?",
    options: ["<form>", "<input>", "<fieldset>", "<label>"],
    answer: "<form>",
  },
  {
    id: 12,
    question: "Which tag is used for input field?",
    options: ["<input>", "<form>", "<textarea>", "<select>"],
    answer: "<input>",
  },
  {
    id: 13,
    question: "Which attribute is used for image path?",
    options: ["src", "href", "alt", "link"],
    answer: "src",
  },
  {
    id: 14,
    question: "Which tag is used for unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    id: 15,
    question: "Which tag is used for ordered list?",
    options: ["<ol>", "<ul>", "<li>", "<order>"],
    answer: "<ol>",
  },
  {
    id: 16,
    question: "Which tag is used for list item?",
    options: ["<li>", "<ul>", "<ol>", "<item>"],
    answer: "<li>",
  },
  {
    id: 17,
    question: "Which tag is used to define title?",
    options: ["<title>", "<head>", "<meta>", "<h1>"],
    answer: "<title>",
  },
  {
    id: 18,
    question: "Which tag is used to define body?",
    options: ["<body>", "<head>", "<html>", "<main>"],
    answer: "<body>",
  },
  {
    id: 19,
    question: "Which tag is root of HTML?",
    options: ["<html>", "<body>", "<head>", "<root>"],
    answer: "<html>",
  },
  {
    id: 20,
    question: "Which tag is used for bold text?",
    options: ["<b>", "<strong>", "<bold>", "<text>"],
    answer: "<b>",
  },
  {
    id: 21,
    question: "Which tag is used for italic text?",
    options: ["<i>", "<italic>", "<em>", "<it>"],
    answer: "<i>",
  },
  {
    id: 22,
    question: "Which tag is used for underline?",
    options: ["<u>", "<underline>", "<ul>", "<line>"],
    answer: "<u>",
  },
  {
    id: 23,
    question: "Which tag is used for audio?",
    options: ["<audio>", "<sound>", "<mp3>", "<media>"],
    answer: "<audio>",
  },
  {
    id: 24,
    question: "Which tag is used for video?",
    options: ["<video>", "<media>", "<movie>", "<vid>"],
    answer: "<video>",
  },
  {
    id: 25,
    question: "Which attribute is used for link?",
    options: ["href", "src", "alt", "link"],
    answer: "href",
  },
  {
    id: 26,
    question: "Which tag is used for division?",
    options: ["<div>", "<section>", "<span>", "<box>"],
    answer: "<div>",
  },
  {
    id: 27,
    question: "Which tag is inline element?",
    options: ["<span>", "<div>", "<p>", "<section>"],
    answer: "<span>",
  },
  {
    id: 28,
    question: "Which tag is semantic?",
    options: ["<article>", "<div>", "<span>", "<b>"],
    answer: "<article>",
  },
  {
    id: 29,
    question: "Which tag defines navigation?",
    options: ["<nav>", "<menu>", "<link>", "<header>"],
    answer: "<nav>",
  },
  {
    id: 30,
    question: "Which tag defines footer?",
    options: ["<footer>", "<bottom>", "<end>", "<section>"],
    answer: "<footer>",
  },
  {
    id: 31,
    question: "Which tag defines header?",
    options: ["<header>", "<head>", "<top>", "<section>"],
    answer: "<header>",
  },
  {
    id: 32,
    question: "Which tag defines section?",
    options: ["<section>", "<div>", "<span>", "<part>"],
    answer: "<section>",
  },
  {
    id: 33,
    question: "Which tag defines article?",
    options: ["<article>", "<section>", "<div>", "<blog>"],
    answer: "<article>",
  },
  {
    id: 34,
    question: "Which tag is used for dropdown?",
    options: ["<select>", "<input>", "<option>", "<dropdown>"],
    answer: "<select>",
  },
  {
    id: 35,
    question: "Which tag is used for textarea?",
    options: ["<textarea>", "<input>", "<text>", "<area>"],
    answer: "<textarea>",
  },
  {
    id: 36,
    question: "Which tag is used for button?",
    options: ["<button>", "<btn>", "<input>", "<click>"],
    answer: "<button>",
  },
  {
    id: 37,
    question: "Which tag defines metadata?",
    options: ["<meta>", "<data>", "<info>", "<head>"],
    answer: "<meta>",
  },
  {
    id: 38,
    question: "Which tag links CSS?",
    options: ["<link>", "<style>", "<css>", "<script>"],
    answer: "<link>",
  },
  {
    id: 39,
    question: "Which tag defines style?",
    options: ["<style>", "<css>", "<design>", "<link>"],
    answer: "<style>",
  },
  {
    id: 40,
    question: "Which tag defines script?",
    options: ["<script>", "<js>", "<code>", "<program>"],
    answer: "<script>",
  },
  {
    id: 41,
    question: "Which attribute is for alternate text?",
    options: ["alt", "src", "title", "href"],
    answer: "alt",
  },
  {
    id: 42,
    question: "Which tag defines iframe?",
    options: ["<iframe>", "<frame>", "<embed>", "<window>"],
    answer: "<iframe>",
  },
  {
    id: 43,
    question: "Which tag defines label?",
    options: ["<label>", "<form>", "<input>", "<text>"],
    answer: "<label>",
  },
  {
    id: 44,
    question: "Which tag defines fieldset?",
    options: ["<fieldset>", "<form>", "<group>", "<input>"],
    answer: "<fieldset>",
  },
  {
    id: 45,
    question: "Which tag defines legend?",
    options: ["<legend>", "<title>", "<label>", "<caption>"],
    answer: "<legend>",
  },
  {
    id: 46,
    question: "Which tag defines progress?",
    options: ["<progress>", "<bar>", "<meter>", "<load>"],
    answer: "<progress>",
  },
  {
    id: 47,
    question: "Which tag defines meter?",
    options: ["<meter>", "<progress>", "<bar>", "<measure>"],
    answer: "<meter>",
  },
  {
    id: 48,
    question: "Which tag defines details?",
    options: ["<details>", "<summary>", "<info>", "<more>"],
    answer: "<details>",
  },
  {
    id: 49,
    question: "Which tag defines summary?",
    options: ["<summary>", "<details>", "<info>", "<title>"],
    answer: "<summary>",
  },
  {
    id: 50,
    question: "Which tag defines canvas?",
    options: ["<canvas>", "<draw>", "<graphics>", "<paint>"],
    answer: "<canvas>",
  },
];