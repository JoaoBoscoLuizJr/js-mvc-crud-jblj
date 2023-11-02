const construtorGrafico = {
    render: (params) => {
        const elemento = document.getElementById('root')
        elemento.innerHTML =`
        </div>    
    <p>
        A arquitetura MVC, é um padrão de desenvolvimento Orientado a Objetos.

        <p>Modelo = classes,  interfaces e objetos</p> 
        <p>View = a "visão" onde a interface gráfica do progama é criada </p>
        Controller = controlador das ações de requisição do usuário som a 
        aplicação
    </p>
            <h2>${params.titulo}</h2>
            <img scr="${params.imgScr}">
            <p>${params.conteudo}</p>
        ` 
    }

}
export {construtorGrafico};