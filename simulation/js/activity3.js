let act3_div;
function activity3(btn) {
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
      <h3>Activity 3</h3>
      <br>
      <br>
      <p style="text-align:left;">
         Calculate the heat flux  due to thermal radiation from black surface at ${T_C_a3}&deg;C. <br>
         Find the maximum value of monochromatic emissive power and the wavelength at which it occurs. <br>
         Also determine the fraction of radiation emitted in the region of wavelength from ${W_s}&mu;m to ${W_e}&mu;m. <br>
         &sigma; = 5.67 &times; 10<sup>-8</sup>
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Heat flux
      </p>
      <div id="act3-QA-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ \\frac{Q}{A}= \σT^4 =  $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act3-QA-inp' class='form-control fs-16px' /><span style="display:contents;"> &times; 10<sup>6</sup> &emsp; W/m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_QA();' id='act3-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function internal_calculation3() {
    T_C_a3 = random1(4000, 5001);
    T_K_a3 = T_C_a3 + 273;
    Q_A = sigma * Math.pow(T_K_a3, 4);
    lambda_m_M = 0.0029 / T_K_a3;
    lambda_mu_m_M = lambda_m_M * Math.pow(10, 6);
    e_lambda =
        (2 * Math.PI * C1) /
            (Math.pow(lambda_m_M, 5) * (Math.exp(C2 / (lambda_m_M * T_K_a3)) - 1));
    h_mu_m = (lambda_mu_m_5 - lambda_mu_m_1) / 4;
    h_m = h_mu_m / Math.pow(10, 6);
    lambda_mu_m_2 = lambda_mu_m_1 + h_mu_m;
    lambda_mu_m_3 = lambda_mu_m_2 + h_mu_m;
    lambda_mu_m_4 = lambda_mu_m_3 + h_mu_m;
    lambda_m_1 = lambda_mu_m_1 / Math.pow(10, 6);
    lambda_m_2 = lambda_mu_m_2 / Math.pow(10, 6);
    lambda_m_3 = lambda_mu_m_3 / Math.pow(10, 6);
    lambda_m_4 = lambda_mu_m_4 / Math.pow(10, 6);
    lambda_m_5 = lambda_mu_m_5 / Math.pow(10, 6);
    e_lambda_1 =
        (2 * Math.PI * C1) /
            (Math.pow(lambda_m_1, 5) * (Math.exp(C2 / (lambda_m_1 * T_K_a3)) - 1));
    e_lambda_2 =
        (2 * Math.PI * C1) /
            (Math.pow(lambda_m_2, 5) * (Math.exp(C2 / (lambda_m_2 * T_K_a3)) - 1));
    e_lambda_3 =
        (2 * Math.PI * C1) /
            (Math.pow(lambda_m_3, 5) * (Math.exp(C2 / (lambda_m_3 * T_K_a3)) - 1));
    e_lambda_4 =
        (2 * Math.PI * C1) /
            (Math.pow(lambda_m_4, 5) * (Math.exp(C2 / (lambda_m_4 * T_K_a3)) - 1));
    e_lambda_5 =
        (2 * Math.PI * C1) /
            (Math.pow(lambda_m_5, 5) * (Math.exp(C2 / (lambda_m_5 * T_K_a3)) - 1));
    f_rad_btwn_wave =
        (h_m / 3) *
            (e_lambda_1 +
                4 * e_lambda_2 +
                2 * e_lambda_3 +
                4 * e_lambda_4 +
                e_lambda_5);
    f_radiation = (f_rad_btwn_wave / Q_A) * 100;
    console.log('T_C_a3', T_C_a3);
    console.log('T_K_a3', T_K_a3);
    console.log('Q_A', Q_A);
    console.log('lambda_m_M', lambda_m_M);
    console.log('lambda_mu_m_M', lambda_mu_m_M);
    console.log('e_lambda', e_lambda);
    console.log('h_mu_m', h_mu_m);
    console.log('lambda_mu_m_1', lambda_mu_m_1);
    console.log('lambda_mu_m_2', lambda_mu_m_2);
    console.log('lambda_mu_m_3', lambda_mu_m_3);
    console.log('lambda_mu_m_4', lambda_mu_m_4);
    console.log('lambda_mu_m_5', lambda_mu_m_5);
    console.log('lambda_m_1', lambda_m_1);
    console.log('lambda_m_2', lambda_m_2);
    console.log('lambda_m_3', lambda_m_3);
    console.log('lambda_m_4', lambda_m_4);
    console.log('lambda_m_5', lambda_m_5);
    console.log('e_lambda_1', e_lambda_1);
    console.log('e_lambda_2', e_lambda_2);
    console.log('e_lambda_3', e_lambda_3);
    console.log('e_lambda_4', e_lambda_4);
    console.log('e_lambda_5', e_lambda_5);
    console.log('f_rad_btwn_wave', f_rad_btwn_wave);
    console.log('f_radiation', f_radiation);
}
function a3_verify_QA() {
    let inp = (document.getElementById('act3-QA-inp'));
    console.log(Q_A / Math.pow(10, 6));
    if (!verify_values(parseFloat(inp.value), Q_A / Math.pow(10, 6))) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-QA-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\frac{Q}{A}= \σT^4 = ${parseFloat((Q_A / Math.pow(10, 6)).toFixed(3))} \× 10^6 \\ W/m^2 $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Wavelength (max emissive power)
      </p>

      <p>
         $$
            \λ_mT = 0.0029
         $$
      </p>

      <div id="act3-lambda-m-div">
         
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\λ_m = \\frac{0.0029}{T} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-lambda-m-inp' class='form-control fs-16px' /><span style="display:contents;">&mu;m</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verfiy_lambda_m();' id='act3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verfiy_lambda_m() {
    let inp = (document.getElementById('act3-lambda-m-inp'));
    console.log(lambda_mu_m_M);
    if (!verify_values(parseFloat(inp.value), lambda_mu_m_M)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-lambda-m-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\λ_m = \\frac{0.0029}{T} = ${parseFloat(lambda_mu_m_M.toFixed(3))} \μm $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Max monochromatic emissive power
      </p>

      <p>
         $$
            C_1 = 0.596 \× 10^{-16}
         $$
         $$
            C_2 = 0.0143987
         $$
      </p>

      <div id="act3-eb-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$e_{b\λ} = \\frac{2\πC_1}{\λ_m^5\\left(e^{\\frac{C_2}{\λ_mT}} - 1\\right)} = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act3-eb-inp' class='form-control fs-16px' /><span style="display:contents;">&times;10<sup>13</sup> &emsp; W/m<sup>2</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verfiy_eb();' id='act3-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verfiy_eb() {
    let inp = (document.getElementById('act3-eb-inp'));
    console.log(e_lambda / Math.pow(10, 13));
    if (!verify_values(parseFloat(inp.value), e_lambda / Math.pow(10, 13))) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-eb-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$e_{b\λ} = \\frac{2\πC_1}{\λ_m^5\\left(e^{\\frac{C_2}{\λ_mT}} - 1\\right)} = ${parseFloat((e_lambda / Math.pow(10, 13)).toFixed(3))} \× 10^{13} \\ W/m^2 $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Fraction of radiation between wavelength ${W_s}&mu;m to ${W_e}&mu;m using Simpson's 1/3<sup>rd</sup> Rule
      </p>

      <p>
         $$
            \λ_1 = ${W_s}\μm 
         $$
         $$
            \λ_5 = ${W_e} \μm
         $$
      </p>

      <div id="act3-h-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$\Δ\λ = h = \\frac{\\lambda_5 - \\lambda_1}{4} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-h-inp' class='form-control fs-16px' /><span style="display:contents;">&mu;m</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verfiy_h();' id='act3-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verfiy_h() {
    let inp = (document.getElementById('act3-h-inp'));
    console.log(h_mu_m);
    if (!verify_values(parseFloat(inp.value), h_mu_m)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-h-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\Δ\λ = h = \\frac{\\lambda_5 - \\lambda_1}{4} = ${parseFloat(h_mu_m.toFixed(3))} \μm $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p>
         $$
            \λ_1 = ${W_s}\μm 
         $$
      </p>

      <div id="act3-lambda-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\\lambda_2 = \\lambda_1 + \Δ\λ = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-lambda2-inp' class='form-control fs-16px' /><span style="display:contents;">&mu;m</span>
            </div>

         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\\lambda_3 = \\lambda_2 + \Δ\λ= $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-lambda3-inp' class='form-control fs-16px' /><span style="display:contents;">&mu;m</span>
            </div>

         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\\lambda_4 = \\lambda_3 + \Δ\λ = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-lambda4-inp' class='form-control fs-16px' /><span style="display:contents;">&mu;m</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verfiy_lambda();' id='act3-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verfiy_lambda() {
    let inp2 = (document.getElementById('act3-lambda2-inp'));
    let inp3 = (document.getElementById('act3-lambda3-inp'));
    let inp4 = (document.getElementById('act3-lambda4-inp'));
    console.log(lambda_mu_m_2, lambda_mu_m_3, lambda_mu_m_4);
    if (!verify_values(parseFloat(inp2.value), lambda_mu_m_2)) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    if (!verify_values(parseFloat(inp3.value), lambda_mu_m_3)) {
        inp3.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp3.style.border = '1px solid #ced4da';
        inp3.disabled = true;
    }
    if (!verify_values(parseFloat(inp4.value), lambda_mu_m_4)) {
        inp4.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp4.style.border = '1px solid #ced4da';
        inp4.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-lambda-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\lambda_2 = \\lambda_1 + \Δ\λ = ${parseFloat(lambda_mu_m_2.toFixed(3))} \μm $$
         $$\\lambda_3 = \\lambda_2 + \Δ\λ = ${parseFloat(lambda_mu_m_3.toFixed(3))} \μm $$
         $$\\lambda_4 = \\lambda_3 + \Δ\λ = ${parseFloat(lambda_mu_m_4.toFixed(3))} \μm $$
         $$\\lambda_5 = \\lambda_4 + \Δ\λ = ${lambda_mu_m_5} \μm $$
         
      </p>
      <br>
   `;
    act3_div.innerHTML += `

      <div id="act3-eb-lambda-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$e_{b\λ_1} = \\frac{2\πC_1}{\λ_1^5\\left(e^{\\frac{C_2}{\λ_1T}} - 1\\right)} = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act3-eb1-inp' class='form-control fs-16px' /><span style="display:contents;">&times;10<sup>13</sup> &emsp; W/m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$e_{b\λ_2} = \\frac{2\πC_1}{\λ_2^5\\left(e^{\\frac{C_2}{\λ_2T}} - 1\\right)} = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act3-eb2-inp' class='form-control fs-16px' /><span style="display:contents;">&times;10<sup>13</sup> &emsp; W/m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$e_{b\λ_3} = \\frac{2\πC_1}{\λ_3^5\\left(e^{\\frac{C_2}{\λ_3T}} - 1\\right)} = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act3-eb3-inp' class='form-control fs-16px' /><span style="display:contents;">&times;10<sup>13</sup> &emsp; W/m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$e_{b\λ_4} = \\frac{2\πC_1}{\λ_4^5\\left(e^{\\frac{C_2}{\λ_4T}} - 1\\right)} = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act3-eb4-inp' class='form-control fs-16px' /><span style="display:contents;">&times;10<sup>13</sup> &emsp; W/m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$e_{b\λ_5} = \\frac{2\πC_1}{\λ_5^5\\left(e^{\\frac{C_2}{\λ_5T}} - 1\\right)} = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act3-eb5-inp' class='form-control fs-16px' /><span style="display:contents;">&times;10<sup>13</sup> &emsp; W/m<sup>2</sup></span>
            </div>
         </div>
         
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verfiy_eb_lambda();' id='act3-vf-btn6'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verfiy_eb_lambda() {
    let inp1 = (document.getElementById('act3-eb1-inp'));
    let inp2 = (document.getElementById('act3-eb2-inp'));
    let inp3 = (document.getElementById('act3-eb3-inp'));
    let inp4 = (document.getElementById('act3-eb4-inp'));
    let inp5 = (document.getElementById('act3-eb5-inp'));
    console.log(e_lambda_1 * Math.pow(10, 13), e_lambda_2 * Math.pow(10, 13), e_lambda_3 * Math.pow(10, 13), e_lambda_4 * Math.pow(10, 13), e_lambda_5 * Math.pow(10, 13));
    if (!verify_values(parseFloat(inp1.value), e_lambda_1 / Math.pow(10, 13))) {
        inp1.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp1.style.border = '1px solid #ced4da';
        inp1.disabled = true;
    }
    if (!verify_values(parseFloat(inp2.value), e_lambda_2 / Math.pow(10, 13))) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    if (!verify_values(parseFloat(inp3.value), e_lambda_3 / Math.pow(10, 13))) {
        inp3.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp3.style.border = '1px solid #ced4da';
        inp3.disabled = true;
    }
    if (!verify_values(parseFloat(inp4.value), e_lambda_4 / Math.pow(10, 13))) {
        inp4.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp4.style.border = '1px solid #ced4da';
        inp4.disabled = true;
    }
    if (!verify_values(parseFloat(inp5.value), e_lambda_5 / Math.pow(10, 13))) {
        inp5.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp5.style.border = '1px solid #ced4da';
        inp5.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-eb-lambda-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$e_{b\λ_1} = \\frac{2\πC_1}{\λ_1^5\\left(e^{\\frac{C_2}{\λ_1T}} - 1\\right)} = ${parseFloat((e_lambda_1 / Math.pow(10, 13)).toFixed(3))} \× 10^{13} \\ W/m^2 $$
         $$e_{b\λ_2} = \\frac{2\πC_1}{\λ_2^5\\left(e^{\\frac{C_2}{\λ_2T}} - 1\\right)} = ${parseFloat((e_lambda_2 / Math.pow(10, 13)).toFixed(3))} \× 10^{13} \\ W/m^2 $$
         $$e_{b\λ_3} = \\frac{2\πC_1}{\λ_3^5\\left(e^{\\frac{C_2}{\λ_3T}} - 1\\right)} = ${parseFloat((e_lambda_3 / Math.pow(10, 13)).toFixed(3))} \× 10^{13} \\ W/m^2 $$
         $$e_{b\λ_4} = \\frac{2\πC_1}{\λ_4^5\\left(e^{\\frac{C_2}{\λ_4T}} - 1\\right)} = ${parseFloat((e_lambda_4 / Math.pow(10, 13)).toFixed(3))} \× 10^{13} \\ W/m^2 $$
         $$e_{b\λ_5} = \\frac{2\πC_1}{\λ_5^5\\left(e^{\\frac{C_2}{\λ_5T}} - 1\\right)} = ${parseFloat((e_lambda_5 / Math.pow(10, 13)).toFixed(3))} \× 10^{13} \\ W/m^2 $$
         
      </p>
      <br>
   `;
    act3_div.innerHTML += `

      <div id="act3-f-lambda-div">
         <p>
            $$
               \∫_{\\lambda_1}^{\\lambda_5}f(\\lambda)d\λ = \\frac{h}{3}\\left[e_{b\\lambda_1} + 4e_{b\\lambda_2} + 2e_{b\\lambda_3} + 4e_{b\\lambda_4} + e_{b\\lambda_5} \\right]
            $$
         </p>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\∫_{\\lambda_1}^{\\lambda_5}f(\\lambda)d\λ = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act3-f-lambda-inp' class='form-control fs-16px' /><span style="display:contents;"> &times; 10<sup>3</sup> &emsp; W/m<sup>2</sup></span>
            </div>
         </div>
         
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verfiy_f_lambda();' id='act3-vf-btn7'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verfiy_f_lambda() {
    let inp = (document.getElementById('act3-f-lambda-inp'));
    console.log(f_rad_btwn_wave / Math.pow(10, 3));
    if (!verify_values(parseFloat(inp.value), f_rad_btwn_wave / Math.pow(10, 3))) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-f-lambda-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\∫_{\\lambda_1}^{\\lambda_5}f(\\lambda)d\λ = \\frac{h}{3}\\left[e_{b\\lambda_1} + 4e_{b\\lambda_2} + 2e_{b\\lambda_3} + 4e_{b\\lambda_4} + e_{b\\lambda_5} \\right] = ${parseFloat((f_rad_btwn_wave / Math.pow(10, 3)).toFixed(3))} \× 10^3 \\ W/m^2 $$
         
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Fraction of radiation
      </p>
      <p>
         $$
            \\text{Fraction of radiation} = \\frac{\∫_{\\lambda_1}^{\\lambda^5}f(\\lambda)d\\lambda}{\∫_0^{\\lambda}f\λ d\\lambda} = \\frac{\∫_{\\lambda_1}^{\\lambda^5}f(\\lambda)d\\lambda}{\\frac{Q}{A}}
         $$
      </p>
      <div id="act3-f-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\\frac{\∫_{\\lambda_1}^{\\lambda^5}f(\\lambda)d\\lambda}{\\frac{Q}{A}} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-f-inp' class='form-control fs-16px' /><span style="display:contents;"> %</span>
            </div>
         </div>
         
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verfiy_f();' id='act3-vf-btn8'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verfiy_f() {
    let inp = (document.getElementById('act3-f-inp'));
    console.log(f_radiation);
    if (!verify_values(parseFloat(inp.value), f_radiation)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-f-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\frac{\∫_{\\lambda_1}^{\\lambda^5}f(\\lambda)d\\lambda}{\\frac{Q}{A}} = ${parseFloat(f_radiation.toFixed(2))} \\ \\% $$
         
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map