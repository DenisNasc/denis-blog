---
title: CÁLCULO III - Introdução e EDO's lineares de 1ª ordem
---

## 1. Introdução

O cálculo III é uma sequência direta do cálculo I, onde o foco do estudo são as funções (mais especificamente as de 1 váriável), e tópicos como limite, derivada e integral são introduzidos. Aqui, toda essa base será necessária, todavia o foco será a resolução do que denominamos **equações diferenciais**, as quais nada mais são do que equações, onde a sua solução não será somente um valor numérico como é para as equações aritméticas, tal como

$$
2x - 4 = 0 \\
x = 2
$$

Mas sim, um conjunto de valores, e para esse conjunto de valores você já sabe o nome que se dá: **função**. Assim sendo, durante todo o cálculo III o nosso foco será desenvolver métodos para solucionar equações diferenciais, e essas soluções serão funções, sejam uma funções do tempo, do espaço, ou qualquer outra variável, mas serão funções.

Ademais, vale a pena comentar um pouco sobre essas tais equações diferenciais, e o primeiro ponto a ser levantado é o seu nome. O "diferenciais" indica que serão equações onde derivadas estarão envolvidas, logo, para as solucionar devemos utilizar técnicas de integração. Por esse motivo, é que sempre a solução de uma equação diferencial será uma função, e em todos os métodos de solução de uma equação diferencial uma ou mais integrais estarão envolvidas.

