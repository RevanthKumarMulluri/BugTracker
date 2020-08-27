import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginRegisterComponent } from './components/layouts/login-register/login-register.component';
import { ToolbarComponent } from './components/layouts/toolbar/toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { BugcreateComponent } from './components/bugcreate/bugcreate.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DatalistComponent } from './components/datalist/datalist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginRegisterComponent,
    ToolbarComponent,
    SearchComponent,
    BugcreateComponent,
    ProjectsComponent,
    DatatableComponent,
    DatalistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'BugTracker'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
