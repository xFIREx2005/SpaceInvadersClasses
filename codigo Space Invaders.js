class Jogo {
    statusJogo;
    nivel;
    painel;

    iniciar()
    {
        this.painel = new Painel(tamanho);
    }

    sair()
    {

    }

    pausar()
    {

    }

    reiniciar()
    {

    }
}

class Painel {
    jogador;
    inimigo;
    barricada;
    tamanho;
    pontuacao;
    numeroInimigos;
    numeroBarricada;

    constructor(tamanho)
    {
        this.tamanho = tamanho;
        this.iniciar();
    }

    iniciar()
    {
        this.jogador = new Jogador(posicaoX, posicaoY, velocidade, forma, vidas);
        
        for(var i=0; i<this.numeroInimigos; i++)
        {
            this.inimigo = new Inimigo(posicaoX, posicaoY, velocidade, forma); 
        }  

        for(var i=0; i<this.numeroBarricada; i++)
        {
            this.barricada = new Barricada; 
        }       
    }

    pontuacao()
    {
        this.aumentarPontuacao;
        this.exibirPontuacao;
    }

    aumentarPontuacao()
    {
        return this.pontuacao;
    }

    exibirPontuacao()
    {

    }
}

class Jogador {
    checarTeclas;
    posicaoX;
    posicaoY;
    velocidade;
    vidas;
    forma;
    projetil;

    constructor(posicaoX, posicaoY, velocidade, forma, vidas)
    {
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.velocidade = velocidade;
        this.forma = forma;
        this.vidas = vidas;
    }

    movimentar()
    {

    }

    atirar()
    {
        this.projetil = new Projetil(posicaoX, posicaoY, velocidade, forma); 
    }

    vida()
    {

    }

    checarColisao()
    {

    }

    destruir()
    {

    }
    
    derrota()
    {

    }
}

class Inimigo {
    posicaoX;
    posicaoY;
    velocidade;
    forma;
    destruicao;
    projetil;

    constructor(posicaoX, posicaoY, velocidade, forma)
    {
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.velocidade = velocidade;
        this.forma = forma;
    }

    movimentar()
    {

    }

    atirar()
    {
        this.projetil = new Projetil(posicaoX, posicaoY, velocidade, forma); 
    }

    checarColisao()
    {

    }

    destruir()
    {

    }
}

class Projetil {
    posicaoX;
    posicaoY;
    velocidade;
    forma;
    verificarTiro;

    constructor(posicaoX, posicaoY, velocidade, forma)
    {
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.velocidade = velocidade;
        this.forma = forma;
    }

    movimentar()
    {

    }

    checarColisao()
    {

    }

    destruir()
    {

    }
}

class Barricada {
    posicaoX;
    posicaoY;
    forma;
    estado;

    constructor(posicaoX, posicaoY, forma)
    {
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.forma = forma;
    }

    destruirParte()
    {

    }

    destruirBarreira()
    {

    }

    checarColisao()
    {

    }
}