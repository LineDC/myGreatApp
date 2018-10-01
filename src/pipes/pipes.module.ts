import { NgModule } from '@angular/core';
import { FirstLetterUppercasePipe } from './first-letter-uppercase/first-letter-uppercase';
@NgModule({
	declarations: [FirstLetterUppercasePipe],
	imports: [],
	exports: [FirstLetterUppercasePipe]
})
export class PipesModule {}
