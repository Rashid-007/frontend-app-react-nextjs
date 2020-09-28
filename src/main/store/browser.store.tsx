import { observable, action } from "mobx";
import { Store } from "../utils/store/store.class";

interface IWindow {
  width: number;
  height: number;
}

class BrowserStore extends Store {
  @observable
  public window: IWindow;

  constructor() {
    super();
    this.window = {
        width:123,
        height:123
    }
    this.setWindow = this.setWindow.bind(this);

    this.setWindow();
    this.onWindowResize();
  }

  @action
  public setWindow() {
    if (typeof window === `undefined`) {
      this.window = {
        width: undefined,
        height: undefined,
      };

      return;
    }

    this.window = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  private onWindowResize() {
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", this.setWindow);
    }
  }
}

export default new BrowserStore();
export { BrowserStore };
