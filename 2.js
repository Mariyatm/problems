MAX_SCORE = 73; //72 - maximum score, because it's 9*8 

function calc(a, b,c){ // check if a=b=c
	if (a == b && b ==c )
		return a;
	else
		return 0;
}

function shift_ind(sh){ // calculate a points in sh
	res = 0; 
	for (t = 0; t < 3; t++){
		res += calc(sh[0][t], sh[1][t], sh[2][t]);
		res += calc(sh[t][0], sh[t][1], sh[t][2]);
	}
	res += calc(sh[0][0], sh[1][1], sh[2][2]);
	res += calc(sh[0][2], sh[1][1], sh[2][0]);
	return(res);
}

function shift(sh,lines){ // build 3x3 by shift
	var shInd=[[],[],[]];
	for (i = 0; i < 3; i++){
		for (j = 0; j < 3; j++){
			shInd[i][j] = lines[j][(sh[j] + i) % lines[j].length];   
		}
	}
	return shift_ind(shInd);
}


function compute_scores(lines){
	var res = [];
	for (i = 0; i < MAX_SCORE; i++) { 
		res[i] = [];
	}
	for (ii = 0; ii < lines[0].length; ii++) {
		for (jj = 0; jj < lines[1].length; jj++){
			for (kk = 0; kk < lines[2].length; kk++){
				res[shift([ii,jj,kk], lines)].push([ii,jj,kk]);			
			}
		}

	}
	return res;
}

function test(lines){
	res = compute_scores(lines);
	sum = 0; 
	for (i = 0; i < MAX_SCORE; i++){
		sum += res[i].length; 
	}
	console.assert(sum == lines[0].length*lines[1].length*lines[2].length, 'wrong numbers')
	//console.log(sum)
}
function example(){
	lines_0=[[1,2,3],[1,2,1],[1,2,3]];
	res_0 = compute_scores(lines_0);
	test(lines_0);
	
	lines_1=[[1,2,3,4,5],[1,1,1],[9,9,1,1,2]];
	res_1 = compute_scores(lines_1);
}


