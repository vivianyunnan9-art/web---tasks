
  // 1. تفعيل زر المفضلة (القلب)
  document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('liked');
      const icon = this.querySelector('i');
      if (this.classList.contains('liked')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
      }
    });
  });

  // 2. تفعيل أزرار زيادة ونقصان الغرف والأسرة
  document.querySelectorAll('.input-group').forEach(group => {
    const minusBtn = group.querySelector('button:first-child');
    const plusBtn = group.querySelector('button:last-child');
    const input = group.querySelector('input');

    minusBtn.addEventListener('click', () => {
      let val = input.value === 'Any' ? 0 : parseInt(input.value);
      if (val > 0) {
        input.value = val - 1;
      } else {
        input.value = 'Any';
      }
    });

    plusBtn.addEventListener('click', () => {
      let val = input.value === 'Any' ? 0 : parseInt(input.value);
      input.value = val + 1;
    });
  });

  // 3. تفعيل اختيار اللغة/العملة في المودال
  document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', function() {
      // إزالة active من كل العناصر في نفس الحاوية
      const parent = this.parentElement;
      parent.querySelectorAll('.lang-item').forEach(el => {
        el.classList.remove('active');
        const check = el.querySelector('.check');
        if (check) check.remove();
      });
      
      // إضافة active للعنصر المختار
      this.classList.add('active');
      if (!this.querySelector('.check')) {
        this.innerHTML += ' <i class="fa-solid fa-check check"></i>';
      }
    });
  });
