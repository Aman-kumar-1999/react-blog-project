import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";


export class AuthService {

    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userData = await this.account.create(ID.unique(), email, password, name);
            if(userData){
                return this.login({email,password})
            }
            else{
                return userData;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {

            return await this.account.createEmailSession(email, password);
            
        } catch (error) {
            new error;
        }
    }

    async loginJWT({email,password}){
        try {

            return await this.account.createJWT({email,password});
            
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            // console.log("currentUser ::: ",error);
            // throw error;
            
        }
    }

    async logout(){
        try {
            this.account.deleteSessions();
            
        } catch (error) {
            console.log("Logout :::: ",error);
            throw error;
        }
    }


}

const authService = new AuthService();

export default authService;

