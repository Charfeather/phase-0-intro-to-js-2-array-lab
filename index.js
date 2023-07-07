// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph){
    Ralph=cats.push("Ralph")
}
function destructivelyPrependCat(Bob){
    Bob=cats.unshift("Bob")
}
function destructivelyRemoveLastCat(Garfield){
    Garfield=cats.splice(2)
}
function destructivelyRemoveFirstCat(Milo){
    Milo=cats.splice(0,1)
}
function appendCat(Broom){
   const updatedCats=[...cats,Broom]
   return updatedCats
}
function prependCat(Arnold){
    const preCat=[Arnold,...cats]
    return preCat
}
function removeLastCat(removeLast){
    removeLast=cats.slice(0,2)
    return removeLast
}
function removeFirstCat(removeFirst){
    removeFirst=cats.slice(1)
    return removeFirst
}