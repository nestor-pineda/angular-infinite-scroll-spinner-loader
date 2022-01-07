import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './components/news/news.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';

@NgModule({
  declarations: [NewsComponent, SpinnerComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [NewsComponent, SpinnerComponent],
  providers: [SpinnerService],
})
export class SharedModule {}
