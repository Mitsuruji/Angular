
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeAccountComponent } from './exoAccounts/home-account/home-account.component';
import { WordSimHomeComponent } from './exoNgStyleWord/word-sim-home/word-sim-home.component';
import { HomeComponent } from './home/home.component';
import { ListServerComponent } from './exoListServers/list-server/list-server.component';


const myRoutes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'cv', component : CvComponent},
    {path : 'account', component : HomeAccountComponent},
    {path : 'word', component : WordSimHomeComponent},
    {path : 'servers', component : ListServerComponent},

];
export const ORSYS_ROUTING = RouterModule.forRoot(myRoutes);