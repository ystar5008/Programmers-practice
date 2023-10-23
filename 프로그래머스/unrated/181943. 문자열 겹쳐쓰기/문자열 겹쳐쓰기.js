function solution(my_string, overwrite_string, s) {
    const before_overwrite_string = my_string.slice(0, s)
    const after_overwrite_string = my_string.slice(s + overwrite_string.length)
    console.log(before_overwrite_string, after_overwrite_string)
    return before_overwrite_string.concat(overwrite_string).concat(after_overwrite_string);
}