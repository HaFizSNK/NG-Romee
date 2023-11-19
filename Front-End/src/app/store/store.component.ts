import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../shared/services/store.service';





@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
 constructor(
  private readonly StoreService:StoreService
 ){}
 ngOnInit(){
  debugger
   this.getDataFromStore();
   }
  public getDataFromStore(){
    debugger
    this.StoreService.getData().subscribe(
      (data:any)=>{
        console.log(data)
    
    }
    )
}
}