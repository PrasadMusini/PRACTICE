import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-website',
  templateUrl: './pizza-website.component.html',
  styleUrls: ['./pizza-website.component.css']
})
export class PizzaWebsiteComponent {

  small :number=0
  cap:number=0
  spl:number=0
  num!:number;
  msg='';


  formvalid(val:string)
  {
    for(let i=0; i<val.length; i++)
    {
      if(val.charAt(i)>='a' && val.charAt(i)<='z')
      {
        this.small++;
      }
      else if(val.charAt(i)>='A' && val.charAt(i)<='Z'){
        this.cap++;
      }
      else {
        this.spl++;
      }
    }

    if(val.length < 8)
    {
      this.msg = "Must contain 8 elements"
    }
    else if(this.small > 0 && this.cap > 0 && this.spl > 0)
    {
      this.msg="valid password"
    }
    
    else{
      this.msg="should contain one small cap spl element"
    }
  }

}
