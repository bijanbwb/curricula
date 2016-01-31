/* @flow */
function add(x: number, y: number): number {
  return x + y;
}

add(2, 4);

/* this shouldn't be valid as per definition! */
add('foo', 'bar');
