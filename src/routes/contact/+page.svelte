<script>
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    
    alert(`Message sent by ${name} (${email}): ${message}`);
   
    name = '';
    email = '';
    message = '';
  }
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-12">
  <div class="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
    <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" bind:value={name} required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" bind:value={email} required>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" bind:value={message} required></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
      </div>
    </form>
  </div>
</div>
