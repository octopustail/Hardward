//1.构造nodes数组
import * as d3 from 'd3';


module.exports = function(Json){

    let exist = new Array();
    
    let index = new Array()
    
    // for(let i in list){
        // let field = 'inst_name';
    //在开头插入一个源节点origin
    // let origin = 'origin'
    // index.unshift('origin')
    // index.unshift(0)
    
    //////////////////////////////
    for(let j in Json){
        if(exist.indexOf(Json[j].inst_name )== -1){
            index.push(Json[j].inst_name);//小改改;
            exist.push(Json[j].inst_name);
        }
    }
    // }
    
    
    for(let j in Json){
        if(exist.indexOf(Json[j].task_name )== -1){
            index.push(Json[j].task_name);//小改改;
            exist.push(Json[j].task_name);
        }
    }
    
    
    
    for(let j in Json){
        if(exist.indexOf(Json[j].job_name )== -1){
            index.push(Json[j].job_name);//小改改;
            exist.push(Json[j].job_name);
        }
    }
    
    //以下根据index数组构造映射表
    // import * as d3 from 'd3';

    //     map = d3.range(index.length).map(function(i){
    //     return{
    //         tom :i,
    //         jerry:index[i]
    //     }
    // })
    
    let data = new Array()
    for(let a in index){
        let object = new Object()
        object.index = a;//要点：不用映射，直接写进去（因为之前也是按顺序的）
        data.push(object)
    }
    let nodes0 = JSON.stringify(data)
    let dnodes = JSON.parse(nodes0)
    
    console.log(index);
    return dnodes;
    }
    