const current = new Date();
const options = {
   year: 'numeric', month: '2-digit', day: '2-digit',
   hour: '2-digit', minute: '2-digit'
}
const currentDate = current.toLocaleDateString('ru-Ru', options);
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

document.querySelector('input#weight3Inv').addEventListener('click', () => {
   const len = Number(weight3Inv.closest('.marks').querySelector('input#length').value);
   const wid = Number(weight3Inv.closest('.marks').querySelector('input#width').value);
   const hei = Number(weight3Inv.closest('.marks').querySelector('input#heght').value);
   weight3Inv.value = ((len * wid * hei) / 5000).toFixed(2);
});

document.querySelector('input#weight3Fact').addEventListener('click', () => {
   const len = Number(weight3Fact.closest('.marks').querySelector('input#length').value);
   const wid = Number(weight3Fact.closest('.marks').querySelector('input#width').value);
   const hei = Number(weight3Fact.closest('.marks').querySelector('input#heght').value);
   weight3Fact.value = ((len * wid * hei) / 5000).toFixed(2);
});



//---------------------- Finish buttons---------------------//

document.querySelector('.print').addEventListener("click", () => {
   document.querySelector('.navigation').classList.add('hideBtn');
   document.querySelector('.top-menu').classList.add("hideLogo");;
   window.print()
   document.querySelector('.navigation').classList.remove('hideBtn');
   document.querySelector('.top-menu').classList.remove("hideLogo")
});

document.querySelector('.fresh').addEventListener("click", (e) => {
   e.preventDefault()
   window.location.reload()
});

document.querySelector('.save').addEventListener('click', () => {
   const saveField = document.querySelector('.mother')
});