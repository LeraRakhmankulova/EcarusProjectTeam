import {makeAutoObservable, observable} from 'mobx';
import {MainStore} from "./mainStore";

interface Props{
    token: string,
    id?: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    login: string,
    photo_url?: string,
    firstname?: string,
    lastname?: string,
    email: string,
    role?: object,
    balance? : number
}

export class AuthenticationStore {
    user: Props;
    //
    // setUser = (user: Props) => {
    //     const {token, username, email} = user;
    //     this.user.token = token;
    //     this.user.username = username;
    //     this.user.email = email;
    // }
    authentication = false;

    constructor(mainStore: MainStore) {
        this.user = {
            login: '',
            email: '',
            token: '',
            balance: 0
        }
        this.authentication = false;
        makeAutoObservable(this, {
            user: observable
        })
    }
    setAuthentication = (value: boolean, user: Props) => {
        const {token, login, email} = user;
        this.user.token = token;
        this.user.login = login;
        this.user.email = email;
        this.authentication = value;
    };
    getToken = () => {
        return this.user.token;
    }

    isSign = () => {
        return !!this.user.token;
    }

    getUser = () => {
        return this.user;
    }
}
