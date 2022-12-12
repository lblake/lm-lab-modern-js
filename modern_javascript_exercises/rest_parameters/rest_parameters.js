// Instructions can be found in rest_parameters.md

 export const add = (...args) => {
 return args.reduce((total, current) => total + current, 0)
}

add(1, 2, 3, 4, 5);


