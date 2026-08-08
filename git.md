# comandos git
## adicionar usuario
### h3
#### h4
###### h6
para adicionar o seu usuario do Github ao vs code, utilize os comandos abaixo:
```git config --global --list```
*para adicionar usuario*
```git config --global user.name "kaiooalvess"```
*para adcionar email do usuario*
```git config --global user.email "kaioalves6rt@gmail.com"```

## trabalahndo com repositorios 
para inicializar o repositorio local:

```git init```

para trocar o nome do branch:
```git branch -M main```
para exibir status
```git status``````
para utilizar `main'como nome padrao da branch principal para novos repositorios:
```git config --global init.defaultBranch main```
para limpar o termonal bash:
```clear```
adicionando uma commit ao repositorio:
```git commit -m "Arquivos iniciais"```
adicionando o repositorio remoto:
```git remote add origin https://github.com/kaiooalvess/portfolio-front-end.git```


para enviar os arquivos para o repositorio remoto:
```git push origin <main>```
onde <main> e o nome da branch onde estamos trabalhando