Você deve saber que as equações diferenciais são a base de todo o conhecimento científico acerca da natureza que a humanidade desenvolveu, mesmo elas sendo formalmente definidas somente no século XVII / XVIII com os trabalhos de Newton e Leibniz. Digo isso pelo simples fato de que todo o conhecimento matemático que diz respeito a algum fenômeno pode ser traduzido em equações diferenciais, isso porque como elas trabalham com derivadas (taxas de variações) e como nós só conseguimos medir taxas de variações a partir de uma referência arbitrária, a sua formulação matemática cai como uma luva. Para exemplificar isso, olhe como podemos modelar a [Teoria Populacional Malthusiana](https://pt.wikipedia.org/wiki/Teoria_populacional_malthusiana), a qual dizia que a tava de crescimento populacional era diretamente proporcional à população vigente.

#### Exemplo 1.1

Sejam $P(t)$, $P'(t)$ e $k$ a população vigente, a taxa de variação da população e uma constante de proporcionalidade, podemos escrever a Teoreia Malthusiana como

$$
\frac{P'(t)}{P(t)} = k \ \ \ (1.1)
$$

A equação (1.1) traduz matematicamente a afirmação apresentada anteriormente.

Ademais, perceba que nesse caso faz sentido a variável independente ser o tempo, pois sabemos que uma população é medida em função do tempo, ou seja, conforme o tempo passa uma população varia (aumenta ou diminui).

Para resolver essa equação basta integrar uma vez os dois lados. Assim sendo, a função que descreve o crescimento populacional segundo essa teoria é dada por

$$
P(t) = C \cdot e^{k \cdot t}
$$

Onde $C$ é uma constante que dependerá das condições iniciais do problema. Nesse caso, $C$ pode ser a medida populacional em um tempo arbitrário 0.

Analisando essa solução, de cara, percebemos que ela não representa muito bem a dinâmica populacional, mas isso é fruto de uma má modelagem física do fenômeno estudado, nada tem relação com a matemática.

Em suma, que eu quero que você guarde dessa introdução é a importância e a relevância que as equações diferenciais tem para toda a ciência que estuda a natureza. Tão complexo será para solucionar uma equação diferencial quanto for o fenômeno que ela aborda, isso quer dizer que quanto mais variáveis considerarmos para estudar um determinado fenômeno mais taxas de variações, constantes e relações de proporcionalidade aparecerão na equação diferencial que representa matematicamente esse fenômeno. Existem equações diferenciais que modelam fenômenos tão complexos que a sua solução analítica, ou seja, exata, não foi possível até os dias de hoje e somente é possível resolvê-las numericamente, ou seja, com aproximações.

Por fim, vale ressaltar que o nosso objetivo de estudo serão as **equações diferenciais ordinárias e lineares**, já que essas abrangem uma série de fenômenos práticos e úteis a nível de engenharia, por exemplo, e são mais simples, o que, para um curso de graduação é necessário, apesar de serem abordadas técnicas para resolver equações diferenciais parciais e equações diferenciais não-lineares, mesmo essas sendo limitadas.

## 2. Conceitos

Agora que já fomos introduzidos às equações diferenciais, devemos nos familiarizar com alguns termos que serão de extrema serventia para caracterizar e classificar as equações diferenciais em grupo os quais serão necessários para saber se uma solução serve ou não para uma tal equação diferencial ou não.

### 2.1. Ordem

A ordem de uma equação diferencial é definida pela derivada de maior ordem presente na equação. Então, por exemplo, se em uma equação há uma derivada de ordem 4 e várias outras de ordem mais baixa ou igual a 4, diz-se que tal equação diferencial é de 4ª ordem.

$$
f''''(x) + 2 \cdot g''(x) - x = 0 \space \textcolor{grey}{\ \ \ \text{4ª ordem}}
$$

### 2.2. Ordinária x Parcial

Uma equação é dita ordinária se todas as suas derivadas forem derivadas totais, e é dita parcial se pelo menos uma derivada for parcial. É comum utilizar as abreviações **EDO** e **EDP** para indicar, respectivamente equação diferencial ordinária e equação diferencial parcial.

$$
\frac{df(x)}{dx} + x = 0 \space \textcolor{grey}{\ \ \ \text{EDO}} \\ \space \\
\frac{\partial f(x)}{\partial x} + 4 = 0 \space \textcolor{grey}{\ \ \ \text{EDP}}
$$

### 2.3. Homogênea x Heterogênea

Uma equação diferencial será homogênea quando ela estiver igualada a 0, e será dita heterogênea quando não estiver igualada a 0.

$$
f''(x) + 2 \cdot f(x) = 0 \space \textcolor{grey}{\ \ \ \text{Homogênea}} \\ \ \\
f''(x) + 2 \cdot f(x) = g(y) \space \textcolor{grey}{\ \ \ \text{Heterogênea}}
$$

### 2.4. Linear x Não-linear

Uma equação diferencial será linear quando os coeficientes das derivadas dependerem somente da variável independente ou forem constantes, e será não-linear caso contrário.

$$
x \cdot f''(x) + f(x) + x = 0 \space \textcolor{grey}{\ \ \ \text{Linear}} \\ \ \\
2 \cdot f''(x) + f(x) + x = 0 \space \textcolor{grey}{\ \ \ \text{Linear}} \\ \ \\
f(y) \cdot f''(x) + f(x) + x = 0 \space \textcolor{grey}{\ \ \ \text{Não-linear}} \\ \ \\
f''(x) + y \cdot f(x) + x² = 0 \space \textcolor{grey}{\ \ \ \text{Não-linear}} \\ \ \\
$$

## 3. EDO's lineares de 1ª ordem

Agora que já sabemos como classificar um equação diferencial, começaremos nossos estudos pela classe de equações diferenciais mais simples, as **EDO's lineares de 1ª ordem**. Podemos escrever de forma geral uma equação diferencial dessa família da seguinte maneira

$$
a_1(t) \cdot Y'(t) + a_0(t) \cdot Y(t) = g(t)
$$

Dividindo-se tudo pelo primeiro coeficiente $a_1(t)$, temos

$$
Y'(t) + P(t) \cdot Y(t) = f(t) \ \ \ (3.1)
$$

Essa é a forma geral de uma EDO linear de 1ª ordem com a qual iremos trabalhar. Note que é comum na matemática deixar o primeiro coeficiente das equações como sendo unitário, por isso sempre atente para isso quando for resolver esse tipo ou qualquer outro tipo de equações. Ademais, $a_1(t)$ e $a_0(t)$ são os coeficientes que falamos quando apresentamos a definição de equações diferenciais lineares e não-lineares.

#### Caso 1: $P(t) = 0$

$$
Y'(t) + 0 \cdot Y(t) = f(t) \\ \ \\
Y'(t) = f(t) \\ \ \\
\textcolor{red}{Y(t) = \int f(t) \cdot dt \ \ \ (3.2)} \\ \ \\
$$

Nessa caso, a solução para essa EDO é apenas uma integração simples conforme mostra a equação (3.2).

#### Caso 2: $f(t) = 0$ e $P(t) = a \text{ (constante)}$

$$
Y'(t) + a \cdot Y(t) = 0 \\ \ \\
\int \frac{d \ Y(t)}{Y(t)} = \int -a \cdot dt \\ \ \\
\ln{Y(t)} = -a \cdot t + c \\ \ \\
Y(t) = e^{-at + c} \\ \ \\
Y(t) = e^{-at} \cdot e^{c} \\ \ \\
\textcolor{red}{Y(t) = C \cdot e^{-at} \ \ \ (3.3)} \\ \ \\
$$

Nesse caso, veja como a solução final será sempre uma exponencial, onde a constante $C$ depende da condição inicial do problema. Ademais, os mais atentos, já perceberam que a equação (1.1) se encaixa nessa situação, e, por isso, a sua solução é uma exponencial conforme (3.3).

#### Caso 3: $P(t) = a \text{ (constante)}$

$$
Y'(t) + a \cdot Y(t) = f(t) \\ \ \\
e^{at} \cdot [Y'(t) + a \cdot Y(t)] = e^{at} \cdot f(t) \\ \ \\
\int \frac{d}{dt}[e^{at} \cdot Y(t)] \cdot dt = \int e^{at} \cdot f(t) \cdot dt \ \ \ (3.4)
$$

Antes de continuar, observe que

$$
\frac{d}{dt}[e^{at} \cdot Y(t)] = a \cdot e^{at} \cdot Y(t) + e^{at} \cdot Y'(t) \\ \ \\
\frac{d}{dt}[e^{at} \cdot Y(t)] = e^{at} \cdot [Y'(t) + a \cdot Y(t)]
$$

Assim sendo,

$$
\textcolor{red}{Y(t) = \frac{\int e^{at} \cdot f(t) \cdot dt}{e^{at}} \ \ \ (3.5)}
$$

O ponto mais importante desse caso é introduzir o conceito de **fator integrante**, o qual pode ser entendido como um valor o qual multiplica toda a equação diferencial, tornando-a possível de ser resolvida. Essa é uma técnica recorrente e útil para se resolver equações diferenciais e aparecerá em alguns outros casos. Para esse caso em particular, o fator integrante foi a exponencial $e^{at}$.

#### Caso 4: Geral

$$
Y'(t) + P(t) \cdot Y(t) = f(t)
$$

Para solucionar o caso geral para as EDO's de 1ª ordem lineares, utilizaremos o mesmo conceito de fator integrante utilizado para achar a solução (3.5). Com isso em mente, desejamos encontrar uma função que multiplique a EDO acima e torne-a possível de ser resolvida, e, além disso, desejamos que, ao multiplicar o fator integrante o lado esquerdo da EDO fique com a seguinte cara

$$
\frac{d}{dt}[\mu(t) \cdot Y(t)] \ \ \ (\mu(t) > 0)
$$

Considere

$$
\mu(t) \rarr \text{fator integrante}\\ \ \\
$$

Veja a semelhança com o lado esquerdo da equação (3.4).

Prosseguindo, como aderimos a hipótese que depois de multiplicar o fator integrante pela EDO o lado esquerdo iria torna-se o apresentado acima, onde o fator integrante é estritamente positivo, podemos aplicar a Regra do Produto e desenvolver essa derivada

$$
\mu(t) \cdot Y'(t) + \mu'(t) \cdot Y(t) = \mu(t) \cdot f(t) \\ \ \\
Y'(t) + \frac{\mu'(t)}{\mu(t)} \cdot Y(t) = f(t)
$$

Por analogia com (3.1), obtemos

$$
\frac{\mu'(t)}{\mu(t)} = P(t) \\ \ \\
\int \frac{\mu'(t)}{\mu(t)} \cdot dt = \int P(t) \cdot dt \\ \ \\
\textcolor{red}{\mu(t) = e^{\int P(t) \cdot dt} \ \ \ (3.6)}
$$

Pronto, depois de considerar as hipótese anteriores, conseguimos encontrar um fator integrante válido e que torna as nossas hipóteses válidas.

Desse modo, utilizando a equação (3.6), a solução geral dessa EDO pode ser calculada aplicando-se os mesmo passos do caso anterior (caso 3), o qual é um caso particular deste. Logo,

$$
\textcolor{red}{Y(t) = \frac{\int \mu(t) \cdot f(t) \cdot dt}{\mu(t)} \ \ \ (3.7)}
$$

Por fim, vale ressaltar que a constante de integração da equação (3.6) foi considerada $0$, uma vez que como o fator integrante será multiplicado em ambos os lados da EDO o valor dessa constante é irrelevante, e não esqueça da constante de integração ao resolver o numerador das equações (3.5) e (3.7).
