
export function functions() {
    //const API_URL = `../../backend/server.php?module=${moduleName}`;

    return {
        async validateExistence(row) {

            const url = `../../backend/server.php?module=${moduleName}&row=${row}`

            const res = await fetch(url);

            if(!res.ok) throw new Error(`Error en validacion`);
            return await res.json(); 
        }
    }
}

