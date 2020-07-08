import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthComponent } from './auth/auth.component';
import { OrdersComponent } from './orders/orders.component';




const appRoutes:Routes =[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'profile',component:ProfileComponent},
    {path:'inventory',component:InventoryComponent},
    {path:'main',component:AuthComponent},
    {path:'orders',component:OrdersComponent},
];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}

