<script>
    export let chatName="Patrick";
    export let status="online";
</script>

<div class="w-full h-14 flex bg-gray-200 rounded-tr-md items-center">
    <div class="w-4 bg-transparent"></div>
    <div class="flex grow justify-between border-b border-slate-300">

        <div class="">
            <div class="font-medium">{chatName}</div>
            <div class="text-xs flex items-center gap-1"><span class="indicator-item indicator-center badge badge-xs badge-info"></span>
                {status}</div>
            </div>
            <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
        </div>
        <div class="w-4 bg-transparent"></div>
</div>