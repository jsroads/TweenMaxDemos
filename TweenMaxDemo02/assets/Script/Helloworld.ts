const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property({
        type:cc.Node,
    })
    sp: cc.Node = null;

    start () {
        // init logic
        this.label.string = this.text;

    }
    test(){
        console.log("smile----:", JSON.stringify("@@@"));
        TweenMax.to(this.sp, 0.75, {
            bezier:{type:"soft",values:[{x:50, y:500}, {x:300, y:300}, {x:600, y:500}], autoRotate:true},
            ease:"Bounce.easeIn",overwrite:true,repeat:-1,yoyo:true
        });
    }
}
