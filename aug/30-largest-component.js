var largestComponentSize = function(A) {
  const n = A.length;
  let parent = new Array(n).fill().map((_,i)=>i);
  let cnt = new Array(n).fill(1);
  let find  = (i) => parent[i] == i? i : find(parent[i]);
  let union = (i, j) => {
    let p = find(i);
    let q = find(j);
    
    if(p === q) return;
    
    if(cnt[p]<cnt[q]) {
      [p,q] = [q,p];
    }
    cnt[p] += cnt[q];
    parent[q] = p;
  }
  
  const m = Math.max(...A);
  let p = new Array(m+1).fill(true);
  const root = Math.floor(Math.sqrt(m));
  for(let i=2;i<=root;i++) if(p[i]) {
    let k = -1;
    for(let j=0;j<n;++j) {
      if(A[j]%i===0) {
        while(A[j] % i === 0)
          A[j] = Math.floor(A[j]/i);
        if(k===-1) k = j;
        else union(k, j);
      }
    } 
    for(let j=i*i;j<=m;j+=i) p[j] = false;
  }
  
  A = A.map((x,i)=>[x,i]).filter(x=>x[0]>1).sort((a,b)=>a[0]-b[0]);
  for(let i=1;i<A.length;++i) {
    if(A[i-1][0]===A[i][0]) {
      union(A[i-1][1], A[i][1]);
    }
  }
  
  return Math.max(...cnt);
};
