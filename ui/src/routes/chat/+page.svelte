<script>
    export let data
    let currentIdx
</script>


<div class="mx-auto relative container w-full h-full">
    
<div class="w-full flex mx-2 mt-2 h-full">
    
    <ul class="menu flex-none bg-base-200">
        <li>
          <a href='/home' class="tooltip tooltip-right" data-tip="Home">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </a>
        </li>
        <li>
          <a class="tooltip tooltip-right" data-tip="Details">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </a>
        </li>
        <li>
          <a class="tooltip tooltip-right" data-tip="Stats">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </a>
        </li>
      </ul>
      <div class="h-96 flex-none bg-slate-400">
        {#each data.persons as per,idx}
            <div class="grid w-40 h-16 hover:scale-105 hover:shadow-md border-b border-zinc-600 bg-primary text-primary-content place-content-center">{per}</div> 
        {/each}
          
        
      </div>
      <div class="grow h-96 bg-slate-500 w-full px-2 py-2">
        <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              Obi-Wan Kenobi
              <time class="text-xs opacity-50">12:45</time>
            </div>
            <div class="chat-bubble">You were the Chosen One!</div>
            <div class="chat-footer opacity-50">
              Delivered
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              Anakin
              <time class="text-xs opacity-50">12:46</time>
            </div>
            <div class="chat-bubble">I hate you!</div>
            <div class="chat-footer opacity-50">
              Seen at 12:46
            </div>
          </div>
      </div>
</div>
</div>