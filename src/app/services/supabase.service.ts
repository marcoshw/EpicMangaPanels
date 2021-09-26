import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import {environment} from "../../environments/environment";
import { from, Observable } from 'rxjs';
import { map, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase;
  topNumber:any  = 1

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supbaseKey);
   }


   async profile() {
    let { data , count } = await this.supabase
    .from('Panels')
    .select(`id, description, url_panel,
    Mangas (
      name,
      year_publication,
      url_cover
    )`, { count: 'exact' })

    this.topNumber = count

    let random = Math.floor(Math.random()*(this.topNumber-1+1)+1);

    console.log(random)

    let result = data![random-1]


    return  result

    // return this.supabase
    //   .from('Mangas')
    //   .select(`name, url_cover`)
    //   .eq('id', 1)
    //   .single();
  }

}
