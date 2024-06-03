import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListUsersComponent } from './users/components/list-users/list-users.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { authGuard } from './shared/guards/auth.guard';

// Configure your routes here
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:userId', component: UserDetailsComponent }, // Url parameter is userId
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  {
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
