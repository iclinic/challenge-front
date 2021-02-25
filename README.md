![Welcome](logo-small.png?raw=true "Bem vindo!")
# Desafio de front-end iClinic

Bem vindo à bordo, Padawan.

Nesse desafio, você deve consumir a SWAPI (Uma famosa api do Star Wars).

Você deve fazer duas requisições **ao mesmo tempo** através do clique de um botão:
- `https://swapi.dev/api/people/1`  -> Recupera informações do lado da luz, seu mestre será Luke Skywalker.
- `https://swapi.dev/api/people/4`  -> Recupera informações do lado sombrio, seu mestre será Darth Vader. 

Com base no **tempo de resposta do serviço** e no seu alinhamento da “força”, aquela requisição que **retornar os dados primeiro** irá determinar quem será seu mestre e em que lado da força você está alinhado.

## UI
Nosso time já elaborou as telas no Figma, você pode visualizar uma apresentação de como funciona [**aqui**](https://www.figma.com/proto/lvmezOyyLVXgUQxXGgcGT6/iClinic-Frontend-Challenge?node-id=5%3A5&scaling=min-zoom). 

Para informações de fontes, cores, espaçamentos, clique [**aqui**](https://www.figma.com/file/lvmezOyyLVXgUQxXGgcGT6/iClinic-Frontend-Challenge?node-id=0%3A1) (você deve criar uma conta gratuita no Figma).

As imagens dos mestres, estão localizadas nesse repositório em `images-masters`.

Sua UI deve funcionar da seguinte forma:

- O botão "start" e "choose your path again, Padawan", deve chamar as duas requisições e retornar a primeira resposta, conforme descrito acima. 

- Na segunda tela do mestre, sua imagem deverá ser exibida no **centro da tela**, juntamente com **seu nome** e **cor de fundo correspondente** (preta para o lado sombrio e amarelo para o lado da luz).

- Ainda nessa segunda tela, deve existir um **link para voltar** para a página de boas vindas do início do desafio.

- O botão para escolher novamente seu caminho na força apresentado na segunda tela, deve ser **desativado** quando uma **requisição estiver em andamento** e também apresentar um feedback visual para o usuário (sugestão: ajustar opacidade do botão para .5).

- Na versão mobile, atente-se pelo fato de ser responsiva para larguras de tela menores que `800px`.
Repare também que foi alterada a ordem de apresentação do **nome do mestre**, **botão para chamar novamente a força** e **imagem**.

- Testes são essenciais, foque em garantir a experiência do usuário com testes que façam sentido.

### Desktop

> Tela de boas vindas.

![Welcome](bem-vindo.png?raw=true "Bem vindo!")

> Tela do lado sombrio da força.

![Dark Side](dark-side.png?raw=true "Dark side")

> Tela do lado da luz.

![Light Side](light-side.png?raw=true "Light side")

>  Versão responsiva `< 800px`.

![Dark Side Mobile](dark-side-mobile.png?raw=true "Dark side mobile")

## Hospedagem
O código fonte deve ser hospedado em algum repositório Git aberto para que possamos visualizá-lo, recomendamos o Github.
Para avaliarmos a implementação em funcionamento, sugerimos o Github pages, Netlify, now.sh, AWS Amplify, etc.

Boa sorte! Que a força esteja com você.
