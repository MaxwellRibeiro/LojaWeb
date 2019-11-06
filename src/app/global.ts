import { Injectable } from '@angular/core';

@Injectable()
export class Global {
    private REST_API_SERVER : string = "http://localhost:300";
    private REST_API_LOCAL  : string = "https://localhost:44376";

    public REST_API : string = this.REST_API_LOCAL;
    public CONFIGHEADERS = { headers: { 'Content-Type': 'application/json'} };
}
