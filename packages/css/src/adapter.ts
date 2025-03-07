import type { Adapter } from './types';

export const mockAdapter: Adapter = {
  appendCss: () => {},
  registerClassName: () => {},
  onEndFileScope: () => {},
};

let adapter: Adapter = mockAdapter;

let hasConfiguredAdapter = false;

export const setAdapterIfNotSet = (newAdapter: Adapter) => {
  if (!hasConfiguredAdapter) {
    setAdapter(newAdapter);
  }
};

export const setAdapter = (newAdapter: Adapter) => {
  hasConfiguredAdapter = true;
  adapter = newAdapter;
};

export const appendCss: Adapter['appendCss'] = (...props) => {
  return adapter.appendCss(...props);
};

export const registerClassName: Adapter['registerClassName'] = (...props) => {
  return adapter.registerClassName(...props);
};

export const onEndFileScope: Adapter['onEndFileScope'] = (...props) => {
  return adapter.onEndFileScope(...props);
};
