
document.addEventListener("DOMContentLoaded",()=>{
 const q=document.querySelector("[data-filter]");
 if(!q)return;
 const items=[...document.querySelectorAll("[data-search-item]")];
 q.addEventListener("input",()=>{
   const needle=q.value.toLowerCase().trim();
   items.forEach(el=>el.hidden=needle && !el.textContent.toLowerCase().includes(needle));
 });
});
