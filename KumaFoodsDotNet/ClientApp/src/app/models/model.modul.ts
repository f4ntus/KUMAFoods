import { HttpClientModule } from '@angular/common/http';
import { Repository } from './repository';
import { NgModule } from '@angular/core';

@NgModule ({
    imports: [HttpClientModule],
    providers: [Repository]
})

export class ModelModule {}
