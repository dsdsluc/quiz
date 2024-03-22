export const questionItem = (index)=>{ 
    return{
        type: "INDEX",
        index: index
    }
}
export const questionItemId = (id)=>{ 
    return{
        type: "ID",
        idQuestion: id
    }
}

export const questionsSelected = (index)=>{ 
    return{
        type: "SELECTED",
        indexSelected: index
    }
}
