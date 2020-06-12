import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormlyFieldTypeahead } from './types/typeahead.type.component';

@NgModule({
  declarations: [
    AppComponent, FormlyFieldTypeahead
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    NgSelectModule,
    FormlyModule.forRoot({
      types: [
        { name: 'typeahead', component: FormlyFieldTypeahead }
      ]
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
