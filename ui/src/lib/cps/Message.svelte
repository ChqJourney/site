<script>
    export let msg={direction:"in",name:"kevin star",status:"Delivered",avartar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",text:"here is your cat",time:"2024.02.18 12:30:33"}
</script>

<div class={`chat ${msg.direction==="in"?"chat-start":"chat-end"}`}>
    <div class="chat-image avatar">
        <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={msg.avartar} />
        </div>
      </div>
      <div class="chat-header">
          {msg.name}
          <time class="text-xs opacity-50">{msg.time}</time>
      </div>
      <div class="chat-bubble hover:scale-105 hover:bg-slate-700">{msg.text}</div>
      <div class="chat-footer opacity-50">
          Delivered
      </div>
  </div>