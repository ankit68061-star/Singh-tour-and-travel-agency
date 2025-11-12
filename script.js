
document.getElementById('year').textContent=new Date().getFullYear();
function submitForm(e){e.preventDefault();const n=document.getElementById('name').value;alert('Thanks '+(n||'friend')+'. Your message has been noted. We will contact you soon.');e.target.reset();}
