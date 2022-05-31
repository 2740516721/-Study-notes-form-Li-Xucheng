/* 
    1、判断服务器上面有没有upload目录，如果没有创建这个目录，如果有不做操作
    2、wwwroot文件夹下面有images、css、js及index.html，找出wwwroot目录下面的所有目录，并添加进一个数组
*/

// 1、判断服务器上面有没有upload目录，如果没有创建这个目录，如果有不做操作

//解决方法一：
    /* 
const fs = require('fs');
const path = './upload';
fs.stat(path,(err,data)=>{
        if(err){
            //如果啥都没有，会出现报错信息，则创建upload目录
            mkdir(path);
            return;
        };
        if(data.isDirectory()){
            console.log('目录已存在');
            console.log(data.isDirectory());
        }else{
            //是文件则清除同名文件并且创建目录
            fs.unlink(path,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    //创建目录
                    mkdir(path);
                }
            })
        }
});

function mkdir(path){
    fs.mkdir(path,(err)=>{
        console.log(err);
    });
}; 
        */

//解决方法二（引入第三方包解决mkdirp）：
/* const mkdirp = require('mkdirp');

mkdirp('./upload',function (err){
    if(err){
        console.log(err);
    }
}); */


// 2、wwwroot文件夹下面有images、css、js及index.html，找出wwwroot目录下面的所有目录，并添加进一个数组
/* 
     fs.readdir();读取目录
     fs.stat();检测是文件还是目录

*/
//注意：不可以使用for循环，因为fs中的方法是异步
/* 
    解决方法：
    1、改造for循环，递归实现
    2、nodejs里边的特性  asyns await
*/
const fs = require('fs');
const path = './wwwroot';
var DirectoryArr = [];
fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
  //data是一个数组，这个数组包含文件和目录

    (function getDir(i){
        //执行完成
        if(i==data.length){
            console.log(DirectoryArr);
        };
        fs.stat(path+'/'+data[i],(err,stats)=>{
            if(err){
                console.log(err);
                return;
            };
            if(stats.isDirectory){
                DirectoryArr.push(data[i]);
            };
            getDir(i+1);
        });
    })(0)
});

/* 
for(let i = 0;i<5;i++){
    setInterval(function(){
        console.log(i);
    },500)
} */