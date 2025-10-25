
export async function validateExistence(moduleName, row) {
    
    const url = `../../backend/server.php?module=${moduleName}&row=${row}`;
    const res = await fetch(url);

    if(!res.ok)
        throw new Error(`Error en validacion de materia`);
    
    return await res.json(); 
}

