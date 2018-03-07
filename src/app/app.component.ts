import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  textDir: string = "ltr";

  constructor(
    public translate: TranslateService,
  ){
    translate.setDefaultLang('en');
    translate.use('en');

    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>{
     if(event.lang == 'ar')
     {
       this.textDir = 'rtl';
     }
     else
     {
       this.textDir = 'ltr';
     }
    });
  }

}
