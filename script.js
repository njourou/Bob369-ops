const menu=document.querySelector('.menu');
const mobileNav=document.querySelector('.mobile-nav');
menu?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const form=document.getElementById('projectForm');const note=document.getElementById('formNote');
form?.addEventListener('submit',(e)=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(`Project enquiry: ${data.get('service')}`);const body=encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\n${data.get('message')||''}`);window.location.href=`mailto:info@twobobenterprises.co.ke?subject=${subject}&body=${body}`;if(note)note.textContent='Opening your email app...';});