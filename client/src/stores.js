import { writable } from "svelte/store";

export const loggedIn = writable(null)
export const authToken = writable('')
export const UserId = writable('')
export const UserFavorites = writable([''])