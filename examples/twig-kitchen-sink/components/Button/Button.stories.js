import './Button.css';
import Button from './Button.twig';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
};

export const Primary = Button.bind({});

Primary.args = {
  primary: true,
  label: 'Primary',
};
