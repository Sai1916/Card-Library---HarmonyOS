import prompt from '@system.prompt';
import router from '@system.router';

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
        topContainer: "",
        bottomTextContainer:"",
        like:"",
        view:"",
        valueContainer:"",
        readMore:"",
        readMoreText:"",
    },
    props:{
        type: "",
        name:"",
        sub_title: "",
        image: "",
        desc:"",
        likes:"",
        views: "",
        btncolor:"",
        onClick:"",
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
            this.topContainer="topContainer";
            this.bottomTextContainer="bottomTextContainer";
            this.valueContainer="valueContainerBlock";
            this.readMore="readMoreBlock";
        }
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
            this.topContainer="articleTopContainer";
            this.bottomTextContainer="articleBottomTextContainer"
            this.like="like";
            this.view="view";
            this.valueContainer="valueContainer";
            this.readMore="readMore";
            this.readMoreText="readMoreText";
            this.onClick="onClick";
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

    btnClick(){
        this.$emit('eventType',router.push({
            uri: 'pages/Article/pages/detail/detail',
            params:{
                name: this.name,
                image: this.image,
                subTitle: this.sub_title,
                description: this.desc,
                likeCount: this.likes,
                viewCount: this.views,
            }
        }));
    }
}
