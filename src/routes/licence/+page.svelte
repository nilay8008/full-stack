<script>
    let agreed = false;
  
    function handleAgree() {
      agreed = true;
     
    }
  </script>
  
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-12">
    <div class="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
      <h1 class="text-3xl font-bold mb-6">Licensing</h1>
      <p class="text-gray-700 mb-4">
        Welcome to our property mortgage management system. This page outlines the licensing terms and conditions under which you may use our services.
      </p>
    
      <p class="text-gray-700 mb-4">
        [Insert detailed licensing content here...]
      </p>
      <div class="flex items-center justify-between mt-8">
        <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300" on:click="{() => window.history.back()}">Back</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" on:click="{handleAgree}" disabled={agreed}>I Agree</button>
      </div>
    </div>
  </div>
  