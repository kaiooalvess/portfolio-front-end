# formularios 
sao utilizados para envio de informacoes 

## atributos 
*action*: informa qual arquivo sera responsavel pelo processamneto 
do formulario - apenas funciona em back-end 

`exemplos`: envio de email,cadastro de usuario etc. *method*; metodo de envio  de dados do formiulario;

`get`: envia os dados pela url 

ex: http://meusite.com.br/pagina.html?nome=ana&sobrenome=silva

? indica inicio de oarametros enviados 

nome= e o nnome do parametro 

& indica que existe mais de um parametro 

ana e um valor passado no parametro  

*pontos negativos do GET* expoe o conteudo enviado 

*pontos positivos* è possivel compartilhar link ja com os parametros, funciona
no front-end 

`post`: envia os dados d eforma encapsulada pelo navegador nao expoe os dados na url, carrega as informacoes na requisicao http

*pontos negativos*: nao pode ser compartilhado ou acessado deritament pelo front-end

*pontos positivo*: aumenta a seguranca no envio de formulario para tratamento de beck-end  