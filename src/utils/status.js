export function formatStatus(status){
    if (status === "A_FAZER"){
        return "A FAZER"
    } else if (status === "EM_PROGRESSO"){
        return "EM PROGRESSO"
    } else if (status === "FEITO") {
        return "FEITO"
    }
}