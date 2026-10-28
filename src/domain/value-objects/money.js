export class Money{
    constructor(amountMinor, currency = "USD"){
        if(!Number.isInteger(amountMinor ) || amountMinor < 0 ){
            throw new Error ("The money cannot negative ");
    }
    this.amountMinor = amountMinor;
    this.currency = currency;

    Object.freeze(this);
}

sum(otherMoney){
    if (this.currency !== otherMoney.currency){
        throw new Error(`Cannot sum different currencies: ${this.currency} and ${otherMoney.currency}`)
    }
    return new Money(this.amountMinor + otherMoney.amountMinor,
        this.currency
    );
}

format (locale = "es-CO"){
    return new Intl.NumberFormat(locale,{
        style : "currency",
        currency : this.currency,
    }).format(this.amountMinor/ 100);
}
}

