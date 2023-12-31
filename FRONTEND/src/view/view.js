import { formNewUser } from "./form-components.js";
import { resultView } from "./table-components.js";

const view = {
    render:()=>{
        formNewUser.render();
        resultView.render();
    },

    update:(userArray, userToUpdate)=>{        
        resultView.update(userArray);
        formNewUser.update(userToUpdate);
        console.log(userArray, userToUpdate);
    },

    updateForm:(userToUpdate)=>{ 
        formNewUser.update(userToUpdate);
    }
}

export {view}