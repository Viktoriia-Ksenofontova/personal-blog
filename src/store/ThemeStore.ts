import { makeObservable, observable, action } from 'mobx';

export default class ThemeStore {
  theme: 'dark' | 'light' = 'light';

  constructor() {
    makeObservable(this, {
      theme: observable,
      setTheme: action,
    });
  }

  setTheme(newTheme: 'dark' | 'light') {
    this.theme = newTheme;
  }
}
