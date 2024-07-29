import { SmartContract, assert, method, prop } from 'scrypt-ts';

// Define a class for PropertyTitleToken
class PropertyTitleToken {
    @prop()
    owner: string;

    constructor(owner: string) {
        this.owner = owner;
    }

    transfer(newOwner: string) {
        this.owner = newOwner;
    }
}

// Define a class for the MortgageContract
export class MortgageContract extends SmartContract {
    @prop()
    propertyTitle: PropertyTitleToken;

    @prop()
    lender: string;

    @prop()
    buyer: string;

    @prop()
    loanAmount: bigint;

    @prop()
    repaidAmount: bigint;

    constructor(propertyTitle: PropertyTitleToken, lender: string, buyer: string, loanAmount: bigint) {
        super(...arguments);
        this.propertyTitle = propertyTitle;
        this.lender = lender;
        this.buyer = buyer;
        this.loanAmount = loanAmount;
        this.repaidAmount = 0n;
    }

    @method()
    public repay(amount: bigint) {
        // Ensure the amount being repaid is valid
        assert(amount > 0n, 'Repayment amount must be greater than zero');
        
        // Update the repaid amount
        this.repaidAmount += amount;

        // Check if the loan is fully repaid
        if (this.repaidAmount >= this.loanAmount) {
            this.returnPropertyTitle();
        }
    }

    @method()
    private returnPropertyTitle() {
        // Transfer the property title back to the buyer
        this.propertyTitle.transfer(this.buyer);
    }
}
