//api Intl

let date = new Date();
 console.log(new Intl.DateTimeFormat('pt-BR').format(date));
 console.log(new Intl.DateTimeFormat('en-US').format(date));

 // apresentando apenas o mês
 console.log(new Intl.DateTimeFormat('pt-BR', {month: 'long'}).format(date));

 /// number
 console.log(new Intl.NumberFormat('pt-BR').format(2.2));
 
 // minimo de casa decimais
 console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits:2}).format(2000.22));

 // maximo de casas decimais
 console.log(new Intl.NumberFormat('pt-BR', {maximumFractionDigits:2}).format(2000.55555555));

 console.log(new Intl.NumberFormat('pt-BR', {
                                                minimumFractionDigits:2,
                                                maximumFractionDigits:2,
                                                currency : 'EUR',
                                                style:'currency'
                                            }).format(2000.55555555));

console.log(new Intl.NumberFormat('pt-BR', {
                                                minimumFractionDigits:2,
                                                maximumFractionDigits:2,
                                                currency : 'BRL',
                                                style:'currency'
                                            }).format(2000.55555555));