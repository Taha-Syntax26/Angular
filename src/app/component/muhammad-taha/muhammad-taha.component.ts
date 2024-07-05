import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-muhammad-taha',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl:  './muhammad-taha.component.html',
  styleUrl: './muhammad-taha.component.css'
})
export class MuhammadTahaComponent {
   name = "Muhammad Taha";
   salary = "1500";
   designation = "Software Developer";
   isDisabled = true;
   inputVal = "test";
   users = [
         {name:"Abdullah Kazim", isSingle:true, salary:1000},
         {name:"Ebaad", isSingle:true, salary:21000},
         {name:"Samad", isSingle:true, salary:61000},
         {name:"Taha", isSingle:true, salary:91000}
   ]
   
   
  //  onChange(){
  //   console.log('Called Function');
  //  }


  // onChange(e:Event){
  //   const value = (e.target as HTMLInputElement).value;
  //   console.log(value);
  // }


  onChange(e:Event){
    const value = (e.target as HTMLInputElement).value;
    this.inputVal = "test";
  }
}
