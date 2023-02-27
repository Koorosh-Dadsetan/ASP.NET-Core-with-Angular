import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MyTestComponent } from './my-test/my-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateComponent } from './home/create/create.component';
import { DeleteComponent } from './home/delete/delete.component';
import { EditComponent } from './home/edit/edit.component';
import { DetailsComponent } from './home/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MyTestComponent,
    PageNotFoundComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'my-test', component: MyTestComponent },
      { path: 'employees/create', component: CreateComponent },
      { path: 'employees/edit/:id', component: EditComponent },
      { path: 'employees/delete/:id', component: DeleteComponent },
      { path: 'employees/details/:id', component: DetailsComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
