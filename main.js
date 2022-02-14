const root= new Vue({
    el:'#app',
    data:{
        newToDo:'',
        todos:[ 
             {
                 text:'mangiare',
                 done:false,
             },
             {
                text:'dormire',
                done:false,
            },
            {
                text:'studiare',
                done:false,
            },
            {
                text:'fare la spesa',
                done:false,
            },
            
           ],
        done:true,
    },
    methods:{
        addToDo(){
            
            if(this.newToDo.trim().length>0){

                const newTodOoggetto={
                    text:this.newToDo.trim(),
                    done:false,
                }
                this.todos.push(newTodOoggetto);
                this.newToDo='';

            }

            
        },
        removeToDo(index){
            this.todos.splice(index,1);
        },

        lineThrough(index){
            this.todos[index].done=!this.todos[index].done;
        }
    }
});