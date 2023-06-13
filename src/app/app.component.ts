import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userdata:any;


  constructor(private myrouter:Router){}
  
  title = 'ecommerce';

  ngOnInit(){
    this.checkuserlogined();
  }


  checkuserlogined(){
    this.userdata = JSON.parse(localStorage.getItem("userData") || "");
    console.log(this.userdata);
    if(this.userdata !== null){
      this.myrouter.navigate(["/home"]);
    }
    else{
      this.myrouter.navigate(["/about"]);
    }
  }
  
}
