import prompt from '@system.prompt';
export default {
    data: {
        type: "",
        datetimevalue:'',
        datetimeselect:'2021-12-14-12-00',
    },
    onInit() {
        if(this.type==="appointment-card"){
            this.type="container";
        }
        else if(this.type==="card"){
            this.type="card";
        }
    },
    datetimeonchange(e) {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        this.datetimevalue=e.day+"/"+e.month+"/"+e.year+"  "+zeroPad(e.hour,2)+":"+zeroPad(e.minute,2);
    },
    datetimeoncancel() {
        prompt.showToast({ message:"datetimeoncancel" })
    },
}
