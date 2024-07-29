import { SmartContract, deploy } from "scrypt-ts";
import { MortgageContract } from "./MortgageContract"; // Adjust the path as necessary

async function main() {
    // Define parameters for the mortgage contract
    const propertyTitleToken = "token_identifier"; // Replace with actual token identifier
    const mortgageAmount = BigInt(100000000); // Replace with the actual mortgage amount in satoshis
    const borrower = "borrower_address"; // Replace with actual borrower address
    const lender = "lender_address"; // Replace with actual lender address

    // Create an instance of the MortgageContract
    const mortgageContract = new MortgageContract(propertyTitleToken, mortgageAmount, borrower, lender);

    // Deploy the contract
    const contractId = await deploy(mortgageContract);

    console.log(`Mortgage contract deployed at: ${contractId}`);

    // Optionally, you can call methods to initialize or interact with the contract
    await mortgageContract.requestMortgage();
    console.log("Mortgage request initiated.");

    await mortgageContract.lockTitle();
    console.log("Property title locked.");

    // Example of making a payment
    const paymentAmount = BigInt(20000000); // Replace with the actual payment amount
    await mortgageContract.makePayment(paymentAmount);
    console.log(`Payment of ${paymentAmount} made.`);
}

main()
    .then(() => {
        console.log("Smart contract execution completed.");
    })
    .catch((error) => {
        console.error("Error executing smart contract:", error);
    });
