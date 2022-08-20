let objectElement = document.querySelector('.cover_articles');
let containerElement = document.querySelector('.cover_articles');

let interpolate = function(b, h, H, start, finish) {
  let offset = (1 - b / (h + H)) * (finish - start) + start;
  return offset;
};

let parallax = function() {
  console.log(containerElement);
  let rect = containerElement.getBoundingClientRect();
  let b = rect.bottom;
  let h = rect.height;
  let H = window.innerHeight;

  let offset = interpolate(b, h, H, 20, -20);
  let scale = interpolate(b, h, H, 0, 2);
  //let op = interpolate(b,h,H,2,0)
  objectElement.style.transform = `translateY(${offset}em) scale(${scale})`;
  //objectElement.style.opacity = op
};

document.addEventListener('scroll', parallax);
