import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule,
    MatMenuModule, MatDatepickerModule,
    MatCardModule, MatSidenavModule,
    MatDialogModule ],
  exports: [MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule,
    MatMenuModule, MatDatepickerModule,
    MatCardModule, MatSidenavModule,
    MatDialogModule ],
})
export class MaterialModule { }
