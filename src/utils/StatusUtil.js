export function geraCorPartindoDoStatus(status){
    if (status.toLowerCase() === "a fazer") {
        return '#f94f4f'
    } else if (status.toLowerCase() === "em progresso") {
        return '#595ef2' 
    } else{
        return '#3ce05a'
    }
}

export const statusConstantes = {
    "a_fazer": ['A_FAZER', 'A Fazer'],
    "em_progresso": ['EM_PROGRESSO', 'Em Progresso'],
    "feito": ['FEITO', 'Feito']
}