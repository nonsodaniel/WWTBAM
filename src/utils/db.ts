import { shuffleArray } from "./helpers";

export const moneyList = [
  { id: 17, amount: 20000000 },
  { id: 16, amount: 10000000 },
  { id: 15, amount: 5000000 },
  { id: 14, amount: 3000000 },
  { id: 13, amount: 1500000 },
  { id: 12, amount: 750000 },
  { id: 11, amount: 500000 },
  { id: 10, amount: 200000 },
  { id: 9, amount: 100000 },
  { id: 8, amount: 50000 },
  { id: 7, amount: 24000 },
  { id: 6, amount: 1200 },
  { id: 5, amount: 800 },
  { id: 4, amount: 400 },
  { id: 3, amount: 300 },
  { id: 2, amount: 200 },
  { id: 1, amount: 100 },
];

const questionData = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "What is the capital of Country 1?",
    answers: [
      { text: "City A", correct: true },
      { text: "City B", correct: false },
      { text: "City C", correct: false },
      { text: "City D", correct: false },
    ],
  },
  {
    id: 5,
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    id: 6,
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false },
    ],
  },
  // Add more questions here...
  {
    id: 7,
    question: "What is the capital of Country 30?",
    answers: [
      { text: "City A", correct: true },
      { text: "City B", correct: false },
      { text: "City C", correct: false },
      { text: "City D", correct: false },
    ],
  },
];

export const questionList = shuffleArray(questionData);
