var new21Game = function(N, K, W) {
    if(W<=0 ||K<0 || N<K){
        return 0;
    }
    if(K==0){
        return 1;
    }
    result=new Array(K+W).fill(0);
    let total=0;
    for(let i=0;i<W;i++){
        //取K->N的对应的概率
        if(K+i<=N){
            result[K+i]=1;
            total+=1;
        }
    }
    for(let i=K-1;i>=0;i--){
        //根据全概率公式
        // result[i]=(result[i+1]+result[i+2]+...+result[i+W])/W
        result[i]=total/W;
        //通过滑窗的方法,求出result[K-1]至result[0]
        total-=result[i+W];
        total+=result[i];
    }
    return result[0];
  };

  console.log(new21Game(6,4,10));