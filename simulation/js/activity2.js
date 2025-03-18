let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <br>
      <p style="text-align:left;">
         The intensity(in) of radiation in a direction normal to a black surface is ${in_a2}W/m<sup>2</sup>. <br>
         Calculate the intensity in a direction making an angle ${ang_a2}&deg; with the normal. Also calculate emissive power of the surface.
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Intensity
      </p>
      <div id="act2-i-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ i = i_n\\ cos\\ \β =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-i-inp' class='form-control fs-16px' /><span style="display:contents;"> W/m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_i();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    // in_a2 = random1(100, 151);
    // ang_a2 = random1(25, 41);
    i_a2 = 100 * Math.cos(30 * (Math.PI / 180));
    e_a2 = in_a2 * Math.PI;
    console.log('in_a2', in_a2);
    console.log('ang_a2', ang_a2);
    console.log('i_a2', i_a2);
    console.log('e_a2', e_a2);
}
function a2_verify_i() {
    let inp = (document.getElementById('act2-i-inp'));
    console.log(i_a2);
    if (!verify_values(parseFloat(inp.value), i_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-i-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$i = i_n\\ cos\\ \β  = ${parseFloat(i_a2.toFixed(3))} \\ W/m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Emissive power
      </p>

      <div id="act2-e-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$e = i_n \× \\pi = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-e-inp' class='form-control fs-16px' /><span style="display:contents;">W/m<sup>2</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verfiy_e();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verfiy_e() {
    let inp = (document.getElementById('act2-e-inp'));
    console.log(e_a2);
    if (!verify_values(parseFloat(inp.value), e_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-e-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$e = i_n \× \π = ${parseFloat(e_a2.toFixed(3))} \\ W/m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
         <button class='btn btn-info btn-sm std-btn' onclick='activity3(this);' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map