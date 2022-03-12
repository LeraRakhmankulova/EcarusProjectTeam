import { makeAutoObservable } from 'mobx';
import {ModalStore} from './modalStore'
import {AuthenticationStore} from "./authenticationStore";

class MainStore {
    modalStore: ModalStore;
    authenticationStore: AuthenticationStore;

    constructor() {
        this.modalStore = new ModalStore(this);
        this.authenticationStore = new AuthenticationStore(this);
        makeAutoObservable(this);
    }
}

const mainStore = new MainStore();

export default mainStore;
export { MainStore };
