
<script>
    let paymentReceived = true;
  
    const handleViewDetails = () => {
      console.log("Viewing payment details");
    
    };
  </script>
  
  <style>
   
  </style>
  
  <div class="container mx-auto p-6">
    {#if paymentReceived}
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong class="font-bold">Payment Received</strong>
        <span class="block sm:inline">Thank you for your payment!</span>
        <div class="mt-2">
          <button
            on:click={handleViewDetails}
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            View Details
          </button>
        </div>
      </div>
    {/if}
  </div>
  