import { makeAutoObservable } from 'mobx';
import {MainStore} from "./mainStore";

export class AuthenticationStore {
    authentication = false;

    constructor(mainStore: MainStore) {
        this.authentication = false;
        makeAutoObservable(this);
    }
    setAuthentication = (value: boolean) => {
        this.authentication = value;
    };
}
