import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxStaticLoaderModule } from 'ngx-static-loader';
import { PanelComponent } from './components/panel/panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CodeInstallComponent } from './components/code-install/code-install.component';
import { CodeJsonComponent } from './components/code-json/code-json.component';
import { CodeAddComponent } from './components/code-add/code-add.component';
import { CodeUsageTextComponent } from './components/code-usage-text/code-usage-text.component';
import { CodeUsageImageComponent } from './components/code-usage-image/code-usage-image.component';
import { CodeUsageMarkupComponent } from './components/code-usage-markup/code-usage-markup.component';
import { CodeUsageLinkComponent } from './components/code-usage-link/code-usage-link.component';
import { CodeUsageComponent } from './components/code-usage/code-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    NavbarComponent,
    CodeInstallComponent,
    CodeJsonComponent,
    CodeAddComponent,
    CodeUsageTextComponent,
    CodeUsageImageComponent,
    CodeUsageMarkupComponent,
    CodeUsageLinkComponent,
    CodeUsageComponent
  ],
  imports: [
    BrowserModule,
    NgxStaticLoaderModule.forRoot({path: 'assets/static/static-content.json'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
