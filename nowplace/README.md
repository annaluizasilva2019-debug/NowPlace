
# NowPlace

## Integrantes
- Nome do integrante 1:
- Nome do integrante 2:

## Descrição
O NowPlace é um projeto de rede social desenvolvido para a atividade de Programação Front-End (SA2). Sua proposta é permitir o registro de momentos atuais por meio de fotografias, descrição e localização do dispositivo, além da descoberta de publicações próximas.

## Tecnologias
- HTML5
- CSS3
- JavaScript
- MediaDevices API
- Canvas API
- Geolocation API
- Fetch API
- localStorage
- Drag and Drop API
- DOM
- Promises e async/await

## Funcionalidades implementadas
- Identificação do usuário.
- Captura da foto do ambiente e, em seguida, da selfie.
- Pré-visualização das duas fotografias.
- Encerramento das faixas da câmera após a captura.
- Obtenção das coordenadas por geolocalização.
- Salvamento local dos registros capturados.
- Controle de acesso ao feed por 24 horas utilizando localStorage.
- Seleção do raio de busca.
- Cálculo da distância entre coordenadas.
- Estrutura para consulta de Nows por API.
- Estrutura para consulta de endereço legível por API.
- Cards com fotos sobrepostas e troca por arrastar e soltar.
- Tratamento de erros de câmera, GPS e armazenamento.

## Como executar
1. Abra a pasta do projeto no Visual Studio Code.
2. Execute o `index.html` usando uma extensão como Live Server.
3. Permita o acesso à câmera e à localização quando solicitado.
4. Informe seu nome e descreva o momento.
5. Capture primeiro a foto do ambiente e depois a selfie.
6. Confira as imagens e registre a localização.
7. Salve o Now no dispositivo.

A câmera e a geolocalização exigem um contexto seguro, como localhost ou HTTPS.

## API da atividade
A documentação da API disponibilizada pela professora ainda não foi recebida.

Nenhum endpoint da API da atividade foi confirmado ou integrado nesta versão. As funções de integração estão preparadas para adaptação quando forem conhecidos os contratos reais da API.

Após receber a documentação, registrar aqui:
- URL base da API.
- Endpoint e método HTTP para publicação.
- Endpoint e método HTTP para consultar Nows próximos.
- Endpoint e método HTTP para identificar o endereço a partir das coordenadas.
- Formato real das requisições e respostas.
- Tratamento de autenticação e erros, se necessário.

## Limitações atuais
Os registros ficam somente no navegador utilizado. Eles não são publicados para outros usuários. A consulta de Nows próximos e a identificação do endereço por serviço externo dependem da configuração da API real.

## Repositório
Adicionar aqui o link do repositório GitHub do projeto.
