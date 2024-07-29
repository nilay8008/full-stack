<script>
    let agreed = false;
  
    function handleAgree() {
      agreed = true;
      // Add any additional logic for when the user agrees to the terms
    }
  </script>
  
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-12">
    <div class="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
      <h1 class="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p class="text-gray-700 mb-4">
        Welcome to our property mortgage management system. By accessing or using this service, you agree to be bound by the following terms and conditions...
      </p>
      <p class="text-gray-700 mb-4">
        Please read these terms and conditions carefully before using our service. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms...
      </p>
      <!-- Add more detailed terms and conditions content here -->
      <p class="text-gray-700 mb-4">
        [Insert detailed terms and conditions content here...]
      </p>
      <div class="flex items-center justify-between mt-8">
        <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300" on:click="{() => window.history.back()}">Back</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" on:click="{handleAgree}" disabled={agreed}>I Agree</button>
      </div>
    </div>
  </div>
  