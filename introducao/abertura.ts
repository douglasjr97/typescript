function saudar(isManha: string) {
    let saudacao: string;
        if(isManha){
            saudacao = "Bom dia";
        }else{
            saudacao = "Deu ruim"
        }

        return saudacao
}

console.log(saudar(""))