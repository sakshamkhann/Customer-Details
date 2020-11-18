import { Component, OnInit } from '@angular/core';
import { Account} from 'src/app/model/customer';
import { Customer} from 'src/app/model/customer';
import { PrimeAccount } from 'src/app/model/customer';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent{

  toString(customer:Customer):string{
    return customer.toString();

  }

  Customers = [
    new Customer(1, "saksham",  new Account(3456)),
    new Customer(2, "sushil", new Account(3254.89)),
     new Customer(3,"sahil", new PrimeAccount(4567, 450) ),
     new Customer(4,"narendra", new PrimeAccount(5000, 678) )
    ]


}
