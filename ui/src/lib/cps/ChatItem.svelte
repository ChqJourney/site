<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    /**
     * @type {() => any}
     */
    export let callback;
    export let selected = false;
    export let chatInfo = {
        chatId:0,
        persons: "Patrick",
        avatar: "PC",
        chatBriefing: "dfad adfadf adf dfdfa adfadfs;kl ;j fa;kdjf ;lkj a;dksfj ",
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button
    on:click={() => {callback();dispatch("select",{chatId:chatInfo.chatId})}}
    class={`flex hover:cursor-pointer overflow-hidden gap-2 h-16 pr-1 w-full items-center hover:shadow-md ${
        selected ? "bg-slate-100" : "bg-slate-300"
    }  text-primary-content`}
>
    <div
        class={`flex-start  w-1 h-full ${selected ? "bg-pink-500" : ""}`}
    ></div>
    <div class="flex border-b ml-1 w-full border-slate-400 h-full items-center">
        <div class="avatar ml-1 hover:scale-105">
            <div class="w-8 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
            </div>
        </div>

        <div class="w-full grow flex flex-col hover:scale-105">
            <div class="flex justify-between">
                <div class="font-semibold">{chatInfo.persons}</div>
                <div class="text-gray-600 text-xs">12:30 AM</div>
            </div>
            <div class="text-start text-xs max-w-36 overflow-hidden truncate text-gray-600">
                {chatInfo.chatBriefing}
            </div>
        </div>
    </div>
    <div class="w-1 bg-transparent h-full"></div>
</button>
