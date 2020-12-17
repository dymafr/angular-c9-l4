import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CocktailListComponent } from "./cocktail-container/cocktail-list/cocktail-list.component";
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { SelectedDirective } from "./shared/selected/selected.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
