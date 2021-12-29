import prompt from '@system.prompt';
import router from '@system.router';

export default {
    data: {
        appointment_card: "",
        datetimevalue:"",
        appointmentCard:false,
        profile:false,
        article:false,
        container:"",
        articleCard:"",
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
        user:"",
    },
    onInit() {
        if(this.type==="appointment-card"){
            this.appointmentCard=true;
            this.article=false;
            this.profile=false;
            this.appointment_card="appointment-card";
        }
        else if(this.type==="article"){
            this.appointmentCard=false;
            this.article=true;
            this.profile=false;
            this.articleCard="article";
        }
        else if(this.type==="profile"){
            this.appointmentCard=false;
            this.article=false;
            this.profile=true;
            this.container="profile";
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
