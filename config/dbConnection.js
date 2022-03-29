const mysql=require('mysql'); //importação do módulo mysql

//rota para a página de notícia
module.exports=function(){
    return mysql.createConnection({
        host:'localhost', 
        user:'root', 
        password:'ifms', 
        database: 'portal_noticias'
    }); // cria conexão com o banco de dados potal_noticias 
}