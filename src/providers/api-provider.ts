import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
public API_URL="https://xfppurnodh.execute-api.ap-southeast-1.amazonaws.com/Dev";
constructor(private http: Http){


}

apicall(endpoint,type,data){
    return new Promise(resolve=>{
    console.log("apicall");
    if(endpoint === "trips" && type ==="get"){
        
    this.http.get(this.API_URL+"/trips?userid="+data).map(res => res.json()).subscribe((data) =>{
        console.log(data);
         console.log(data.status);
         //console.log(data._body);
         if(data){
           resolve(data);
         }else{
            resolve(null);
         }
        // console.log(this.tripdata);
        //console.log(data.data); // data received by server
       // console.log(data.headers);
       
    },
    error =>{
        console.log(error);
       // console.log(error.error); // error message as string
       // console.log(error.headers);
       return null;
    });

    }else if(endpoint === "trips" && type ==="post"){
          this.http.post(this.API_URL+"/trips",data).map(res => res.json()).subscribe((data) =>{
               if(data){
           resolve(data);
         }else{
            resolve(null);
         }

          });


    }else if(endpoint === "bills" && type ==="get"){

    }else if(endpoint === "bills" && type ==="post"){

    }


});

}
}
