import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { AngularMaterialModule } from "./material-module";
import { AppRoutingModule } from "./app-routing.module";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
