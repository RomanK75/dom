function adLoop() {
  let ad = document.getElementsByClassName("rotator__case rotator__case_active")[0];
  const nextAd = ad.nextElementSibling
  ad.classList.remove("rotator__case_active")
  if (nextAd == null) { // Проверяем закончился ли список
    ad = document.getElementsByClassName("rotator")[0].firstElementChild
    ad.classList.add("rotator__case_active") 
  } else {
    ad = nextAd
    ad.classList.add("rotator__case_active")
  }
}

setInterval(adLoop,1000)
