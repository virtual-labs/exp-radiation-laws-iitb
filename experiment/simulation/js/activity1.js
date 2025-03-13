let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Radiation (Heat & Mass Transfer): Laws of Radiation</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>

      <p style="text-align:left">
         Radiation strikes an object with tansmissivity of ${transmissivity} and reflectivity ${reflectivity}, the absorbed flux is indirectly measured as ${Qa_a1}W/m<sup>2</sup>
      </p>
      <br>

      <p>
         $$
            \α + \τ + \γ = 1
         $$
      </p>

      <div id="act1-alpha-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\α = 1 - \τ - \γ  =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:60%" id='act1-alpha-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_alpha();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    transmissivity = parseFloat(random(0.03, 0.05).toFixed(2));
    reflectivity = parseFloat(random(0.3, 0.6).toFixed(1));
    Qa_a1 = random1(90, 111);
    alpha_a1 = 1 - transmissivity - reflectivity;
    Q_a1 = Qa_a1 / alpha_a1;
    console.log('transmissivity', transmissivity);
    console.log('reflectivity', reflectivity);
    console.log('Qa_a1', Qa_a1);
    console.log('alpha_a1', alpha_a1);
    console.log('Q_a1', Q_a1);
}
function a1_verify_alpha() {
    let inp = (document.getElementById('act1-alpha-inp'));
    console.log(alpha_a1);
    if (!verify_values(parseFloat(inp.value), alpha_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-alpha-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\α = 1 - \τ - \γ  = ${parseFloat(alpha_a1.toFixed(3))} $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p>
         $$
            \α = \\frac{\\text{Absorbed flux} (Q_a)}{\\text{Incident flux} (Q)}
         $$
      </p>

      <div id="act1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q = \\frac{Q_a}{\\alpha} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W/m<sup>2</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Q_A();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_Q_A() {
    let inp = (document.getElementById('act1-Q-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(inp.value), Q_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q =\\frac{Q_a}{\\alpha} =  ${parseFloat(Q_a1.toFixed(3))} \\ W/m^2 $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map