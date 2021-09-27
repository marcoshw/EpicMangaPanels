import { Component, OnInit } from '@angular/core';
import {SupabaseService} from "./services/supabase.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomPanel: any;

  constructor(private readonly supabase: SupabaseService){

  }
  async ngOnInit(){


    this.randomPanel =  await this.supabase.profile()
    console.log(this.randomPanel)


  }

  randomize(){
    window.location.reload();
  }
}
