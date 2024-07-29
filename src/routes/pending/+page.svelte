<!-- src/routes/+page.svelte -->
<script>
    // Sample data for pending requests
    let pendingRequests = [
      { propertyId: '12345', loanAmount: '$250,000', repaymentPeriod: '30 years' },
      { propertyId: '67890', loanAmount: '$150,000', repaymentPeriod: '15 years' },
      { propertyId: '11223', loanAmount: '$300,000', repaymentPeriod: '20 years' },
    ];
  
    const handleApprove = (request) => {
      console.log(`Approved: ${request.propertyId}`);
      // Add your approval logic here
    };
  
    const handleReject = (request) => {
      console.log(`Rejected: ${request.propertyId}`);
      // Add your rejection logic here
    };
  </script>
  
  <style>
    /* You can add custom styles here if needed */
  </style>
  
  <div class="container mx-auto p-6 bg-gray-50 mt-10 dark:bg-gray-900 rounded-xl">
    <h1 class="text-2xl font-bold text-white mb-4">Pending Mortgage Requests</h1>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {#each pendingRequests as request}
        <div class="flex justify-between items-center border-b border-gray-300 py-4">
          <div class="flex-1">
            <p class="text-gray-700"><strong>Property ID:</strong> {request.propertyId}</p>
            <p class="text-gray-700"><strong>Loan Amount:</strong> {request.loanAmount}</p>
            <p class="text-gray-700"><strong>Repayment Period:</strong> {request.repaymentPeriod}</p>
          </div>
          <div class="flex items-center space-x-4">
            <button
              on:click={() => handleApprove(request)}
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Approve
            </button>
            <button
              on:click={() => handleReject(request)}
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reject
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
  