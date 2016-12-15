import {ISearchable} from "../assets/search";
import {PipeTransform, Pipe} from "@angular/core";
import {IRecipient} from "./recipient";
@Pipe({
    name : 'newRecipientsFilter'
})

export class NewRecipientsPipe implements PipeTransform {

    transform(recipients : IRecipient[]) : IRecipient[]{

        return recipients.filter((recipient: IRecipient) =>
            recipient.status == "new" ? true : false) ;
    }

}
