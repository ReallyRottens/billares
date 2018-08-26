import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Componentes */
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { NewGameComponent } from './new-game/new-game.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoardComponent } from './board/board.component';

/* Servicios*/
import {GameService } from './players/game.service';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'new-game', component: NewGameComponent}, 
  {path: 'players', component: PlayersComponent},
  {path: 'home', component: HomeComponent}, 
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    NewGameComponent,
    HeaderComponent,
    FooterComponent,
    BoardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
