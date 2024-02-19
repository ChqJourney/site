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
<!-- svelte-ignore a11y-click-events-have-key-events -->
<button on:click={()=>callback()} class={`flex hover:cursor-pointer w-full gap-2 h-16 pr-1 items-center hover:shadow-md ${selected?"":"bg-gray-400"} bg-primary text-primary-content`}>
    <div class={`flex-start  w-1 h-full ${selected?"bg-pink-600":""}`}></div>
     <div class="avatar ml-1 hover:scale-105 ">

         <div class="w-8 rounded-full">
             <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
   
    <div class="w-full flex flex-col hover:scale-105">
        <div class="flex justify-between">

            <div class="font-semibold">{chatInfo.persons}</div>
            <div class="text-gray-600 text-xs">12:30 AM</div>
        </div>
            <div class="text-start text-xs truncate text-gray-600">
                
            {chatInfo.chatBriefing}
        </div>
        
    </div>
</button> 