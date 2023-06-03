import React from 'react'

export const usePOSTFetch = async (inputOBJ, URL) => {
    
    const formData = new FormData();

    for (const key in inputOBJ) {
        formData.set(`${key}`, inputOBJ[key]);
    } 

    const OPTIONS = {
        method: 'POST',
        body: formData
    }

    const postRequest = new Request(URL, OPTIONS);
    const response = await fetch(postRequest);
    const data = await response.json();

    return data;
}
