import NewsPublisher from './NewsPublisher';
import User from './User';

const newsPublisher = new NewsPublisher();
const userAlice = new User('Alice');
const userBob = new User('Bob');

newsPublisher.addSubscriber(userAlice);
newsPublisher.addSubscriber(userBob);

// Simulating article publication
newsPublisher.publishArticle('Breaking News: Observer Pattern Simplified!');
newsPublisher.publishArticle('New Trends in JavaScript Development!');
