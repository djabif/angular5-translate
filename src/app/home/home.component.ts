import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';
import { LanguageModel } from './language.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  languageSelected : string = 'en';
  languages: Array<LanguageModel> = new Array<LanguageModel>();

  constructor(
    public languageService : LanguageService,
    public translateService: TranslateService
  ) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
  }

  valueChange(event){
    let newLanguages = event.value;
    this.translateService.use(newLanguages);
  }


}
