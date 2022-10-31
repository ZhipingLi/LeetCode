const {Union_Find} = require('../Union-Find.js')

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
  const uf = new Union_Find(n)
  edges.forEach(([a, b]) => uf.union(a, b))
  return uf.count()
 }