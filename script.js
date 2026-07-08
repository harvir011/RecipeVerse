
  document.querySelectorAll('.cat-pill').forEach(pill=>{
    pill.addEventListener('click',()=>{
      document.querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  document.querySelector('.newsletter form').addEventListener('submit', function(e){
    e.preventDefault();
    const btn = this.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Subscribed ✓';
    this.querySelector('input').value='';
    setTimeout(()=>{ btn.textContent = original; }, 2500);
  });
