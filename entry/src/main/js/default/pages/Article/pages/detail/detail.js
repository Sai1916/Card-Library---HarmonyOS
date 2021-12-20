import router from '@system.router';

export default {
    data: {
        name: '',
        image:'',
        subTitle:'',
        description:'',
        likeCount:'',
        viewCount:'',
    },
    Init(){
        this.name  = this.name;
        this.image = this.image;
        this.subTitle = this.subTitle;
        this.description = this.description;
        this.likeCount = this.likeCount;
        this.viewCount = this.viewCount;
    },
    back(){
        console.log(this.name);
        router.back();
    }
}
