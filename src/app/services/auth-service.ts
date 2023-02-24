import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({providedIn:'root'})

export class AuthService{

    constructor(private http: HttpClient) {}

    public login (email: string, password: string){
        console.log('mi loggo');
        return of(true)
    }
    
}