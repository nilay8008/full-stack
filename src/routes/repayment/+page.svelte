<!-- src/routes/+page.svelte -->
<script>
    // Sample data for repayment schedule
    let repaymentSchedule = [
      { dueDate: '2024-08-15', amountDue: '$1,500' },
      { dueDate: '2024-09-15', amountDue: '$1,500' },
      { dueDate: '2024-10-15', amountDue: '$1,500' },
    ];
  
    const handleMakePayment = (payment) => {
      console.log(`Payment made for: ${payment.dueDate}`);
      // Add your payment logic here
    };
  </script>
  
  <style>
    /* You can add custom styles here if needed */
  </style>
  
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Repayment Schedule</h1>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {#each repaymentSchedule as payment}
        <div class="flex justify-between items-center border-b border-gray-300 py-4">
          <div class="flex-1">
            <p class="text-gray-700"><strong>Payment Due Date:</strong> {payment.dueDate}</p>
            <p class="text-gray-700"><strong>Amount Due:</strong> {payment.amountDue}</p>
          </div>
          <div>
            <button
              on:click={() => handleMakePayment(payment)}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Make Payment
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
  