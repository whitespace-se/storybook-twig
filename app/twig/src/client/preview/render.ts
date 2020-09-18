import { document, Node } from 'global';
import dedent from 'ts-dedent';
import { RenderContext } from './types';

const rootElement = document.getElementById('root');

export default function renderMain({
  storyFn,
  kind,
  name,
  showMain,
  showError,
  forceRender,
}: RenderContext) {
  const element = storyFn();

  showMain();
  rootElement.innerHTML = element;
}
