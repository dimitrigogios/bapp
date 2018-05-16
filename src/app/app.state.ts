import { User } from './models/user.model';
/*
 *  Defining our state datatype
 */
export interface AppState {
    loaded: boolean,
    loading: boolean,
    user: User
}