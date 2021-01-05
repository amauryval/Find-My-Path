import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { ViewcontrolerComponent } from './components/viewcontroler/viewcontroler.component';
import { InputParametersComponent } from './components/inputparameters/inputparameters.component';
import { FooterComponent } from './components/footer/footer.component';

import { MapViewBuilderService } from './services/mapviewbuider.service';
import { MapPathBuilderService } from './services/mappathbuilder.service';
import { PathsHandlerService } from './services/pathshandler.service';

import { NodeshandlerComponent } from './components/nodeshandler/nodeshandler.component';
import { nodesControlersComponent } from './components/nodescontrolers/nodescontrolers.component';
import { NodesstatisticsComponent } from './components/nodesstatistics/nodesstatistics.component';
// import { NodestopographyComponent } from './components/nodestopography/nodestopography.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    ViewcontrolerComponent,
    NodeshandlerComponent,
    InputParametersComponent,
    nodesControlersComponent,
    NodesstatisticsComponent
    // NodestopographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MapViewBuilderService,
    PathsHandlerService,
    MapPathBuilderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
