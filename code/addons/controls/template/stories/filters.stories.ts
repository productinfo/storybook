import globalThis from 'global';
import { PartialStoryFn, StoryContext } from '@storybook/types';

export default {
  component: null,
  decorators: [
    (storyFn: PartialStoryFn, context: StoryContext) =>
      storyFn({ component: globalThis.Components.Pre, args: { object: context.args } }),
  ],
  args: {
    helloWorld: 1,
    helloPlanet: 1,
    byeWorld: 1,
  },
};

export const IncludeList = {
  parameters: {
    controls: {
      include: ['helloWorld'],
    },
  },
};

export const IncludeRegex = {
  parameters: {
    controls: {
      include: /hello*/,
    },
  },
};

export const ExcludeList = {
  parameters: {
    controls: {
      exclude: ['helloPlanet', 'helloWorld'],
    },
  },
};

export const ExcludeRegex = {
  parameters: {
    controls: {
      exclude: /hello*/,
    },
  },
};
