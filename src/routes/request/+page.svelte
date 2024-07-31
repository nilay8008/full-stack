
<script>
  let propertyId = '';
  let loanAmount = '';
  let repaymentPeriod = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log({ propertyId, loanAmount, repaymentPeriod });
  };
</script>

<style>
  
</style>

<div class="container mx-auto p-6">
  <h1 class="text-2xl font-bold mb-4">Request a Mortgage</h1>
  <form on:submit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label for="property-id" class="block text-gray-700 text-sm font-bold mb-2">Property ID:</label>
      <input
        type="text"
        id="property-id"
        bind:value={propertyId}
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Property ID"
      />
    </div>

    <div class="mb-4">
      <label for="loan-amount" class="block text-gray-700 text-sm font-bold mb-2">Loan Amount:</label>
      <input
        type="number"
        id="loan-amount"
        bind:value={loanAmount}
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Loan Amount"
      />
    </div>

    <div class="mb-4">
      <label for="repayment-period" class="block text-gray-700 text-sm font-bold mb-2">Repayment Period:</label>
      <input
        type="text"
        id="repayment-period"
        bind:value={repaymentPeriod}
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Repayment Period"
      />
    </div>

    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit Request
      </button>
    </div>
  </form>
</div>
