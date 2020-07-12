import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { BenefitService } from "src/services/benefitService";

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BenefitService],
  bootstrap: [AppComponent],
})
export class AppModule {}
