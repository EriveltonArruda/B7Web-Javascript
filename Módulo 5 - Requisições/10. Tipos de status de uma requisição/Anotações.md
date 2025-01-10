## Códigos de Status das requisições

Na documentação da MDN tem uma lista com os status das requisições.

```
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
```

1. Respostas informativas (100 - 199)
2. Respostas bem-sucedidas (200 - 299)
3. Mensagens de redirecionamento (300 - 399)
4. Respostas de erro do cliente (400 - 499)
5. Respostas de erro do servidor (500 - 599)

Os principais são os 200, 300, 400 e 500.

Todos eles tem variações conforme a documentação, o que importa são esses:

- 200 (muito utilizado), 201 (Algunas APIS usam), 206 (pouco usado, mas ainda se usa).
- 301 (Principal dos 300)
- 400 (raro de acontecer, mas acontece), 401, 403, 404 (muito utilizada) e 405.
- 500 (Principal dos 500), 502.

## Levando para o código

Se colocarmos um .status depois do response teremos o status da requisição.
