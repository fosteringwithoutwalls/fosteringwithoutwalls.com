import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonateComponent } from './components/donate/donate.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MissionComponent } from './components/mission/mission.component';
import { BoardMembersComponent } from './components/board-members/board-members.component';
import { GrantFormComponent } from './components/grant-form/grant-form.component';
import { GrantComponent } from './components/grant/grant.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DfComponent } from './components/df/df.component'

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: 'home', component: MainComponent},
 {path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'donate', component: DonateComponent},
{path: 'grant', component: GrantComponent}

];

@NgModule({
  declarations: [
    MissionComponent,
    BoardMembersComponent,
    GrantFormComponent,
    GrantComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    ContactFormComponent,
    DonateComponent,
    DfComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
