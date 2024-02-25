<script>
    import ChatContentHeader from "$lib/cps/ChatContentHeader.svelte";
    import Message from "$lib/cps/Message.svelte";
    import MessageContainer from "$lib/cps/MessageContainer.svelte";
    export let data;

    export let messages = [{chatId:"",msgs:[
        {
            direction: "in",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your cat",
            time: "2024.02.18 12:30:33",
        },
        {
            direction: "out",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your cat",
            time: "2024.02.18 12:30:33",
        },
        {
            direction: "in",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your cat",
            time: "2024.02.18 12:30:33",
        },
    ]},
    {chatId:"",msgs:[
        {
            direction: "in",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your dog",
            time: "2024.02.18 12:30:33",
        },
        {
            direction: "out",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your dog",
            time: "2024.02.18 12:30:33",
        },
        {
            direction: "in",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your dog",
            time: "2024.02.18 12:30:33",
        },
    ]},
    {chatId:"",msgs:[
        {
            direction: "in",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your horse",
            time: "2024.02.18 12:30:33",
        },
        {
            direction: "out",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your horse",
            time: "2024.02.18 12:30:33",
        },
        {
            direction: "in",
            name: "kevin star",
            status: "Delivered",
            avartar:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
            text: "here is your horse",
            time: "2024.02.18 12:30:33",
        },
    ]}
];

    
</script>

<ChatContentHeader />
<MessageContainer>
    {#each messages[parseInt(data.name)].msgs as message}
        <Message msg={message} />
    {/each}
</MessageContainer>
<div class="bg-slate-200 flex h-14 w-full px-2 py-2 gap-2">
    <button
        class=" flex group p-1 rounded-lg hover:bg-slate-400 items-center justify-center"
    >
        <svg
            class="icon fill-slate-700 group-hover:fill-gray-50"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            ><path
                d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zM42.666667 512C42.666667 252.8 252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512z m533.333333-64a42.666667 42.666667 0 0 1 42.666667-42.666667h85.333333a42.666667 42.666667 0 1 1 0 85.333334h-85.333333a42.666667 42.666667 0 0 1-42.666667-42.666667z m-254.165333 193.834667a42.666667 42.666667 0 0 1 60.330666 0 183.594667 183.594667 0 0 0 259.669334 0 42.666667 42.666667 0 0 1 60.330666 60.330666 268.928 268.928 0 0 1-380.330666 0 42.666667 42.666667 0 0 1 0-60.330666z"
            ></path><path
                d="M362.666667 362.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v80a42.666667 42.666667 0 0 1-85.333333 0V405.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z"
            ></path></svg
        >
    </button>
    <textarea
        id="about"
        name="about"
        placeholder="type here..."
        class="w-full placeholder:text-base placeholder:opacity-50 bg-slate-200 border-0 ring-0 focus:bg-gray-100 resize-none rounded-lg focus:ring-0 outline-0 text-xl"
    ></textarea>
    <button class="group hover:bg-slate-300 p-1 rounded-lg hover:shadow-md">
        <svg
            class="icon fill-slate-700 group-hover:fill-gray-50"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            ><path
                d="M964.154514 81.861486a29.242514 29.242514 0 0 0-30.866285-0.380343L60.459886 609.104457a29.257143 29.257143 0 1 0 6.568228 53.013943l273.027657 83.485257 35.766858 177.664a29.2864 29.2864 0 0 0 48.069485 16.135314l141.282743-124.957257 289.9968 88.6784a29.2864 29.2864 0 0 0 37.653943-24.766171L977.495771 109.714286a29.257143 29.257143 0 0 0-13.341257-27.8528zM423.175314 861.930057l-19.499885-96.885028 95.890285 29.330285-76.3904 67.554743z m415.349029-25.088l-363.271314-111.074743 294.107428-345.000228a14.613943 14.613943 0 1 0-22.250057-18.973257L444.781714 716.448914l-298.027885-91.121371 766.083657-463.111314-74.313143 674.625828z"
            ></path><path
                d="M812.2368 580.856686a14.628571 14.628571 0 0 0 16.310857-12.712229l2.720914-21.942857a14.599314 14.599314 0 0 0-12.712228-16.310857 14.584686 14.584686 0 0 0-16.310857 12.712228l-2.720915 21.942858a14.613943 14.613943 0 0 0 12.712229 16.310857zM792.736914 737.221486a14.628571 14.628571 0 0 0 16.559543-12.405029l14.0288-97.879771a14.6432 14.6432 0 0 0-12.419657-16.559543 14.701714 14.701714 0 0 0-16.559543 12.419657l-14.0288 97.879771a14.657829 14.657829 0 0 0 12.419657 16.544915z"
            ></path></svg
        >
    </button>
</div>

<style>
    .icon {
        height: 2rem;
        width: 2rem;
    }
    textarea {
        height: 100%;
    }
</style>
