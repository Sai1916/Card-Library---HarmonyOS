import router from '@system.router';
import prompt from '@system.prompt';

export default {
    onClick(){
        prompt.showToast({message:"hello clicked"});
        console.log("card clicked");
    }
}
