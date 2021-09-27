let https=require('https');

function ilia(i){
	https.get(`https://jsonmock.hackerrank.com/api/countries?page=${i}`,res=>{
			let data='';
			res.on('data',chunk=>{
				data+=chunk;
			})
			res.on('end',()=>{
				//console.log(data);
				let a=JSON.parse(data);
				//console.log(a);
				for(let i=0;i<a.data.length;i++){
					if(a.data[i].alpha2Code==='ZW'){
						console.log(a.data[i].name);
						return;
					}
				}
			})
		}).on('error',err=>{
			console.log(err);
		})
}

for(let i=1;i<=25;i++){
	ilia(i);
}
