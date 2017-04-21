
function distribution_N(mean, s, min, max){
	var res = min-1
    while (res < min || res > max){
		u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
		v = 1 - Math.random();
		res = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
		res = s*res + mean
	}
	return res
}

function distribution_U(a,b){
	if (a > b)
		return "a > b";
	var res = Math.random() * (b - a) + a;
	return res
}

function distribution_exp(a){
	var u = Math.random();
	var res = -1/a * Math.log(1 - u);
	return res
}

function distribution_point(a){
	return a;
}

function sample(my_dis){ // build one element of sample with distribution my_dis
	if (typeof(my_dis[0]) == 'string'){
		if (my_dis[0] == 'N')
			return distribution_N(my_dis[1], my_dis[2], my_dis[3], my_dis[4])
		if (my_dis[0] == 'p')
			return distribution_point(my_dis[1])
		if (my_dis[0] == 'e'){
			return distribution_exp(my_dis[1])
		}
		if (my_dis[0] == 'U')
			return distribution_U(my_dis[1], my_dis[2])
	}
	else
		var rand = Math.random() * 100;
		t = 0
		for (i = 0; i < my_dis.length; i++ ){
			t += my_dis[i][0];
			if (t > rand){    //define part of distribution
				return sample(my_dis[i][1]);
			}
		}
}

function test1(){ // check how many value in [mean-delta,mean+delta]
	var delta = 0.2;
	tail = 0
	for (i = 0; i < 100; i++){ //size of sample = 100
		t = distribution_N(0,1, -1, 1); 
		if (Math.abs(t) > delta)
			tail++;
	}
	console.assert(tail<20, "tails is too mach in Natural distribution")
}
function test2(){
	var a = Math.random();
	var b = Math.random();
	if (a > b)
		t = distribution_U(b,a);
	else 
		t = distribution_U(a,b);
	console.assert(a >= b, "out of bound in Uniform distribution")
}


function example(){
// The first argument is percents, the second is type of distribution 
// and then parametrs [%, ['type of distribution', parametrs]]

distribution0 = [[70, ['p', 0]], [25, ['N',1, 0.3, 0.5, 1.5]], [5, ['U', 2, 5]]] //example from problem 1

console.log(sample(distribution0));

distribution1 = [[50, distribution0], [50, ['U', 1, 2]]]

console.log(sample(distribution1));
}