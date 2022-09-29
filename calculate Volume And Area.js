function calculateVolumeAndArea(a) {
let s = (a*a)*6;
let v = a*a*a;
let answer = `Объем куба: ${v}, площадь всей поверхности: ${s}`;
let err = "При вычислении произошла ошибка";
if (a % 1 === 0 && typeof(a) === 'number' && a > 0){
return answer;    
} else {
return err;    
}
}