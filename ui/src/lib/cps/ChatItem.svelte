<script>
    import { createEventDispatcher } from 'svelte'; 
    const dispatch = createEventDispatcher();
     /**
     * @type {() => any}
     */
      export let callback
    export let selected=false;
    export let chatInfo={persons:"Patrick",avatar:"PC",chatBriefing:"dfad adfadf adf"}
</script>
<div on:click={()=>callback()} class="flex hover:cursor-pointer w-full h-16 items-center hover:shadow-md border-b border-zinc-600 bg-primary text-primary-content">
    <div class={`flex-start w-1 h-full ${selected?"bg-pink-600":""}`}></div>
     <div class="avatar ml-1 hover:scale-105">

         <div class="w-10 rounded-full">
             <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
   
    <div class="flex hover:scale-105">
        {chatInfo.chatBriefing}
    </div>
</div> 