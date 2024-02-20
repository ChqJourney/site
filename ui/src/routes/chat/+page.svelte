<script>
    import ChatContentHeader from '$lib/cps/ChatContentHeader.svelte';
import ChatItem from '$lib/cps/ChatItem.svelte';
    import Message from '$lib/cps/Message.svelte';
    import MessageContainer from '$lib/cps/MessageContainer.svelte';
     import logo from '$lib/images/simple.svg';           
                
     export let messages=[{direction:"in",name:"kevin star",status:"Delivered",avartar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",text:"here is your cat",time:"2024.02.18 12:30:33"},
    {direction:"out",name:"kevin star",status:"Delivered",avartar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",text:"here is your cat",time:"2024.02.18 12:30:33"},
    {direction:"in",name:"kevin star",status:"Delivered",avartar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",text:"here is your cat",time:"2024.02.18 12:30:33"}]
    export let data
    let currentIdx=0
</script>


<div class="mx-auto relative container w-full h-full">
    
<div class="w-full flex mx-2 mt-2 h-full">
    
    <ul class="menu flex-none bg-base-200 rounded-l-md">
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
      <div class="h-screen flex-none bg-slate-300">
            <label class=" flex h-14 w-full items-center gap-2 p-2">
                <input type="text" class="grow rouded-md" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
              </label>
          <div class="w-full">
            {#each data.persons as per,idx}
                <ChatItem callback={()=>currentIdx=idx} selected={idx===currentIdx}/>
            {/each}
          </div>
      </div>
      
      <div class="grow h-screen flex flex-col rounded-rt-md">
            <ChatContentHeader/>
          <MessageContainer>
            {#each messages as message}
        <Message msg={message}/>
    {/each}
          </MessageContainer>
            <div class="bg-gray-200 h-64 w-full">
                <textarea class="textarea focus:outline-0 text-2xl w-full h-full bg-transparent textarea-bordered" placeholder=""></textarea>
            </div>
      </div>
</div>
</div>