import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { AboutComponent } from './about/about.component';
import { MezcalComponent } from './mezcal/mezcal.component';
import { AgaveComponent } from './agave/agave.component';
import { ProcessComponent } from './process/process.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { MixologyComponent } from './mixology/mixology.component';
import { ContactComponent } from './contact/contact.component';
import { SpiritsModule } from '@agave-spirits/spirits';

@NgModule({
    declarations: [
        BrowsePageComponent,
        AboutComponent,
        MezcalComponent,
        AgaveComponent,
        ProcessComponent,
        ProductsComponent,
        NewsComponent,
        MixologyComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SpiritsModule,
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: BrowsePageComponent },
        ])
    ]
})
export class HomepageModule {}
