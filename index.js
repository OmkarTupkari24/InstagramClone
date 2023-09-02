const containerEl = document.querySelector('.container');
const commentEl = document.querySelector('.comment');
const msg_boxEl = document.querySelector('.msg_box'); 
const search_boxEl = document.querySelector('.search_box');
const notification_boxEl = document.querySelector('.notification_box');
const profile_pageEl = document.querySelector('.profile_page');

const back_btnEl = document.querySelector('.back_btn');
const home_btnEl = document.querySelector('.home_btn');
const search_btnEl = document.querySelector('.search_btn');
const heart_btnEl = document.querySelector('.heart_btn');
const profile_btnEl = document.querySelector('.profile_btn');

commentEl.addEventListener('click',(e)=>{
    msg_boxEl.style.left='-54vh';
    msg_boxEl.style.display='block';
});

back_btnEl.addEventListener('click',(e)=>{
     msg_boxEl.style.display='none';
});

home_btnEl.addEventListener('click',(e)=>{
   msg_boxEl.style.display='none';
   search_boxEl.style.display='none';
   notification_boxEl.style.display='none';
   profile_pageEl.style.display='none';
});

search_btnEl.addEventListener('click',(e)=>{
    search_boxEl.style.display='block';
    notification_boxEl.style.display='none';
    profile_pageEl.style.display='none';
});

heart_btnEl.addEventListener('click',(e)=>{
   notification_boxEl.style.display='block';
   profile_pageEl.style.display='none';
})

profile_btnEl.addEventListener('click',(e)=>{
    profile_pageEl.style.display= 'block';  
})