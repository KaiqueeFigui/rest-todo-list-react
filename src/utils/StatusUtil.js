export const statusConstantes = {
    "a_fazer": ['A_FAZER', 'A Fazer'],
    "em_progresso": ['EM_PROGRESSO', 'Em Progresso'],
    "feito": ['FEITO', 'Feito']
}

export function geraCorPartindoDoStatus(status){
    if (status.toLowerCase() === "a fazer") {
        return '#f94f4f'
    } else if (status.toLowerCase() === "em progresso") {
        return '#595ef2' 
    } else{
        return '#3ce05a'
    }
}

export function converteStatusEnum(status){
    if (status === statusConstantes.a_fazer[0]){
        return statusConstantes.a_fazer[1]
    } else if (status === statusConstantes.em_progresso[0]) {
        return statusConstantes.em_progresso[1]
    } else{
        return statusConstantes.feito[1]
    }
}