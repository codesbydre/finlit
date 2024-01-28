# FinLit: Financial Literacy and News Application

## About

[FinLit](https://finlit-react.onrender.com/) is a financial literacy platform designed to improve users' financial knowledge through up-to-date news, quizzes, and informative content. Our goal is to empower individuals to make better financial decisions.

## Features

**Current News:** Stay informed with the latest headlines, ensuring you never miss a beat in the fast-paced world of finance.
**Interactive Quizzes:** Test and improve your financial knowledge through a variety of quizzes tailored to different expertise levels.

## User Flow

1. Visit the homepage.
2. Browse financial news or log in/sign up.
3. Take quizzes to test your knowledge.
4. Review quiz results for self-assessment.
5. Log out when done.

## Tests

- **Backend:**

```terminal
cd back-end
jest
```

- **Frontend:**

```terminal
cd front-end
npm test
```

## API

Our API is a robust interface that integrates with [NewsAPI](https://newsapi.org/) to deliver the latest news. It curates content from various trusted sources, ensuring users have access to a wide range of articles.

Additionally, we've crafted a series of educational quizzes designed to challenge and enhance users' financial acumen. Each quiz is structured to cater to different learning stages, from beginners to advanced users, making learning about finance more engaging and effective.

## Technology Stack

- **Frontend:** React (Create React App), Bootstrap for styling
- **Backend:** Node.js, Express.js, PostgreSQL with ElephantSQL for database hosting
- **Testing:** Jest for unit tests, React Testing Library for component tests
- **Deployment:** [Render](https://render.com/) for hosting both frontend and backend services

## Screenshots

- **Homepage**

![FinLit Homepage](https://i.ibb.co/vDb762R/homepage-finlit.png)

- **Quizzes**

![Quizzes page](https://i.ibb.co/k1W4RGN/quizzes-finlit.png)
