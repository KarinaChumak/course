import {Pipe,PipeTransform} from '@angular/core';
import {IDonor} from "./donor";
import {IFilter} from "./filter";
import {ISearchable} from "../assets/search";


@Pipe({
    name : 'cityFilter'
})

export class CityPipe implements PipeTransform {

    transform(donors : ISearchable[], filterBy: string) : ISearchable[]{
        console.log(filterBy);
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? donors.filter((donor: ISearchable) =>
        donor.city.toLocaleLowerCase().indexOf(filterBy)!== -1) : donors;
    }

}

@Pipe({
    name : 'groupFilter'
})

export class GroupPipe implements PipeTransform {

    transform(donors : ISearchable[], filterBy: number) : ISearchable[]{
        console.log(filterBy);
        filterBy = filterBy ? filterBy : null;
        return filterBy ? donors.filter((donor: ISearchable) =>
        donor.group == filterBy ? true : false) : donors;
    }

}

@Pipe({
    name : 'rhesusFilter'
})

export class RhesusPipe implements PipeTransform {

    transform(donors : ISearchable[], filterBy: string) : ISearchable[]{

        filterBy = filterBy ? filterBy : null;
        return filterBy ? donors.filter((donor: ISearchable) =>
            donor.rhesus == filterBy ? true : false) : donors;
    }

}

@Pipe({
    name : 'ratingFilter'
})

export class RatingPipe implements PipeTransform {

    transform(donors : IDonor[]) : IDonor[]{
        return donors.sort((n1,n2)=>{
            if (n1.donations.length < n2.donations.length) {
                return 1;
            }
            if (n1.donations.length > n2.donations.length) {
                return -1;
            }
            else return 0;
        });
    }

}