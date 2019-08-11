function reducer(currentState,newState){
	return{
		...currentState,
		...newState
	}
	}



	function scoreR(a,action){
	
		const d=new Set(a)
	  const b =a.reduce((tot,cur)=>{
		if(!tot[cur]) {
		  tot[cur] =1
		}else{
		  tot[cur] +=1
		}
		return tot
	  },{})
	  const c=Object.values(b)
	  
		  
	  const sum =a.reduce((prev, curr) => prev + curr);
	  console.log(c)
	  console.log(sum)

  
	if(action.type==="UPPER") {
		for (let ob in b){
		  if(ob===action.payload) return b[ob]*Number(ob)
		}
		return 0
  }
		else if(action.type==="YAHTZE"){
			console.log(d.size)
	if (d.size===1) return 50
    }
   
		else if(action.type==="LARGESTRAIGHT"){
return d.size === 5 && (!d.has(1) || !d.has(6)) ? 50:0
    }
		else if(action.type==="SMALLSTRAIGHT"){
 if (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5)))
			{return 30}
		 else if (d.has(3) && d.has(4) && d.has(5) && (d.has(2) || d.has(6)))
			{return 30}else return 0
    }else if(action.type==="FOUROFKIND"){
if(c.includes(4)||c.includes(5)) {return sum}
    }else if(action.type==="FULLHOUSE"){
	   if (c.includes(2) && c.includes(3)) {return 25}else{return 0}
    }else if (action.type==="THREEOFAKIND"){
if(c.includes(3)||c.includes(4)||c.includes(5)){ return sum}
    }else if (action.type==="CHANCE"){
      return sum
    }else{
      return 0
    }
		return 0
		
		
		}
export {scoreR,reducer}
// const a = [ 1, 5, 5, 3, 5 ];
// var myvar = reducer(a, { type: 'UPPER', payload: '5' });
// console.log(myvar);
