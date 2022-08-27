import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BusComponent } from './views/bus/bus/bus.component';
import { HomeComponent } from './views/home/home.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';

@NgModule({
  declarations: [ 
    BusComponent, HomeComponent, TestimonialsComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'app-bus', component: BusComponent },
      { path: 'app-home', component: HomeComponent },
      { path: 'app-testimonials', component: TestimonialsComponent},
      { path: '**', redirectTo: 'app-home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


