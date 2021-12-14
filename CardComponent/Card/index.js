import prompt from '@system.prompt';
import articleComp from './article.js';

export default {
    data: {
        container: "",
        datetimevalue:"",
        imageClass: '',
        title: "",
        subTitle: "",
        textContainer: "",
        bottomContainer: "",
        pickerdatetime: "",
        dateValue: "",
        description: "",
    },
    props:{
        type: "",
        name:"",
        sub_title: "",
        image: "",
        desc:"",
    },
    onInit() {
        if(this.type==="appointment-card"){
            this.container="appointment-card";
            this.imageClass="image";
            this.title="name";
            this.subTitle= "spec";
            this.textContainer="textContainer";
            this.bottomContainer="bottomContainer";
            this.pickerdatetime="pickerdatetime";
            this.dateValue="text";
        }
//        else if(this.type==="card"){
//            this.container="card";
//        }
        else if(this.type==="article"){
            this.container="article";
            this.imageClass="article_image";
            this.title="title";
            this.subTitle= "subTitle";
            this.textContainer="articleTextContainer";
            this.bottomContainer="bottomBlock";
            this.pickerdatetime="pickerBlock";
            this.dateValue="dateBlock";
            this.description="description";
        }
    },
    datetimeonchange(e) {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        e.month=e.month+1;
        this.datetimevalue=e.day+"/"+e.month+"/"+e.year+"  "+zeroPad(e.hour,2)+":"+zeroPad(e.minute,2);
    },
    datetimeoncancel() {
        prompt.showToast({ message:"datetimeoncancel" })
    },
}
