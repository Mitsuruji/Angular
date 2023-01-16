import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { HomeAccountComponent } from './exoAccounts/home-account/home-account.component';
import { ListAccountsComponent } from './exoAccounts/list-accounts/list-accounts.component';
import { AddAccountComponent } from './exoAccounts/add-account/add-account.component';
import { DirectivesComponent } from './directives/directives.component';
import { WordSimHomeComponent } from './exoNgStyleWord/word-sim-home/word-sim-home.component';
import { ListServerComponent } from './exoListServers/list-server/list-server.component';
import { DirListHoverDirective } from './dir-list-hover.directive';
import { ShortTxtPipe } from './Pipes/short-txt.pipe';
import { NoImageAvatarPipe } from './Pipes/no-image-avatar.pipe';
import { IoServStatusPipe } from './Pipes/io-serv-status.pipe';
import { HiredListComponent } from './hired-list/hired-list.component';
import { HomeComponent } from './home/home.component';
import { ORSYS_ROUTING } from './app.routing';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, CvComponent, ListComponent, DetailsComponent, ItemComponent, HomeAccountComponent, ListAccountsComponent, AddAccountComponent, DirectivesComponent, WordSimHomeComponent, ListServerComponent, DirListHoverDirective, ShortTxtPipe, NoImageAvatarPipe, IoServStatusPipe, HiredListComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, ORSYS_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
