import { AxiosResponse } from "axios";

export type OnSuccessCallback = () => void;
export type OnErrorCallback = (message: string) => void;

export type ApiResultProps = {
  res: Response | AxiosResponse;
  onSuccessCallback: OnSuccessCallback;
  onErrorCallback: OnErrorCallback;
};

export class ApiResult {
  props: ApiResultProps;

  constructor(res: Response | AxiosResponse) {
    this.props = {
      res,
      onErrorCallback: () => {},
      onSuccessCallback: () => {},
    };
  }

  onSuccess(callback: OnSuccessCallback) {
    this.props.onSuccessCallback = callback;
    return this;
  }

  onError(callback: OnErrorCallback) {
    this.props.onErrorCallback = callback;
    return this;
  }

  apply() {
    switch (this.props.res.status) {
      case 201:
        this.props.onSuccessCallback();
        break;
      case 403:
        this.props.onErrorCallback("El email ya está en uso");
        break;
      default:
        this.props.onErrorCallback("Hubo un problema");
    }

    return this;
  }
}
