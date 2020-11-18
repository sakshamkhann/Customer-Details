export class Customer{
    id;
    name;
    account;

    
    constructor(id:number, name:string, account:Account){
        this.id =id;
        this.name = name;
        this.account=account;
        }

    toString()
    {
        let tostring = "id=" + this.id + " " + "name=" + this.name + " " +  this.account.toString();

        return tostring;
     }
}

export class Account{
    balance;
    
    constructor(balance:number){
        this.balance = balance;
    }
    
    toString()
    {
        let tostring = "balance=" + this.balance;

        return tostring;
     }
}

export class PrimeAccount extends Account{
    supercoins;
    
    constructor(balance:number, supercoins:number){
         super(balance);
         this.supercoins = supercoins;
     }
     toString()
    {
        let tostring = "balance=" + this.balance + " " + "supercoins=" + this.supercoins ;

        return tostring;
     }

}