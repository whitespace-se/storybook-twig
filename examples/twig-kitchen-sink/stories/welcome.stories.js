import './welcome.css';
import Welcome from './welcome.twig';

export default {
  title: 'Welcome',
};

export const WelcomeStory = () => Welcome();
