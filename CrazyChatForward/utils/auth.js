import Cookies from "js-cookie";

const idKey = "userId";
const tokenKey = "userToken";
const nickKey = "userNick";
const avatarKey = "userAvatar";

export function setUser(id, token, nick, avatar) {
    Cookies.set(idKey, id);
    Cookies.set(tokenKey, token);
    Cookies.set(nickKey, nick);
    Cookies.set(avatarKey, avatar);
}

export function getUser() {
    return {
        id: Cookies.get(idKey),
        token: Cookies.get(tokenKey),
        nick: Cookies.get(nickKey),
        avatar: Cookies.get(avatarKey),
    };
}

export function removeUser() {
    Cookies.remove(idKey);
    Cookies.remove(tokenKey);
    Cookies.remove(nickKey);
    Cookies.remove(avatarKey);
}




