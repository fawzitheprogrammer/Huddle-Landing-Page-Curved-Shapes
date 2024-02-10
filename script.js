function animateNumber(elementId, startValue, endValue,unit, duration) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID ${elementId} not found.`);
    return;
  }

  let currentVal = startValue;
  const stepTime = duration / (endValue - startValue);

  const interval = setInterval(() => {
    currentVal++;

    // This is to check if the number is bigger than 999 it writes in decimal format 
    element.textContent = currentVal > 999 ? (currentVal / 1000).toFixed(1) + unit : currentVal;

    if (currentVal >= endValue) clearInterval(interval);
  }, stepTime);
}

document.addEventListener('DOMContentLoaded', function() {
  animateNumber('communities', 100, 1200,'k', 5000);
  animateNumber('message', 100, 2700,'m', 5000);
  
});