import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingService } from './custom-preloading.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'employees',
    data: {preload: true, delay: 1000 },
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) 
  },
  { 
    path: 'todo',
    data: {preload: true, delay: 2000 },
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) 
  },
  { 
    path: 'medicine',
    data: {preload: true, delay: 3000 },
    loadChildren: () => import('./medicine/medicine.module').then(m => m.MedicineModule) 
  },
  { 
    path: 'stocks',
    data: {preload: true, delay: 4000 },
    loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule) 
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
