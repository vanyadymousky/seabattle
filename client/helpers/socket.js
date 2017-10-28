import io from 'socket.io-client';
import { Observable } from 'rxjs';

export const ALL_USERS = 'all-users';

const socket = io('ws://localhost:3002/');

export const socketConnect$ = Observable.fromEvent(socket, 'connect');

export const socketDisconnect$ = Observable.fromEvent(socket, 'disconnect');

export const socketUserAdded$ = Observable.fromEvent(socket, ALL_USERS);
