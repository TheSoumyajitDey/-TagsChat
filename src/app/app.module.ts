import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MentionModule } from "angular-mentions";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatbarComponent } from "./chatbar/chatbar.component";
import { PopupComponent } from "./popup/popup.component";

@NgModule({
  declarations: [AppComponent, ChatbarComponent, PopupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MentionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
