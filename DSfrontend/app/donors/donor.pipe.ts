import {Pipe,PipeTransform} from '@angular/core';
import {IDonor} from "./donor";
import {IFilter} from "./filter";


@Pipe({
    name : 'donorFilter'
})

export class DonorPipe implements PipeTransform {

    transform(donors : IDonor[], filterBy: IFilter) : IDonor[]{

        filterBy.city = filterBy.city ? filterBy.city.toLocaleLowerCase() : null;
        return filterBy.city ? donors.filter((donor: IDonor) =>
        donor.city.toLocaleLowerCase().indexOf(filterBy.city)!== -1) : donors;
    }

}