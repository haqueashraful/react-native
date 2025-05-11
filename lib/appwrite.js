import { Client, Account, Avatars, Databases } from 'appwrite';
import { API_ENDPOINT, API_PROJECT_ID, API_PLATFORM } from '@env';


export const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(API_PROJECT_ID)
    // .setPlatform(API_PLATFORM);


export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);