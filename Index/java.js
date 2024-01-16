const current = new Date();
const options = {
   year: 'numeric', month: '2-digit', day: '2-digit',
   hour: '2-digit', minute: '2-digit'
};

const currentDate = current.toLocaleDateString('ru-Ru', options);
try {
   document.querySelector('.date').textContent = currentDate;   


   document.querySelector('#manager').addEventListener('change', () => {
      const chacked = document.querySelector('#manager');
      document.querySelector('.manager').querySelector(".mark").innerHTML = chacked.value;
   });


   document.querySelector('#client').addEventListener('change', () => {
      const chacked = document.querySelector('#client');
      document.querySelector('.client').querySelector(".mark").innerHTML = chacked.value;
   });

   document.getElementsByName('departureInv').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('departureInv');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });


   document.getElementsByName('packAvailInv').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('packAvailInv');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('departureFact').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('departureFact');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('packAvailFact').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('packAvailFact');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('packege').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('packege');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('packDamage').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('packDamage');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('packAcc').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('packAcc');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('innerPack').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('innerPack');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('innerPackDam').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('innerPackDam');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('protMethod_plomb').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('protMethod_plomb');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('protDem_plomb').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('protDem_plomb');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('protMethod_stick').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('protMethod_stick');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('protDem_stick').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('protDem_stick');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('protMethod_scotch').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('protMethod_scotch');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   document.getElementsByName('protDem_scotch').forEach((item) => {
      item.addEventListener('change', () => {
         let element = document.getElementsByName('protDem_scotch');
         for (let i = 0; i < element.length; i++) {
            element[i].checked = false;
         }
         item.checked = true;
      })
   });

   const wQInvs_val = document.querySelector('input#wQInv');
   const wQFact_val = document.querySelector('input#wQFact');
   const lenI = document.querySelector('#lengInv');
   const widI = document.querySelector('#widthInv');
   const heiI = document.querySelector('#hightInv');
   const lenF = document.querySelector('#lengFact');
   const widF = document.querySelector('#widthFact');
   const heiF = document.querySelector('#hightFact');

   document.querySelector('input#wQInv').addEventListener('click', () => {
      if (lenI.value || widI.value || heiI.value) {
         wQInvs_val.value = (Number(lenI.value * widI.value * heiI.value) / 5000).toFixed(2);
      } else {
         wQInvs_val.value = 0;
      }
   });

   document.querySelector('input#wQFact').addEventListener('click', () => {
         if (lenF.value || widF.value || heiF.value) {
            wQFact_val.value = (Number(lenF.value * widF.value * heiF.value) / 5000).toFixed(2);
         } else {
            wQFact_val.value = 0;
         }
   });

   //---------------------- Finish buttons---------------------//

   document.querySelector('.print').addEventListener("click", () => {
      document.querySelector('.navigation').classList.add('hideBtn');
      document.querySelector('.top-menu').classList.add("hideLogo");;
      window.print()
      document.querySelector('.navigation').classList.remove('hideBtn');
      document.querySelector('.top-menu').classList.remove("hideLogo")
   });

   document.querySelector('.send').addEventListener('click', () => {

   });

} catch (error) {
   console.log("Непредвиденная ошибка" + error);
};

/* ------------------------------------------------------------------------------------------------ */
let htmlBlock = '<div class="modalBody"> \
   <div class="modal"> \
      <div class="modal-foto"><img src="${}" alt="${}" width="50px" height="50px" style="margin: auto; margin-top: 3px;"></div> \
      <div class="modal-off_manager">${}</div> \
   </div> \
   <div class="modal"> \
      <div class="modal-info"> \
         <ul> \
            <li>Стаж в компании - <span>${}</span> лет/года</li> \
            <li>Количество выходов - <span>${}</span></li> \
            <li>Рейтинг - <span>${}</span></li>\
            <li>Стоимость смены - <span>${}</span>&#8381;</li> \
            <li>Предворительная сумма оплаты - <span>${}</span>&#8381;</li> \
         </ul> \
      </div> \
   </div> \
</div>'
let officer = Array.from(document.querySelectorAll('.officer'));
let modalBody = document.querySelector(".modalBody")
officer.forEach((item) => {
// const workDays = item.querySelectorAll('[bgcolor="#091fad"]');//
// const advPayment = Number(3100 * workDays.length).toFixed(2);//
// document.querySelector('.modalBody').textContent = officer.indexOf(item);//
   item.addEventListener('mousedown', () => {
      document.querySelector('.modalBlock').style.display = "block";
      document.querySelector('.modalBlock').insertAdjacentHTML('afterbegin', htmlBlock);
   })
   item.addEventListener('mouseup', () => {
      document.querySelector('.modalBlock').style.display = "none"
      document.querySelector('.modalBody').remove();
   })
});