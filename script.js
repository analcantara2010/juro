function juros_simples(){

    let capital = parseInt(document.getElementById('capital').value);

    let índice = parseInt (document.getElementById ('índice').value);
   
    let tempo = parseInt(document.getElementById('tempo').value);
    índice=índice/100;
     
    let juros=capital*índice*tempo;
    document.getElementById('juros').textContent=juros
    
    let montante=capital+juros;
    document.getElementById('montante').textContent=montante
   
}
