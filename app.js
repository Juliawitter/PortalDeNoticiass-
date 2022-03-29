const app=require('./config/server.js'); //importação do módulo 
const rotaHome=require('./app/routes/home.js')(app); //importar a rotaHome e executá-la. 
const rotaAdmin=require('./app/routes/admin.js')(app); //impotação e execução da rota formulário
const rotaNoticias=require('./app/routes/noticias.js')(app); //importação e execução da rota noticias 




//Cria um servidor rodando na porta 3000
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});