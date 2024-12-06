import { generate } from '@icona/generator';
generate({
  config: {
    svg: {
      path: 'svg',
      svgoConfig: {},
    },
    png: {
      active: true,
      path: 'png',
    },
  },
});
