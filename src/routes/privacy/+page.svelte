<script>
    let agreed = false;
  
    function handleAgree() {
      agreed = true;
  
    }
  </script>
  
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-12">
    <div class="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
      <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p class="text-gray-700 mb-4">
        Welcome to our property mortgage management system. Your privacy is important to us. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
      </p>
      <p class="text-gray-700 mb-4">
        Please read this privacy policy carefully to understand our policies and practices regarding your information and how we will treat it. By accessing or using our services, you agree to this privacy policy.
      </p>
      
      <p class="text-gray-700 mb-4">
        [Insert detailed privacy policies content here...]
      </p>
      <div class="flex items-center justify-between mt-8">
        <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300" on:click="{() => window.history.back()}">Back</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" on:click="{handleAgree}" disabled={agreed}>I Agree</button>
      </div>
    </div>
  </div>
  