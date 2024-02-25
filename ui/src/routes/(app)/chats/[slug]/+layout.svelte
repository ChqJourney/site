<script>
import { goto } from '$app/navigation';
import ChatItem from '$lib/cps/ChatItem.svelte';       
                
    /** @type {import('./$types').LayoutData} */
	export let data;
    console.log(data)
    let currentIdx=0
</script>

      <div class="h-screen flex-none bg-slate-300">
            <label class=" flex h-14 w-full items-center gap-2 p-2">
                <input type="text" class="grow rounded-md h-full" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
              </label>
          <div class="w-full h-full">
            {#each data.persons as per,idx}
                <ChatItem callback={()=>{currentIdx=idx;goto(`/chats/${currentIdx}`)}} selected={idx===currentIdx}/>
            {/each}
          </div>
      </div>
      
      <div class="grow h-screen flex flex-col rounded-rt-md">
        <slot currentIdx={currentIdx}/>
            
      </div>

