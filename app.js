const email = document.querySelector(".email");
const password = document.querySelector(".password");
const span_1 = Array.from(document.querySelectorAll(".span_1"));
const span_2 = Array.from(document.querySelectorAll(".span_2"));

span_1.forEach(function (element,index) {
  email.addEventListener("click", function () {
    element.classList.add("active");
    // document.querySelector("#span_e").style.transitionDelay = '0ms';
    // document.querySelector("#span_m").style.transitionDelay = '50ms';
    // document.querySelector("#span_a").style.transitionDelay = '100ms';
    // document.querySelector("#span_i").style.transitionDelay = '150ms';
    // document.querySelector("#span_l").style.transitionDelay = '200ms';
    element.style.transitionDelay = `${index*50}ms`;
    span_2.forEach(function (event) {
      var y = password.value.length;
      if(y==0){
        event.classList.remove("active");
      }
    });
  });
});

span_2.forEach(function (element,index) {
  password.addEventListener("click", function () {
    element.classList.add("active");
    // document.querySelector("#span_p").style.transitionDelay = '0ms';
    // document.querySelector("#span_a_1").style.transitionDelay = '50ms';
    // document.querySelector("#span_s").style.transitionDelay = '100ms';
    // document.querySelector("#span_s_1").style.transitionDelay = '150ms';
    // document.querySelector("#span_w").style.transitionDelay = '200ms';
    // document.querySelector("#span_o").style.transitionDelay = '250ms';
    // document.querySelector("#span_r").style.transitionDelay = '300ms';
    // document.querySelector("#span_d").style.transitionDelay = '350ms';
    element.style.transitionDelay = `${index*50}ms`
    span_1.forEach(function (event) {
      var x = email.value.length;
      if(x==0){
      event.classList.remove("active");
      } 
    });

  });
});
