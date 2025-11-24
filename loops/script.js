//for loop
//1 to n
// for(let i=1;i<=5;i++){
//     console.log("Shivam Kawadkar");
// }

// let n=prompt("Enter the value:");
// let sum=0;
// for(let i=1;i<=n;i++)
// {
//     sum=i+sum;
// }
// console.log("Sum =",sum);

//While Loop
// let i=1;
// while(i<=5)
// {
//     console.log("hii");
//     i++;
// }
//Do While
// let i=1;
// do
// {
//     console.log(i);
//     i++;
// }
// while(i<=5);

//For - Of loop

// let str = "Shivam Kawadkar";
// let size=0;
// for (let i of str) {
//     console.log("i =", i);
//     size++;
// }
// console.log("size =",size);

//For - In loop

let student={
    name : "Shivam",
    Rollno : 123,
    IsReal : true,
}
for(let i in student)
{
    console.log("key =",i ,"value =",student[i]);
}