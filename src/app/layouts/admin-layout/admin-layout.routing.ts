import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { FileInfoComponent } from 'src/app/pages/tables/file-info/file-info.component';
import {ConstructionComponent} from "../../pages/construction/construction.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'create',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'file/:fileName',         component: FileInfoComponent },
    {path:'construction', component: ConstructionComponent},

];
