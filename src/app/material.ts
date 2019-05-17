import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule,
    MatMenuModule, MatDatepickerModule,
    MatCardModule, MatSidenavModule,
    MatDialogModule, MatListModule,
    MatFormFieldModule, MatNativeDateModule,
    MatInputModule, MatSelectModule,
    MatTooltipModule],
  exports: [MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule,
    MatMenuModule, MatDatepickerModule,
    MatCardModule, MatSidenavModule,
    MatDialogModule, MatListModule,
    MatFormFieldModule, MatNativeDateModule,
    MatInputModule, MatSelectModule,
    MatTooltipModule],
})
export class MaterialModule { }
