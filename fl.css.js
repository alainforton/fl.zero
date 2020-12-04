// Alain Forton - DP.ESTUDIOS 
// Arquetipos - Fritz Lang - CountDown

// V.NOV21
// Iztapalapa - MX

// CSS


//testing de css por dom para ser todo js


let style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `  .divCont {
								position : absolute;
								top : 50%;
								left : 50%;
								margin-top : -50px;
								margin-left : -50px;
								
							}
							.divFL { width: 10px;
										height: 10px; }
						`;
document.getElementsByTagName('head')[0].appendChild(style);
