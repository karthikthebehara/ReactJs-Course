let i;
let j;
let n=5;
for(i=1;i<=n;i++){
    let row = "";
    for(j=1;j<=n;j++){0
        if(j<=n-i){
            row +=" ";
        }else{
             row = row+"*";
        }
       
    }
    console.log(row);
}