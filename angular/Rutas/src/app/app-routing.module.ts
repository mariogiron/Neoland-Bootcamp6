import { RelatedComponent } from './related/related.component';
import { LibroComponent } from './libro/libro.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { TestGuard } from './test.guard';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:name/:surname', component: AboutComponent },
  { path: 'info', redirectTo: 'contact' },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent, canActivate: [TestGuard] },
  { path: 'empleado/:idEmpleado', component: EmpleadoComponent },
  {
    path: 'libro/:idLibro', component: LibroComponent, children: [
      { path: 'reviews', component: ReviewsComponent },
      { path: 'related', component: RelatedComponent }
    ]
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
