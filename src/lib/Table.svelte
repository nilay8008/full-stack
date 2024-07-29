
<script>
  export let names;
</script>

<div
  class="mt-pxpt-5 w-full max-w-md p-5 mx-auto rounded-lg m-auto mt-10 shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 ring-1 ring-blue-500/5 backdrop-blur-lg"
>
  <div class="flex items-baseline justify-between mb-4 ">
    <div class="space-y-1">
      <h2 class="flex-auto text-justify  font-semibold text-balance justify-items-centerblock uppercase tracking-wide text-black text-xl mb-2">Welcome Back</h2>
      <p class="flex-auto justify-items-center block tracking-wide font-extrabold text-black text-xl mb-3">
        Logged In {names.length} Users
      </p>
    </div>
  </div>
  
  <div class="divide-y divide-black m-auto mt-10">
    {#each names as user (user.id)}
      <div class="flex items-center justify-between py-1">
        <div class="flex items-center space-x-4 w-3/10 py-1">
          <div class="flex">
            <p class="font-medium pt-1 dark:text-green-900 leading-none">{user.name}</p>
            <p class="font-medium pl-2 dark:text-green-900 pt-0">{user.email}</p>
          </div>
        </div>
        <form method="POST" action="/profiles?/delete" class="w-0.5/12">
          <input type="hidden" name="id" id="id" value={user.id} />
          <button type="submit">
            <img class="w-6 float-right" src="./trash-can.svg" alt="delete" />
          </button>
        </form>
 
       
      </div>
    {/each}
  </div>
</div>