import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  
  <!-- Interpolation and expressions -->
  
  <!-- Displaying values with interpolation -->
  <h3> Customer name is {{name}}. </h3> 
  <h3> {{"welcome " + name}}</h3>
  <h3>{{name.length}}</h3>
  <h3>{{name.toUpperCase()}}</h3>
  <h3>{{greetUser()}}</h3>

  <!-- Resolving expressions with interpolation [ The text between the braces is a template 
  expression that Angular first evaluates and then converts to a string.] -->
  <p>The sum of 1 + 1 is {{1 + 1}}.</p>

  
  <hr>
  <!-- Piples -->
  <h2>{{ name | lowercase}}</h2>
  <h2>{{ name | uppercase}}</h2>
  <h2>{{ message | titlecase}}</h2>
  <h2>{{ name | slice:3:5}}</h2>
  <h2>{{ person | json }}</h2>
  
  <h2>{{ 3.678 | number: '1.2-3'}} </h2>
  <h2>{{ 3.678 | number: '3.4-5'}} </h2>
  <h2>{{ 3.678 | number: '3.1-2'}} </h2>

  <h2>{{ 0.25| percent }} </h2>
  <h2>{{ 0.25| currency }} </h2>
  <h2>{{ 0.25| currency: 'INR' }} </h2>

  <h2>{{ date  }} </h2>
  <h2>{{ date | date: 'short' }} </h2>
  <h2>{{ date | date: 'medium' }} </h2>
  <h2>{{ date | date: 'shortDate' }} </h2>
  <h2>{{ date | date: 'shortTime' }} </h2>

  <hr>

<!-- Property Binding --><br>
<input [id]="myId" type="text" value="Shahid">
<input [disabled]="isDisable" [id]="myId" type="text" value="Wahid">

 <hr>
 <!-- Class binding -->

 <h3 class="text-success"> Shahid Ltd. </h3> 
 <h3 [class]="successClass"> Shahid Ltd. </h3> 
 <h3 [class.text-danger]="hasError"> Shahid Ltd. </h3> 
 <h3 [ngClass]="messageClasses"> Shahid Ltd. </h3> 
 
 <hr>
 <! style binding -->

 <h2 [style.color]="'orange'">Style Binding1</h2>
 <h2 [style.color]="hasError? 'red' : 'green'">Style Binding</h2>
 <h2 [style.color]="highlightColor">Style Binding2</h2>
 <h2 [ngStyle]="titleStyles">Style Binding2</h2>

 <hr>
 <!-- Event Binding--><br><br>
 <button (click)="onClick($event)"> Wahid Ltd.</button>
 <button (click)="greeting='Welcome to JMI'"> Wahid Ltd.</button>
 {{greeting}}

 <hr>
 <!-- Two way binding-->
 <input id= "hey" [(ngModel)]= "name" type="text">
  {{name}}


  `,


  styles: [`
  
  .text-success{
    color: green;
  }
  
  .text-danger{
    color: red;
  }
  
  .text-special{
    font-style: italic;
  }
  `]
})




export class AppComponent {
  name="shahid";
  public message: string ="Welcome to JMI";
  public myId = "testId";
  public isDisable=false;
  public successClass = "text-success";
  public hasError = false;
  public highlightColor = "orange";
  public greeting="";

  public isSpecial = true;
  public messageClasses = {

    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public person={

    firstName: "Shahid",
    lastName: "Khan"
  }

  public titleStyles = {
    color: "red",
    fontStyle: "italic"
  }

public date = new Date();

greetUser(){
  return "Hello  " + this.name;
}

onClick(event){
  console.log(event);
  this.greeting=event.type;
}

}
